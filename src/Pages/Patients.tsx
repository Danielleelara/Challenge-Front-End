import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import api from '../api';
import Modal from "../Components/Modal/Modal";

type Props = {
  open: any; 
  handleClose: any; 
  currentPatient: any;
}


function Patients ({currentPatient, open, handleClose }: Props){
    const { id } = useParams()
    const[patient, setPatient] = useState([]);
    
    useEffect(() => {
        async function getPatient() {
          const response = await api.get(id, {referrerPolicy: "unsafe-url"});

          setPatient(response.data.results);
          
        }
        getPatient();
      }, [id]);
      

    return(
      <Modal
        currentPatient={patient}
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
      />
    )
}

export default Patients