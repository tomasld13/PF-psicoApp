import React from 'react'
import styled from 'styled-components'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
import { hoverEffect } from '../../Utils/index'

function Reports() {
  return (
    <Container>
        <FeaturedItem>
            <FeaturedTitle>Ganancias</FeaturedTitle>
            <Money>
                <FeaturedMoney>$3.000</FeaturedMoney>
                <FeaturedMoneyRate>
                    +11.4 <AiOutlineArrowUp color='green'/>
                </FeaturedMoneyRate>
            </Money>
            <ComparedTo>Comparado con el mes anterior</ComparedTo>
        </FeaturedItem>
        <FeaturedItem>
            <FeaturedTitle>Egresos</FeaturedTitle>
            <Money>
                <FeaturedMoney>$1.000</FeaturedMoney>
                <FeaturedMoneyRate>
                    +4.2 <AiOutlineArrowDown color='red'/>
                </FeaturedMoneyRate>
            </Money>
            <ComparedTo>Comparado con el mes anterior</ComparedTo>
        </FeaturedItem>
        <FeaturedItem>
            <FeaturedTitle>Precio sesión promedio</FeaturedTitle>
            <Money>
                <FeaturedMoney>$3.000</FeaturedMoney>
                <FeaturedMoneyRate>
                    +5.2 <AiOutlineArrowUp color='green'/>
                </FeaturedMoneyRate>
            </Money>
            <ComparedTo>Comparado con el mes anterior</ComparedTo>
        </FeaturedItem>
    </Container>
  )
}

export default Reports

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    @media screen and (min-width: 320px) and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const FeaturedItem = styled.div`
    flex: 1;
    margin: 0 20px;
    padding: 30px;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
    box-shadow: ${hoverEffect};
    }
    @media screen and (min-width: 320px) and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const FeaturedTitle = styled.span`
    font-size: 20px;

`;

const FeaturedMoney = styled.span`
    margin: 20px 0 0 12rem;
    display: flex;
    align-content: center;
    font-size: 30px;
    font-weight: 600;

`;

const FeaturedMoneyRate = styled.span`
    display: flex;
    align-items: center;
    margin-left: 19rem;
    margin-top: -1.9rem;
`;

const Money = styled.div` 

`;

const ComparedTo = styled.span`
    color: gray;
`;