import React from 'react'
import styled from 'styled-components'
import { hoverEffect } from '../../Utils/index'

function Chart() {
  return (
    <ChartContainer>
        <ChartTitle>Grafica de ingresos</ChartTitle>
    </ChartContainer>
  )
}

export default Chart;

const ChartContainer = styled.div`
    margin: 20px;
    padding: 20px;
    &:hover {
    box-shadow: ${hoverEffect};
    }
`;

const ChartTitle = styled.h3`
    margin-bottom: 20px;
`;