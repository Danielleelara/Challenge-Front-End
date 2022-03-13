import './App.css';
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import { useState, useEffect } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Details from './Pages/Details';
import api from './api';


function App() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    async function getPatients() {
      const response = await api.get("?results=50");
      setPatients(response.data.results);
      
    }
    getPatients();
  }, []);

  console.log(patients);
  return (
    
    <Router>
      <Header />
      <Routes >
          <Route path='/' element={<Home patients={patients}/>}/>
          <Route path='/details/:id' element={<Details />}/>
      </Routes >
      <Footer />
    </Router>
  )
}

export default App;
