import './App.css';
import { Navigate, Route, Routes } from "react-router-dom";
import CheckingAuth from './Components/CheckingAuth/CheckingAuth';
import PsicoApp from './Components/PsicoApp/PsicoApp';
import AuthRoutes from './Components/AuthRoutes/AuthRoutes';
import { useCheckAuth } from './hooks/useCheckAuth';

function App() {
  
  const status = useCheckAuth();

  if (status === 'checking') {
    return <CheckingAuth />
  }

  return (
    <div className="App">
      <Routes>
        {
          (status === 'authenticated') 
          ? <Route path="/*" element={<PsicoApp/>}/>
          : <Route path='/auth/*' element={<AuthRoutes/>} />
        }
        <Route path='/*' element={ <Navigate to='/auth/login'/>}/>
      </Routes>
    </div>
  );
}

export default App;
