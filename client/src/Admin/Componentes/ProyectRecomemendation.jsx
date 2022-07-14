import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Badge from "./Badge";
import AvatarImage from '../Assets/face1.jpg';
import { cardShadow, hoverEffect } from "../Utils/index";
import { getPsychologyID } from '../../slice/psico/thunks.js';
import Loading from "../../Components/Loading/Loading";

function ProjectRecommendation() {

  const psicologo = useSelector(state => state.psicology.pychoId);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPsychologyID(15));
  }, [])
  
  
  return (
    <RecommendProject>
      {
        psicologo.id ? 
        <CardContent>
          <Detail>
            <InfoContainer>
              <Avatar>
                <img src={psicologo.usuario.avatar ? psicologo.usuario.avatar : AvatarImage} alt="" />
              </Avatar>
              <Info>
                <InfoName>{`${psicologo.usuario.name} ${psicologo.usuario.lastname}`}</InfoName>
                <InfoUpdate>Profesional del mes</InfoUpdate>
              </Info>
            </InfoContainer>
            <Badge content="Premiado" />
          </Detail>
          <Title>
            {psicologo.especialidades[0]?.especialidad}
          </Title>
          <ProjectInfo>
          Premiamos al mejor psicologo por mes dandole regalos exclusivos.
          </ProjectInfo>
          <PriceContainer>
            <Price>$80.000/Mes</Price>
            <Badge content="Full Time" clean />
          </PriceContainer>
        </CardContent>
        : <>
          <Loading />
        </>
      }
    </RecommendProject>
  );
}

const RecommendProject = styled.div`
  border-radius: 1rem;
  margin-top: -0.6rem;
  margin-left: 2rem;
  height: 130%;
  padding: 1rem;
  background-color: white;
  width: 30vw;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 960px) {
    height: max-content;
    width: 80%;
    margin: 2rem 0;
  }
`;

const CardContent = styled.div`
  margin: 0.4rem;
`;

const Detail = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (min-width: 320px) and (max-width: 960px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.2rem;
    margin-bottom: 1rem;
  }
`;
const InfoContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Avatar = styled.div`
  margin-right: 1rem;
  img {
    height: 5rem;
    border-radius: 5rem;
    width: auto;
  }
`;
const Info = styled.div``;
const InfoName = styled.h3`
  font-weight: 500;
`;
const InfoUpdate = styled.h5`
  font-weight: 300;
`;
const Title = styled.h4`
  font-weight: 500;
`;
const ProjectInfo = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.9rem;
  color: #3b3b3b;
  margin-bottom: 0.5em;
`;
const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 1rem;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  background-color: rgba(146, 166, 255, 0.3);
  @media screen and (min-width: 320px) and (max-width: 960px) {
    flex-direction: column;
    gap: 0.2rem;
  }
`;
const Price = styled.div``;

export default ProjectRecommendation;