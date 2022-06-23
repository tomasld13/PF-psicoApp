import './App.css';
import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home/Home.jsx";
import Psychologists from './Components/Psychologists/Psychologists.jsx';
import Nav from './Components/Nav/Nav.jsx'
import Login from './Components/Login/Login';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Nav/>}/> 
        <Route path="/" element={<Home/>}/>
        <Route path='/psico' element={<Psychologists/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
