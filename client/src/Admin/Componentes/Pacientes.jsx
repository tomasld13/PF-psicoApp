import React from "react";
import styled from "styled-components";
import AvatarImage from "../Assets/avatarImage.jpg";
import AvatarImage2 from "../Assets/avatarImage.jpg";
import { cardShadow, hoverEffect, themeColor } from "../Utils/index";

function Pacientes() {
  return (
    <YourProjects>
      <Project>
        <Avatar>
          <img src={AvatarImage} alt="" />
        </Avatar>
        <Detail>
          <Title>Chino</Title>
          <SubTitle>Paciente</SubTitle>
        </Detail>
      </Project>
      <Project>
        <Avatar>
          <img src={AvatarImage} alt="" />
        </Avatar>
        <Detail>
          <Title>Nombre</Title>
          <SubTitle>Paciente</SubTitle>
        </Detail>
      </Project>
      <AllProjects><a href="/pacientes">Ver todos los pacientes</a></AllProjects>
    </YourProjects>
  );
}

const YourProjects = styled.div`
  margin-top: -3rem !important;
  height: 80%;
  width: 90%;
  background-color: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 960px) {
    height: max-content;
    display: flex;
    flex-direction: column;
    width: 95%;
    margin-top: 3rem !important;
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
  margin-left: 1rem;
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