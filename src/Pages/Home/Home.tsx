import React,{ useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Modal from '../../Components/Modal/Modal';
import api from '../../api';
import Filter from '../../Components/Filter/Filter';
import './Home.css';
import { Patient } from '../../Components/Modal/Modal';
import { Container, SelectChangeEvent } from '@mui/material';


export default function Home() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const [currentPatient, setCurrentPatient]= useState<Patient>({});
  const [patientsFiltered, setPatientsFiltered]= useState<Patient[]>([]);
  const [filtered, setFiltered]= useState<Patient>();
  const [loading, setLoading]= useState(false);


  useEffect(() => {
    async function getPatients() {
      try {
        setLoading(true)
        const response = await api.get("?results=50", {referrerPolicy: "unsafe-url"});
        setPatients(response.data.results);
        setPatientsFiltered(response.data.results)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    getPatients();
  }, []);

  function handlePatientFiltered(event: SelectChangeEvent){
    const patientCurrent = event.target.value ;
    if (patientCurrent === "limpar"){
      return setPatientsFiltered(patients)
    }
      const patientsFiltered = patients.filter((patient) => {
        return patientCurrent === patient.id.value 
    })
    
    setPatientsFiltered(patientsFiltered)
  }

  return (
    <>
    {loading ? <h1 color='red'>Loading</h1> :
    <Container >
    <Filter 
      onFilterChange={handlePatientFiltered} 
      patients={patients}
      selectedPatient={patientsFiltered} 
    />
      <TableContainer className="wrapper" component={Paper}>
        <Table sx={{ minWidth: 200 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow className='cabecalho-root' >
              <TableCell align="center">Nome</TableCell>
              <TableCell align="center">Gênero</TableCell>
              <TableCell align="center">Aniversário</TableCell>
              <TableCell align="center">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            {patientsFiltered.map((patient, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="center">{patient.name.first} {patient.name.last}</TableCell>
                <TableCell align="center">{patient.gender}</TableCell>
                <TableCell align="center">{new Intl.DateTimeFormat().format(new Date(patient.dob.date))}</TableCell>
                <TableCell align="center"><Button classes={{root:"button-root"}} variant="contained"  onClick={()=>{
                  handleOpen()
                  setCurrentPatient(patient)
                }}>Visualizar</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
     <Modal 
      open={open} 
      handleClose={handleClose} 
      currentPatient={currentPatient}
     />
     </Container>
}
    </>
  );
}
