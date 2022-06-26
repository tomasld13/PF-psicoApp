import './App.css';
import { Navigate, Route, Routes } from "react-router-dom";
import CheckingAuth from './Components/CheckingAuth/CheckingAuth.jsx';
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
      <h1 className="text-3xl font-bold underline">
      Hello world!
      </h1>
        {
          (status === 'authenticated') 
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
