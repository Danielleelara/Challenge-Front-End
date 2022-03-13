import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import api from '../api';
import Modal from "../Components/Modal";


function Patients (){
    const { id } = useParams()
    const[patient, setPatient] = useState([]);
    
    useEffect(() => {
        async function getPatient() {
          const response = await api.get(`${id}`);
          setPatient(response.data.results);
          
        }
        getPatient();
      }, [id]);
      

    return(
      <Modal
        patient={patient}
      
      />
    )
}

export default Patients