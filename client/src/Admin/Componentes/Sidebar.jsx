import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import Badge from './Badge'
import AvatarImage from '../Assets/avatarImage.jpg'
import { darkThemeColor } from '../Utils/index'
import { RiHomeLine } from "react-icons/ri";
import { MdOutlinePersonSearch } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlinePieChart, AiFillMessage } from "react-icons/ai";
import { startLogout } from '../../slice/auth/thunks'
// import { Link } from 'react-router-dom'


function Sidebar() {

  const dispatch = useDispatch()

  const onLogout = () => {
    dispatch(startLogout());
  }

  return (
    <Container>
      <ProfileContainer>
        <Avatar src={AvatarImage} />
        <Name>ADMINISTRADOR</Name>
        <Badge content="ADMIN" />
      </ProfileContainer>
      <LinksContainer>
        <Links>
          <LinkStyle>
            <RiHomeLine />
            <a href='/'>Dashboard</a>
          </LinkStyle>
          <LinkStyle>
            <BsFillPersonFill />
            <a href='/pacientes'>Pacientes</a>
          </LinkStyle>
          <LinkStyle>
            <MdOutlinePersonSearch />
            <a href='/psicologos'>Profesionales</a>
          </LinkStyle>
          <LinkStyle>
            <AiOutlinePieChart />
            <a href='/reportes'>Reportes</a>
          </LinkStyle>
          <LinkStyle>
            <AiFillMessage />
            <a href='/mensajes'>Mensajes</a>
          </LinkStyle>
        </Links>
      </LinksContainer>
        <ContactContainer><a onClick={onLogout}>Cerrar Sesión</a></ContactContainer>
    </Container>
  );
}
const Container = styled.div`
  width: 20%;
  height: 50%;
  margin-top: 2.5rem;
  margin-left: 2.5rem;
  border-radius: 2rem;
  background-color: #575989;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  @media screen and (min-width: 320px) and (max-width: 960px) {
    display: none;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Montserrat';
`;

const Avatar = styled.img`
  height: 7rem;
  border-radius: 6rem;
  margin-top: 20%;
`;

const Name = styled.h1`
  color: white;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0.8rem 0 0.5rem 0;
  font-family: 'Montserrat';
`;

const LinksContainer = styled.div`
  background-color: ${darkThemeColor};
  height: 100%;
  width: 100%;
  border-radius: 2rem;
  font-family: 'Montserrat';
`;

const Links = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  height: 60%;
  font-family: 'Montserrat';
`;

const LinkStyle = styled.li`
  margin-left: 25%;
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
  color: #e4e4e4;
  cursor: pointer;
  h3 {
    font-weight: 300;
    font-family: 'Montserrat';
  }
  svg {
    font-size: 1.1rem;
    margin-top: 3%;
  }
`;

const ContactContainer = styled.div`
  width: 70%;
  background-color: #575989;
  color: #c4c4c4;
  margin-bottom: 5rem;
  height: 15%;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  a {
    color: white;
    cursor: pointer;
    text-decoration: none;
    font-family: 'Montserrat';
  }
  @media screen and (min-width: 320px) and (max-width: 960px) {
    margin-bottom: 2rem;
    width: 15rem;
    height: 100% !important;
  }
`;

export default Sidebar;