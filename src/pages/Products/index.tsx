import { Grid, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { ButtonBase } from '../../components/Button';
import { Input } from '../../components/Input';
import ProductItem from '../../components/ProductItem';
import { CustomSelect } from '../../components/Select';
import { Sidebar } from '../../components/Sidebar';
import Table from '../../components/Table';
import { api } from '../../services/api';
import { IProducts } from '../../utils/types/productTypes';
import * as S from './styles';

const options = [
  {
    value: 'createdAt',
    label: 'Data de criação',
  },
  {
    value: 'price',
    label: 'Preço',
  },
  {
    value: 'stock',
    label: 'Estoque',
  },
  {
    value: 'sails',
    label: 'Vendas',
  },
  {
    value: 'mark',
    label: 'Marca',
  },
];

const rows = [
  {
    image: 'http://placeimg.com/640/480/transport',
    name: 'Eugene Goldner',
    createdAt: '10 de Abril de 2020',
    preco: 'R$ 1.000,00',
    stock: '12345',
    sail: 'R$ 2.000,00',
    mark: 'Incredible Metal Scsdcsc',
  },
  {
    image: 'http://placeimg.com/640/480/transport',
    name: 'Goldner Eugene',
    createdAt: '20 de Abril de 2020',
    preco: 'R$ 1.000,00',
    stock: '12668',
    sail: 'R$ 1.000,00',
    mark: 'Incredible Metal Sausages',
  },
  {
    image: 'http://placeimg.com/640/480/transport',
    name: 'Eugene Goldner',
    createdAt: '30 de Abril de 2020',
    preco: 'R$ 3.000,00',
    stock: '12668',
    sail: 'R$ 1.000,00',
    mark: 'Incredible Metal Sausages',
  },
  {
    image: 'http://placeimg.com/640/480/transport',
    name: 'Eugene Goldner',
    createdAt: '30 de Abril de 2020',
    preco: 'R$ 3.000,00',
    stock: '12668',
    sail: 'R$ 1.000,00',
    mark: 'Incredible Metal Sausages',
  },
  {
    image: 'http://placeimg.com/640/480/transport',
    name: 'Eugene Goldner',
    createdAt: '30 de Abril de 2020',
    preco: 'R$ 3.000,00',
    stock: '12668',
    sail: 'R$ 1.000,00',
    mark: 'Incredible Metal Sausages',
  },
  {
    image: 'http://placeimg.com/640/480/transport',
    name: 'Eugene Goldner',
    createdAt: '30 de Abril de 2020',
    preco: 'R$ 3.000,00',
    stock: '12668',
    sail: 'R$ 1.000,00',
    mark: 'Incredible Metal Sausages',
  },
  {
    image: 'http://placeimg.com/640/480/transport',
    name: 'Eugene Goldner',
    createdAt: '30 de Abril de 2020',
    preco: 'R$ 3.000,00',
    stock: '12668',
    sail: 'R$ 1.000,00',
    mark: 'Incredible Metal Sausages',
  },
  {
    image: 'http://placeimg.com/640/480/transport',
    name: 'Eugene Goldner',
    createdAt: '30 de Abril de 2020',
    preco: 'R$ 3.000,00',
    stock: '12668',
    sail: 'R$ 1.000,00',
    mark: 'Incredible Metal Sausages',
  },
];

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
  const [products, setProducts] = useState<IProducts[]>([]);

  async function getProducts() {
    try {
      const response: {data: IProducts[]} = await api.get('/produto');
      
      
      if(response.data.length > 0) {
        console.log(response.data);
        setProducts(response.data);
      } else {
        console.log('Não há produtos cadastrados');
      }
    } catch {

    }
  }

  useEffect(() => {
    getProducts();
  }, []);
  

  return (
    <Stack direction='row' paddingRight='1.5rem'>
      <Sidebar />
      <S.ProductContainer>
        <Grid container spacing={4} alignItems='center'>
          <Grid item xs={2}>
            <h1>Produtos</h1>
          </Grid>
          <Grid item xs={3}>
            <CustomSelect label='Filtrar' name='filter' options={options}/>
          </Grid>
          <Grid item xs={5}>
            <Input label='Pesquisar'/>
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
  );
}