import { Grid, Stack } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { ButtonBase } from '../../components/Button';
import InputSearch from '../../components/InputSearch';
import ProductItem from '../../components/ProductItem';
import { Sidebar } from '../../components/Sidebar';
import Table from '../../components/Table';
import { api } from '../../services/api';
import { debounce } from 'lodash';
import { IProducts } from '../../utils/types/productTypes';
import * as S from './styles';
import { Header } from '../../components/Header';
import { useNavigate } from "react-router-dom";
import { useSnackbar } from 'notistack';


const headCells = [
  {
    align: false,
    disablePadding: false,
    label: 'produto',
  },
  {
    align: false,
    disablePadding: false,
    label: 'data de criação',
  },
  {
    align: false,
    disablePadding: false,
    label: 'preço',
  },
  {
    align: false,
    disablePadding: false,
    label: 'estoque',
  },
  {
    align: false,
    disablePadding: false,
    label: 'vendas',
  },
  {
    align: false,
    disablePadding: false,
    label: 'marca',
  },
  {
    align: false,
    disablePadding: false,
    label: '',
  },
];

export function Products() {
  const navigate = useNavigate();
  const [products, setProducts] = useState<IProducts[]>([]);
  const [searchText, setSearchText] = useState<string>('');
  const token = localStorage.getItem('userToken');
  const { enqueueSnackbar } = useSnackbar();


  async function getProducts(e?: string): Promise<void> {
    try {
      const response: { data: IProducts[] } = await api.get('/produto' || e, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      
      if (response.data.length > 0) {
        setProducts(response.data);
      } else {
        enqueueSnackbar('Erro ao buscar produtos', {
          variant: 'error',
        });
      }
    } catch {
      enqueueSnackbar('Erro ao buscar produtos', {
        variant: 'error',
      });
    }
  }

  function handleSearch(e: string): void {
    setSearchText(e);
    if (e) {
      getProducts(`/produto?search=${e}`);
    } else {
      getProducts();
    }
  }

  const delayedHandleSearch = useCallback(
    debounce(handleSearch, 1000),
    []
  );

  useEffect(() => {
    if (products.length > 0) {
      delayedHandleSearch(searchText);
    }
  }, [searchText]);

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
    getProducts();
  }, []);


  return (
    <>
      <Header />
      <Stack direction='row' paddingRight='1.5rem'>
        <Sidebar />
        <S.ProductContainer>
          <Grid container spacing={4} alignItems='center'>
            <Grid item xs={2}>
              <h1>Produtos</h1>
            </Grid>
              <Grid item xs={8}>
                <InputSearch
                  label=' '
                  fieldName='Pesquisar'
                  placeholder='Pesquisar...'
                  uncontrolledOnChange={() => setSearchText}
                  style={{ width: '100%' }}
                />
            </Grid>
            <Grid item xs={2}>
              <Stack>
                <ButtonBase text='Criar novo' variant='contained'/>
              </Stack>
            </Grid>
          </Grid>

          <Stack direction='column' mt={4}>
            <Table rows={products} headCells={headCells} Row={ProductItem} type="simple"/>
          </Stack>
        </S.ProductContainer>
      </Stack>
    </>
  );
}