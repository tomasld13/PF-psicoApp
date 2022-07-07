import './App.css';
import { Route, Routes } from "react-router-dom";
import CheckingAuth from './Components/CheckingAuth/CheckingAuth.jsx';
import PsicoApp from './Components/PsicoApp/PsicoApp';
import AuthRoutes from './Components/AuthRoutes/AuthRoutes';
import { useCheckAuth } from './hooks/useCheckAuth';
import { useCheckAuthBack } from './hooks/useCheckAuthBack';
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from './Components/Profile/Helpers/index'
import { RegisterGoogle } from './Components/ResgisterGoogle/RegisterGoogle';

function App() {
  
  const status = useCheckAuth();
  const statusBack = useCheckAuthBack();

  if ( statusBack.status === 'checking' || status === 'checking') {
    return <CheckingAuth />
  }

  if (status === 'checking-google') {
    return <RegisterGoogle />
  }

  

  return (
    <div className="App">
        {
          (status === 'authenticated' || statusBack.status === 'authenticated') 
          ? <Routes>
            <Route path="/*" element={<PsicoApp/>}/>
          </Routes>
          : <Routes>
              <Route path="/*" element={<PsicoApp/>}/>
              <Route path='/auth/*' element={<AuthRoutes/>} />
            </Routes>
        }
    </div>
  );
}

export default App;
