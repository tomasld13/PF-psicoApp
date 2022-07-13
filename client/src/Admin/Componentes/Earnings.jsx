import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import { themeColor, hoverEffect } from "../Utils/index";
import { IoStatsChart } from "react-icons/io5";
import { saldoTotalFacturas } from '../../slice/psico/thunks.js';

function Earnings() {

  const saldoTotal = useSelector(state => state.psicology.saldoTotalFacturas)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(saldoTotalFacturas());
  }, [])
  
    return (
      <EarningsCard>
        <CardContent>
          <Chart>
            <IoStatsChart />
          </Chart>
          <EarningsText>Ingresos</EarningsText>
          <Earning>{saldoTotal ? saldoTotal : '$0'}</Earning>
          {/* <EarningsIncrease>+ 10% del último mes</EarningsIncrease> */}
        </CardContent>
      </EarningsCard>
    );
  }
  
  const EarningsCard = styled.div`
    height: 100%;
    width: 14rem;
    background-color: ${themeColor};
    padding: 1rem;
    border-radius: 1rem;
    color: white;
    transition: 0.4s ease-in-out;
    &:hover {
      box-shadow: ${hoverEffect};
    }
    @media screen and (min-width: 320px) and (max-width: 960px) {
      width: 80%;
    }
  `;
  
  const CardContent = styled.div`
    margin: 1rem;
  `;
  
  const Chart = styled.div`
    display: flex;
    justify-content: center;
    svg {
      height: 4rem;
      width: 4rem;
    }
  `;
  
  const EarningsText = styled.h3`
    text-align: center;
    font-weight: normal;
    padding: 0.4rem 0;
  `;
  
  const Earning = styled.h2`
    text-align: center;
  `;
  
  const EarningsIncrease = styled.h5`
    text-align: center;
    font-weight: normal;
    background-color: rgba(0, 0, 0, 0.2);
    padding: 0.5rem;
    border-radius: 2rem;
  `;
  
  export default Earnings;