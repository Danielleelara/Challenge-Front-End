import './App.css';
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Details from './Pages/Details';


function App() {
  return (
    
    <Router>
      <Header />
      <Routes >
          <Route path='/'element={<Home/>}/>
          <Route path='/details/:id' element={<Details />}/>
      </Routes >
      <Footer />
    </Router>
  )
}

export default App;
