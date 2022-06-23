import './App.css';
import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home/Home.jsx";
import Psychologists from './Components/Psychologists/Psychologists.jsx';
import Nav from './Components/Nav/Nav.jsx'
import Footer from './Components/Footer/Footer.jsx'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/psico' element={<Psychologists/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
