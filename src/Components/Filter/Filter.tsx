import React from 'react';
import styles from './Filter.module.css'
import { MenuItem, TextField } from '@mui/material';

function Filter({patients, onFilterChange}) {
  
  return (
    <div className={styles.container}> 
      <TextField
        select
        label="Escolha seu paciente"
        className={styles.campoFiltro}
        onChange={onFilterChange}
      >
        <MenuItem value='limpar'>
          <em>Limpar</em>
        </MenuItem>
        {patients.map((patient, index) => <MenuItem key={patient.id.value + index} value={patient}>{patient.name.first} {patient.name.last}</MenuItem>)}
      </TextField>
      
      {/* <TextField
        className="campoFilter"
        select
        label="Escolha"
        
      >
        <MenuItem value="">
            <em>Limpar</em>
          </MenuItem>
          {patients.map(patient => <MenuItem key={patient.id.value} value={patient}>{patient.name.first}</MenuItem>)}
        
        </TextField> */}
      
      </div>
  );
}

export default Filter;

