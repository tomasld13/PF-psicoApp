import './App.css';
import { Route, Routes } from "react-router-dom";
import CheckingAuth from './Components/CheckingAuth/CheckingAuth.jsx';
import PsicoApp from './Components/PsicoApp/PsicoApp';
import AuthRoutes from './Components/AuthRoutes/AuthRoutes';
import { useCheckAuth } from './hooks/useCheckAuth';
import { useCheckAuthBack } from './hooks/useCheckAuthBack';

function App() {
  
  const status = useCheckAuth();
  const statusBack = useCheckAuthBack();

  if (status === 'checking' || statusBack.status === 'checking') {
    return <CheckingAuth />
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
