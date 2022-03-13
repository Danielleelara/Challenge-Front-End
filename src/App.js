import './App.css';
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import { useState, useEffect } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';

import api from './api';


function App() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    async function getPatients() {
      const response = await api.get("?results=50");
      console.log(response.data.results)
      setPatients(response.data.results);
    }
    getPatients();
  }, []);

  
  return (
    
    <Router>
      <Header />
      <Routes >
          <Route path='/' element={<Home patients={patients}/>}/>
      </Routes >
      <Footer />
    </Router>
  )
}

export default App;
