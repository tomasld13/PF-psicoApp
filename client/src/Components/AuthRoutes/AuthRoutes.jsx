import { Routes, Route } from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Register/Register";

export default function AuthRoutes() {
    return (
        <>
            <Routes>
                <Route path='/auth/login' element={<Login/>} />
                <Route path='/auth/register' element={<Register />} />
            </Routes>
        </>
    );
}
