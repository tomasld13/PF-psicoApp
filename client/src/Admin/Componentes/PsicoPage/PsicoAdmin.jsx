import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import './Psico.css';
import imageavatar from '../../Assets/face1.jpg';
import { MdLocationSearching, MdMailOutline, MdOutlineSystemSecurityUpdate, MdPermIdentity } from 'react-icons/md';
import Sidebar from '../Sidebar';
import { getPsychologyID } from '../../../slice/psico/thunks.js';
import Loading from '../../../Components/Loading/Loading';

export default function PsicoAdmin() {

  const psicologo = useSelector(state => state.psicology.pychoId);

  const {id} = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPsychologyID(id));
  }, []);
  
  console.log(psicologo);
  return (
    <>
    <Sidebar />
    <div className='user-admin-profile'>
        <div className="user-title-container">
          <h1 className="edit-user text-4xl font-bold">Psicologo</h1>
        </div>
        <div className="user-container">
          <div className="user-show">
            <div className="user-show-title">
              <span className="show-username">{psicologo.usuario ? psicologo.usuario.name : 'Nombre'}</span>
            </div>
            <div className="user-show-bottom">
              {
                psicologo.usuario ? <>  
                  <span className="user-show-tittle-bottom">
                    Detalles de la cuenta
                    <div className="user-show-info">
                    <MdPermIdentity className='user-show-icon'/>
                    <span className="user-show-input-title">{`${psicologo.usuario.name} ${psicologo.usuario.lastname}`}</span>
                    </div>
                    <div className="user-show-info">
                    <MdLocationSearching className='user-show-icon'/>
                    <span className="user-show-input-title">{psicologo.usuario.address}</span>
                    </div>
                    <div className="user-show-info">
                    <MdMailOutline className='user-show-icon'/>
                    <span className="user-show-input-title">{psicologo.usuario.email}</span>
                    </div>
                    <div className="user-show-info">
                    <MdOutlineSystemSecurityUpdate className='user-show-icon'/>
                    <span className="user-show-input-title">{psicologo.usuario.state ? 'activo' : 'inactivo'}</span>
                    </div>
                  </span>
                </> : <>
                  <Loading />
                </>
              }
            </div>
          </div>
        </div>
    </div>
  </>
  )
}