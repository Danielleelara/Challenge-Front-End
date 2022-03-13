import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import StyledModal from '../Components/Card';


export default function DenseTable({patients}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 250 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Gender</TableCell>
            <TableCell align="center">Birth</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {patients.map((patient) => (
            <TableRow
              key={patient.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{patient.name.first} {patient.name.last}</TableCell>
              <TableCell align="center">{patient.gender}</TableCell>
              <TableCell align="center">{patient.dob.date}</TableCell>
              <TableCell align="center">
                 <StyledModal/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
