import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { debounce } from 'lodash';
import * as S from './styles';


const RoundedTable = {
  borderRadius: 16,
  boxShadow: 'none',
  border: '1px solid #dddddd',
};

const SimpleTable = {
  borderRadius: 0,
  boxShadow: 'none',
  border: 'none',
};
interface HeadCell {
  disablePadding: boolean;
  label: string;
  align: boolean;
}

interface EnhancedTableHeadProps {
  numSelected: number;
  rowCount: number;
  headCells: HeadCell[];
}
// Header
const EnhancedTableHead: React.FC<EnhancedTableHeadProps> = ({
  numSelected,
  rowCount,
  headCells,
}) => {
  return (
    <TableHead sx={{ background: '#1F2029' }}>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.label}
            align={headCell.align ? 'right' : 'left'}
            padding="normal"
            style={{
              fontSize: 'var(--medium)',
              color: '#4B4D63',
              fontWeight: 500,
              borderBottom: '1px solid #616480',
            }}
          >
            {headCell.label.toUpperCase()}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

interface EnhancedTableProps {
  rows: any[];
  headCells?: HeadCell[];
  Row: any;
  inputPagination?: boolean;
  type: 'simple' | 'rounded';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const EnhancedTable: React.FC<EnhancedTableProps> = ({
  rows,
  headCells,
  Row,
  inputPagination,
  type,
  onClick,
}) => {
  const [selected, ___] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage] = React.useState(5);
  const [pageInput, setPageInput] = React.useState<number>(page + 1);

  const handleChangePage = (newPage: number): void => {
    setPage(newPage);
  };

  const deleyedHandleChangePage = React.useCallback(
    debounce(handleChangePage, 1000),
    []
  );

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: '100%' }}>
      <Paper
        sx={{ width: '100%', mb: 2, overflow: 'hidden' }}
        style={type === 'simple' ? SimpleTable : RoundedTable}
      >
        <TableContainer>
          <Table aria-labelledby="tableTitle" size="medium">
            {headCells && (
              <EnhancedTableHead
                numSelected={selected.length}
                rowCount={rows.length}
                headCells={headCells}
              />
            )}
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const labelId = `enhanced-table-${index}`;

                  if (onClick)
                    return (
                      <Row labelId={labelId} row={row} onClick={onClick} />
                    );

                  return <Row labelId={labelId} row={row} />;
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

    </Box>
  );
};

export default EnhancedTable;
