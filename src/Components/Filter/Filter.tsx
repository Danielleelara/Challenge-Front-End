import React from 'react';
import styles from './Filter.module.css'
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import { Patient } from '../Modal/Modal';

type Props = {
  patients?: Patient[];
  onFilterChange: (event: SelectChangeEvent) => void;
  props: any;
}

function Filter({patients, onFilterChange, props}: Props) {
  
  return (
    <div className={styles.container}> 
    <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Escolha seu paciente</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    className={styles.campoFiltro}
    onChange={onFilterChange}
  >
      <MenuItem value='limpar' {...props}>
        <em>Limpar</em>
      </MenuItem>
  
      {patients.map((patient, index) => <MenuItem {...props} value={patient.cell || ''} key={patient.cell + index}><span>{patient.name.first} {patient.name.last}</span> </MenuItem > )}
     
      </Select>
      </FormControl>  
    </div>
  );
}

export default Filter;

