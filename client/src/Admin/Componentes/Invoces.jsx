import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Badge from "./Badge";
import AvatarImage from "../Assets/avatarImage.jpg";
import AvatarImage2 from "../Assets/avatarImage.jpg";
import { cardShadow, hoverEffect, themeColor } from "../Utils/index";
import { getPsicology } from '../../slice/psico/thunks.js';
import Loading from '../../Components/Loading/Loading.jsx';

function Invoices() {

  const psicologos = useSelector(state => state.psicology.psychologists);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPsicology());
  }, []);

  console.log(psicologos[1]);
  return (
    <InvoicesContainer>
      <CardContent>
        {
          psicologos.length > 0 ? <>
            <Invoice>
              <Info>
                <Avatar>
                  <img src={psicologos[0].avatar ? psicologos[0].avatar : AvatarImage} alt="" />
                </Avatar>
                <TextContainer>
                  <Title>{psicologos[0].name}</Title>
                  <SubTitle>{psicologos[0].psicologo.especialidades[0]?.especialidad}</SubTitle>
                </TextContainer>
              </Info>
              <Container>
                {
                  psicologos[0].state ? <Badge content="activo" activo />
                  : <Badge content="inhabilitado" inhabilitado />
                }
              </Container>
            </Invoice>
            <Invoice>
              <Info>
                <Avatar>
                  <img src={psicologos[1].avatar ? psicologos[1].avatar : AvatarImage2} alt="" />
                </Avatar>
                <TextContainer>
                  <Title>{psicologos[1].name}</Title>
                  <SubTitle>{psicologos[1].psicologo.especialidades[0]?.especialidad}</SubTitle>
                </TextContainer>
              </Info>
              <Container>
                {
                  psicologos[1].state ? <Badge content="activo" activo />
                  : <Badge content="inhabilitado" inhabilitado />
                }
              </Container>
            </Invoice>
          </> : <Invoice>
            <Loading />  
          </Invoice>
        }
          <AllProjects href="/psicologos">Ver todos los psicologos</AllProjects>
      </CardContent>
    </InvoicesContainer>
  );
}

const InvoicesContainer = styled.div`
  width: 36rem;
  border-radius: 1rem;
  margin-top: 1rem;
  background-color: white;
  height: 160%;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 960px) {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const CardContent = styled.div`
  @media screen and (min-width: 320px) and (max-width: 960px) {
    margin: 2rem 0;
  }
`;
const Invoice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.4rem;
  padding-top: 0.6rem;
  margin-right: 1rem;
  @media screen and (min-width: 320px) and (max-width: 960px) {
    flex-direction: column;
    gap: 1rem;
  }
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  @media screen and (min-width: 320px) and (max-width: 960px) {
    flex-direction: column;
    width: 100%;
    margin-top: 1rem;
    text-align: center;
  }
`;
const Avatar = styled.div`
  img {
    height: 3.5rem;
    width: 3.5rem;
    border-radius: 3.5rem;
  }
`;
const TextContainer = styled.div`
  margin-left: 1rem;
`;
const Title = styled.h4``;
const SubTitle = styled.h5`
  font-weight: 400;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
  align-items: center;
  @media screen and (min-width: 320px) and (max-width: 960px) {
    width: 100%;
    flex-direction: column;
    gap: 0.6rem;
  }
  
`;

const AllProjects = styled.a`
  margin-left: 15rem;
  text-align: center;
  color: ${themeColor};
  cursor: pointer;
`;
const Price = styled.div``;

export default Invoices;