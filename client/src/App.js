import './App.css';
import { Navigate, Route, Routes } from "react-router-dom";
import CheckingAuth from './Components/CheckingAuth/CheckingAuth.jsx';
import PsicoApp from './Components/PsicoApp/PsicoApp';
import AuthRoutes from './Components/AuthRoutes/AuthRoutes';
import { useCheckAuth } from './hooks/useCheckAuth';
import ContactSection from './Components/Contact/ContactSection';

function App() {
  
  const status = useCheckAuth();

  if (status === 'checking') {
    return <CheckingAuth />
  }

  return (
    <div className="App">
        {
          (status === 'authenticated') 
          ? <Routes>
            <Route path="/*" element={<PsicoApp/>}/>
          </Routes>
          : <Routes>
              <Route path="/*" element={<PsicoApp/>}/>
              <Route path='/auth/*' element={<AuthRoutes/>} />
              <Route path='/contacto' element={
              <ContactSection/>} />
            </Routes>
        }
    </div>
  );
}

export default App;
