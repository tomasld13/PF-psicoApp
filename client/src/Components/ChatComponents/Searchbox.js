import React, { useContext } from 'react'
import { AuthContext } from '../../context/authContext/AuthContext';
import { useNavigate} from 'react-router-dom';


export const Searchbox = () => {
    const navigate = useNavigate();
    const { auth } = useContext( AuthContext );
    
    return (
        <div className="headind_srch">
            <div className="recent_heading mt-2">
                <h4>{ auth.name }</h4>
            </div>
            <div className="srch_bar">
                <div className="stylish-input-group">
                    <button 
                        className="btn text-danger"
                        onClick={ ()=>navigate(-1) }
                    >
                        Salir
                    </button>
                </div>
            </div>
        </div>
    )
}
