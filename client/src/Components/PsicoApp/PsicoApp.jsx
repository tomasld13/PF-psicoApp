import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import ContactSection from "../Contact/ContactSection";
import Footer from "../Footer/Footer";
import { Home } from "../Home/Home";
import Nav from "../Nav/Nav";
import Psychologists from "../Psychologists/Psychologists";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import PsicoDetails from "../PsicoDetails/PsicoDetails.jsx"
import PacientDetails from '../PacientDetails/PacientDetails.jsx'
import { Calendar } from "../Calendar/Calendar";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from '../Profile/Helpers/index'
import Main from "../Profile/Main";
import Cover from '../Profile/Cover';
import SectionTitle from "../SectionTitle/SectionTitle";
import AdminApp from '../../Admin/AdminApp'

;
import UserList from "../../Admin/Componentes/Users/UserList";
import UserAdmin from '../../Admin/Componentes/UserPage/UserAdmin.jsx';
import PsicoList from "../../Admin/Componentes/Psicologos/PsicoList";
import PsicoAdmin from "../../Admin/Componentes/PsicoPage/PsicoAdmin";
import CreateUser from "../../Admin/Componentes/UserPage/CreateUser";
import CreatePsico from "../../Admin/Componentes/PsicoPage/CreatePsico";
import ForPsicos from "../ForPsicos/ForPsicos"


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
                         <Route path='/paciente/:id' element={
                            <ChakraProvider theme={theme}>
                                <PacientDetails/>
                                {/* <PsicoDetails/> */}
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
                        <Route path="/" element={<ForPsicos />}/>
                        <Route path="/*" element={ <Navigate to="/" /> } />
                    </Routes>
                </>
                : <>
                    <Routes>
                        <Route path="/" element={<AdminApp />}/>
                        <Route path='/pacientes' element={<UserList />} />
                        <Route path='/pacientes/:id' element={<UserAdmin />} />
                        <Route path='/pacientes/crear' element={<CreateUser />} />
                        <Route path='/psicologos' element={<PsicoList />} />
                        <Route path='/psicologos/:id' element={<PsicoAdmin />} />
                        <Route path='/psicologos/crear' element={<CreatePsico />} />
                        <Route path="/*" element={ <Navigate to="/" /> } />
                    </Routes>
                </>
            }
        </>
    );
}
