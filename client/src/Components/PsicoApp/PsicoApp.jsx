import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import ContactSection from "../Contact/ContactSection";
import Footer from "../Footer/Footer";
import { Home } from "../Home/Home";
import Nav from "../Nav/Nav";
import Psychologists from "../Psychologists/Psychologists";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import PsicoDetails from "../PsicoDetails/PsicoDetails.jsx"
import { Calendar } from "../Calendar/Calendar";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from '../Profile/Helpers/index'
import Main from "../Profile/Main";
import Cover from '../Profile/Cover'
import SectionTitle from "../SectionTitle/SectionTitle";
import { LandingPsico } from "../LandingPsico/LandingPsico";
import AdminApp from '../../Admin/AdminApp'

;
import UserList from "../../Admin/Componentes/Users/UserList";
import Sidebar from "../Profile/Sidebar/Sidebar";


export default function PsicoApp() {

    const { rolId }  = useSelector(state => state.auth.authBack);

    return (
        <>
        
            {
                rolId === 1 || rolId === null 
                ? <>
                    <Nav/>
                    <ScrollToTop />
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/calendar" element={<Calendar />}/>
                        <Route path='/psico' element={<Psychologists/>} />
                        <Route path='/psico/:id' element={
                            <ChakraProvider theme={theme}>
                                {/* <Cover /> */}
                                {/* <MainDetails/> */}
                                <PsicoDetails/>
                            </ChakraProvider>
                        }/>
                        <Route path='/contacto' element={ <ContactSection/>} />  
                        <Route path="/*" element={ <Navigate to="/" /> } />
                        <Route path='/perfil' element={
                        <ChakraProvider theme={theme}>  
                            <SectionTitle heading="Bienvenido a tu perfil" subheading=""/>
                            <Cover />
                            <Main />           
                        </ChakraProvider> } />
                    </Routes>
                    <Footer/>
                </>
                : rolId === 2 ? <> 
                    <Nav/>
                    <Routes>
                        <Route path="/" element={<LandingPsico />}/>
                        <Route path="/*" element={ <Navigate to="/" /> } />
                    </Routes>
                </>
                : <>
                    <Routes>
                        <Route path="/" element={<AdminApp />}/>
                        <Route path='/pacientes' element={<UserList />} />
                        <Route path="/*" element={ <Navigate to="/" /> } />
                    </Routes>
                </>
            }
        </>
    );
}
