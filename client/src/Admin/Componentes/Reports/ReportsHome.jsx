import React from 'react'
import Sidebar from '../Sidebar'
import Chart from './Chart'
import { ChartData } from './ChartData'
import Reports from './Reports'
import styled from 'styled-components'
import { BsArrow90DegLeft } from 'react-icons/bs'

function ReportsHome() {
  return (
    <Container> 
    <Button><a href='/dashboard'><BsArrow90DegLeft size={50} /></a></Button>
    <Reports />
    <Chart data={ChartData} title='Usuarios activos' grid dataKey='Usuarios Activos' />
    </Container>
  )
}

const Container = styled.div`
  margin-top: 5rem;
`;

const Button = styled.button`
  color: white;
  font-size: 20rem;
  border-radius: 1rem;
  display: flex;
  align-items: flex-start;
  margin-left: 3rem;
  margin-top: -2rem !important;
  cursor: pointer;
`;


export default ReportsHome