import { Route, Routes } from "react-router-dom";
import Footer from "../Footer/Footer";
import { Home } from "../Home/Home";
import Nav from "../Nav/Nav";
import Psychologists from "../Psychologists/Psychologists";

export default function PsicoApp() {
    return (
        <>
            <Nav/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path='/psico' element={<Psychologists/>} />
            </Routes>
            <Footer/>
        </>
    );
}
