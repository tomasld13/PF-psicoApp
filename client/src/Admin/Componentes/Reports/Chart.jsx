import React from 'react'
import styled from 'styled-components'
import { hoverEffect } from '../../Utils/index'

import {
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";


function Chart({title, data, dataKey, grid}) {
  return (
    <ChartContainer>
        <ChartTitle>{title}</ChartTitle>
        <ResponsiveContainer width='100%' aspect={4 / 1}>
            <LineChart data={data}>
                <XAxis dataKey='name' stroke='#5550bd' />
                <Line type='monotone' dataKey={dataKey} stroke='#5550bd'/>
                <Tooltip />
                {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray="5 5"  />}
            </LineChart>
        </ResponsiveContainer>
    </ChartContainer>
  )
}

export default Chart;

const ChartContainer = styled.div`  
    padding: 20px;
    &:hover {
    box-shadow: ${hoverEffect};
    }
    @media screen and (min-width: 320px) and (max-width: 960px) {
    width: 100%;
    margin-left: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const ChartTitle = styled.h3`
    margin-bottom: 20px;
`;