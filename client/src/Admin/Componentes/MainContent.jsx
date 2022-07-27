import React from 'react'
import styled from 'styled-components';
import Navbar from './NavBar';
import Earnings from './Earnings';
import Info from './Info';
import Pacientes from './Pacientes';
import ProjectRecommendation from './ProyectRecomemendation';
import JoinSlack from './JoinSlack'
import Invoces from './Invoces'

function MainContent() {
  return (
    <Container>
    <Navbar />
    <SubContainer>
      <SectionOne>
        <ColumnOne1>
          <Earnings />
          <Info />
        </ColumnOne1>
        <ColumnTwo1>
          <TitleText>Pacientes</TitleText>
          <Pacientes />
        </ColumnTwo1>
      </SectionOne>
      <SectionTwo>
        <ColumnOne2>
          <InvoiceContainer>
            <TitleText>Psicologos</TitleText>
            <Invoces />
          </InvoiceContainer>
          <JoinSlack />
        </ColumnOne2>
        <ColumnTwo2>
          <TitleText>Psicologo del mes</TitleText>
          <ProjectRecommendation />
        </ColumnTwo2>
      </SectionTwo>
    </SubContainer>
  </Container>
);
}

const Container = styled.div`
  width: 100%;
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 100%);
  border-bottom-right-radius: 1rem;
  border-top-right-radius: 1rem;
  margin: 0rem -0rem 1rem 2rem;
  margin-bottom: 3rem;
  @media screen and (min-width: 320px) and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem 0 0 0;
    height: max-content !important;
  }
`;

const SubContainer = styled.div`
  margin: 0.5rem 0;
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  @media screen and (min-width: 320px) and (max-width: 960px) {
    height: 100%;
  }
`;
const SectionOne = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40%;
  gap: 2rem;
  width: 100%;
  @media screen and (min-width: 320px) and (max-width: 960px) {
    flex-direction: column;
    align-items: center;
    height: max-content;
  }
`;
const ColumnOne1 = styled.div`
  display: flex;
  gap: 3rem;
  @media screen and (min-width: 320px) and (max-width: 960px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
  }
`;

const ColumnTwo1 = styled.div`
  display: flex;
  flex-direction: column;
  height: 115%;
  width: 100%;
  @media screen and (min-width: 320px) and (max-width: 960px) {
    height: 100%;
    justify-content: center;
    align-items: center;
  }
`;

const TitleText = styled.h3`
  height: 30%;
  color: black;
  font-size: 1.8rem;
  font-family: 'Tenor-sans';
  /* padding-top */
`;

const SectionTwo = styled.div`
  display: flex;
  gap: 2rem;
  height: 26vh;
  @media screen and (min-width: 320px) and (max-width: 960px) {
    flex-direction: column;
    height: max-content;
    width: 100%;
  }
`;
const ColumnOne2 = styled.div`
  @media screen and (min-width: 320px) and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
`;
const InvoiceContainer = styled.div`
  height: 60%;
  @media screen and (min-width: 320px) and (max-width: 960px) {
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
`;

const ColumnTwo2 = styled.div`
  @media screen and (min-width: 320px) and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export default MainContent;