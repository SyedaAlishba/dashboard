import React from 'react'
import './withdrawnfunds.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';

function createData(description, amount, ledgerBalance, date) {
    return { description, amount, ledgerBalance, date
     };
  }
  
  const rows = [
    createData('Withdrawn to ****1234', "-$100", "$80", "30th May, 2022"),
    createData('Withdrawn to ****1234', "-$100", "$80", "30th May, 2022"),
    createData('Withdrawn to ****1234', "-$100", "$80", "30th May, 2022"),
    createData('Withdrawn to ****1234', "-$100", "$80", "30th May, 2022"),
    
  ];
  

const WithdrawnFunds = () => {
  return (
    <Box >
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Desciption</TableCell>
            <TableCell align="left">Amount</TableCell>
            <TableCell align="left">Ledger Balance&nbsp;(g)</TableCell>
            <TableCell align="left">Date&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.description}
              </TableCell>
              <TableCell align="left"><div className='amountWithDraw'>{row.amount}</div></TableCell>
              <TableCell align="left">{row.ledgerBalance}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  )
}

export default WithdrawnFunds;