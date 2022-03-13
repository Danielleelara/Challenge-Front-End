import './App.css';
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';


function App() {
  
  return (
    
    <Router>
      <Header />
      <Routes >
        <Route path='/' element={<Home/>}/>
      </Routes >
      <Footer />
    </Router>
  )
}

export default App;
