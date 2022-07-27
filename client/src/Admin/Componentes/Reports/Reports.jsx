import React from 'react'
import styled from 'styled-components'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
import { hoverEffect } from '../../Utils/index'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllFacturas } from '../../../slice/auth/thunks'

function Reports() {
    const ganancias = useSelector(state => state.auth.facturas)
    const facturas = useSelector(state => state.auth.allFacturas)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllFacturas())
    },[])
    let total = ganancias["2022-01"] 
              + ganancias["2022-02"]
              + ganancias["2022-03"]
              + ganancias["2022-04"]
              + ganancias["2022-05"]
              + ganancias["2022-06"]
              + ganancias["2022-07"]
              + ganancias["2022-08"]
              + ganancias["2022-09"]
              + ganancias["2022-10"]
              + ganancias["2022-11"]
              + ganancias["2022-12"]
    console.log(total)
    //ganancias.flat((f) => f.ganancias += total)
  return (
    <Container>
        <FeaturedItem>
            <FeaturedTitle>Sesiones Totales</FeaturedTitle>
            <Money>
                <FeaturedMoney>{ facturas && facturas[2]}</FeaturedMoney>
                <FeaturedMoneyRate>
                    +100 <AiOutlineArrowUp color='green'/>
                </FeaturedMoneyRate>
            </Money>
            <ComparedTo>Comparado con el año anterior</ComparedTo>
        </FeaturedItem>
        <FeaturedItem>
            <FeaturedTitle>Ganancias Totales</FeaturedTitle>
            <Money>
                <FeaturedMoney>{total}</FeaturedMoney>
                <FeaturedMoneyRate>
                    +100 <AiOutlineArrowUp color='green'/>
                </FeaturedMoneyRate>
            </Money>
            <ComparedTo>Comparado con el año anterior</ComparedTo>
        </FeaturedItem>
        {/*<FeaturedItem>
            <FeaturedTitle>Precio sesión promedio</FeaturedTitle>
            <Money>
                <FeaturedMoney>$3.000</FeaturedMoney>
                <FeaturedMoneyRate>
                    +5.2 <AiOutlineArrowUp color='green'/>
                </FeaturedMoneyRate>
            </Money>
            <ComparedTo>Comparado con el mes anterior</ComparedTo>
        </FeaturedItem>*/}
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