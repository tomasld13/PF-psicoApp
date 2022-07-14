import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import AvatarImage from "../Assets/avatarImage.jpg";
import AvatarImage2 from "../Assets/avatarImage.jpg";
import { cardShadow, hoverEffect, themeColor } from "../Utils/index";
import { getPatient } from '../../slice/psico/thunks.js';
import Loading from '../../Components/Loading/Loading.jsx';

function Pacientes() {

  const pacientes = useSelector(state => state.psicology.patients);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getPatient());
  }, []);

  return (
    <YourProjects>
      {
        pacientes.length > 0 ? <>
          <Project>
        <Avatar>
          <img src={AvatarImage} alt="" />
        </Avatar>
        <Detail>
          <Title>{pacientes[0].name}</Title>
          <SubTitle>Paciente</SubTitle>
        </Detail>
      </Project>
      <Project>
        <Avatar>
          <img src={AvatarImage} alt="" />
        </Avatar>
        <Detail>
          <Title>{pacientes[1].name}</Title>
          <SubTitle>Paciente</SubTitle>
        </Detail>
      </Project>
        </> : <Project>
          <Loading />
        </Project>
      }
      <AllProjects><a href="/pacientes">Ver todos los pacientes</a></AllProjects>
    </YourProjects>
  );
}

const YourProjects = styled.div`
  margin-top: -2rem !important;
  height: 80%;
  width: 90%;
  background-color: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 960px) {
    height: max-content;
    width: 80%;
    margin-top: 1rem;
  }
`;

const Project = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;
const Avatar = styled.div`
  img {
    height: 4rem;
    width: 4rem;
    border-radius: 4rem;
  }
`;
const Detail = styled.div`
  margin-left: 2rem
`;
const Title = styled.h3`
  font-weight: 500;
  @media screen and (min-width: 320px) and (max-width: 960px) {
    font-size: 1rem;
  }
`;
const SubTitle = styled.h5`
  font-weight: 300;
`;
const AllProjects = styled.h5`
  text-align: end;
  color: ${themeColor};
  cursor: pointer;
`;

export default Pacientes;