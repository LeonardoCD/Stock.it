import React from 'react';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import TableCell from '@mui/material/TableCell';
import Avatar from '@mui/material/Avatar';
import { Stack } from '@mui/material';
import { ButtonBase } from '../Button';
import { IProducts } from '../../utils/types/productTypes';

const StyledTableRow = styled(TableRow)(() => ({
  color: '#EEEEF2',
  th: {
    borderBottom: '0.5px solid #616480',
    color: '#EEEEF2',
  },
  td: {
    color: '#EEEEF2',
    borderBottom: '0.5px solid #616480',
    justfyContent: 'center',
  },
  '&.MuiTableCell-root': {
    padding: '0.5rem !important',
  },
  '&:nth-of-type(even)': {
    backgroundColor: '#1F2029',
  },
  '&:nth-of-type(odd)': {
    backgroundColor: '#1F2029',
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

interface ProductItemProps {
  row: IProducts;
  labelId: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const ProductItem: React.FC<ProductItemProps> = ({ row, labelId, onClick }) => {
  const data = new Date(row.createdAt).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
  
  const price = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(Number(row.preco));

  return (
    <StyledTableRow tabIndex={-1} key={row.id}>
      <TableCell component="th" id={labelId} scope="row" padding="normal">
        <Stack direction="row" sx={{ alignItems: 'center' }} spacing={2}>
          <Avatar
            src={row.avatar}
            sx={{ height: '2.5rem', width: '2.5rem', borderRadius: 3 }}
          />
          <p>{row.nome}</p>
        </Stack>
      </TableCell>
      <TableCell align="left">
        <p>{data}</p>
      </TableCell>
      <TableCell align="left">
        <p>{price}</p>
      </TableCell>
      <TableCell align="left">
        <p>{row.qt_estoque}</p>
      </TableCell>
      <TableCell align="left">
        <p>{row.qt_vendas}</p>
      </TableCell>
      <TableCell align="left">
        <p>{row.marca}</p>
      </TableCell>
      <TableCell align="left">
        <ButtonBase
          variant="contained"
          text="Editar"
          // style={{ height: '3rem', borderRadius: 8 }}
          onClick={() => {
            console.log(row);
          }}
        />
      </TableCell>
    </StyledTableRow>
  );
};

export default ProductItem;
