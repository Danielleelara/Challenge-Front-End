import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Modal from '../Components/Modal';
import api from '../api';
import Filter from '../Components/Filter'


export default function Home() {
  const [patients, setPatients] = useState([]);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const [currentPatient, setCurrentPatient]= useState({});
  const [patientsFiltered, setPatientsFiltered]= useState([]);


  useEffect(() => {
    async function getPatients() {
      const response = await api.get("?results=50");
      console.log(response.data.results)
      setPatients(response.data.results);
      setPatientsFiltered(response.data.results)
    }
    getPatients();
  }, []);

  function handlePatientFiltered(event){
    const patientCurrent = event.target.value;
    if (patientCurrent === "limpar"){
      return setPatientsFiltered(patients)
    }
      const patientsFiltered = patients.filter((patient) => {
      return patientCurrent.cell === patient.cell 
    })
    
    setPatientsFiltered(patientsFiltered)
  }

  return (
    <>
    <Filter onFilterChange={handlePatientFiltered} patients={patients}/>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 250 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Nome</TableCell>
              <TableCell align="center">Gênero</TableCell>
              <TableCell align="center">Aniversário</TableCell>
              <TableCell align="center">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            {patientsFiltered.map((patient) => (
              <TableRow
                key={patient.dob.date}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="center">{patient.name.first} {patient.name.last}</TableCell>
                <TableCell align="center">{patient.gender}</TableCell>
                <TableCell align="center">{new Intl.DateTimeFormat().format(new Date(patient.dob.date))}</TableCell>
                <TableCell align="center"><button onClick={()=>{
                  handleOpen()
                  setCurrentPatient(patient)
                }}>Visualizar</button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
     <Modal open={open} handleClose={handleClose} currentPatient={currentPatient} />
    </>
  );
}
