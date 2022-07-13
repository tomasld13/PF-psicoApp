import React from 'react'
import Sidebar from '../Sidebar'
import Chart from './Chart'
import { ChartData } from './ChartData'
import Reports from './Reports'
import styled from 'styled-components'
import { BsArrow90DegLeft } from 'react-icons/bs'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getFacturasByMes } from '../../../slice/auth/thunks'
function ReportsHome() {

  const getMonth = (month) => {
    switch(month){
    case "Jan":
        return 1
    case "Feb":
        return 2
    case "Mar":
        return 3
    case "Apr":
        return 4
    case "May":
        return 5
    case "Jun":
        return 6
    case "Jul":
        return 7
    case "Aug":
        return 8
    case "Sep":
        return 9
    case "Oct":
        return 10
    case "Nov":
        return 11
    default:
        return 12                       
    }
}
    let fecha = new Date("2022-01-02").toString().split(" ")
    let date = fecha[3] + "-" + (getMonth(fecha[1]) <= 10 ? ("0" + getMonth(fecha[1])) : getMonth([fecha[1]]));
    const meses = useSelector(state => state.auth.facturas)
    console.log(meses)
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getFacturasByMes(date.slice(0,4) + "-01"))
      dispatch(getFacturasByMes(date.slice(0,4) + "-02"))
      dispatch(getFacturasByMes(date.slice(0,4) + "-03"))
      dispatch(getFacturasByMes(date.slice(0,4) + "-04"))
      dispatch(getFacturasByMes(date.slice(0,4) + "-05"))
      dispatch(getFacturasByMes(date.slice(0,4) + "-06"))
      dispatch(getFacturasByMes(date.slice(0,4) + "-07"))
      dispatch(getFacturasByMes(date.slice(0,4) + "-08"))
      dispatch(getFacturasByMes(date.slice(0,4) + "-09"))
      dispatch(getFacturasByMes(date.slice(0,4) + "-10"))
      dispatch(getFacturasByMes(date.slice(0,4) + "-11"))
      dispatch(getFacturasByMes(date.slice(0,4) + "-12"))
    },[])
    
    let ChartPrueba = [ 
      {
          name: "En",
          "Ganancias": meses[date.slice(0,4) + "-01"],
        },
        {
          name: "Feb",
          "Ganancias": meses[date.slice(0,4) + "-02"],
        },
        {
          name: "Mar",
          "Ganancias": meses[date.slice(0,4) + "-03"],
        },
        {
          name: "Abr",
          "Ganancias": meses[date.slice(0,4) + "-04"],
        },
        {
          name: "Mayo",
          "Ganancias": meses[date.slice(0,4) + "-05"],
        },
        {
          name: "Jun",
          "Ganancias": meses[date.slice(0,4) + "-06"],
        },
        {
          name: "Jul",
          "Ganancias": meses[date.slice(0,4) + "-07"],
        },
        {
          name: "Ago",
          "Ganancias": meses[date.slice(0,4) + "-08"],
        },
        {
          name: "Sep",
          "Ganancias": meses[date.slice(0,4) + "-09"],
        },
        {
          name: "Oct",
          "Ganancias": meses[date.slice(0,4) + "-10"],
        },
        {
          name: "Nov",
          "Ganancias": meses[date.slice(0,4) + "-11"],
        },
        {
          name: "Dic",
          "Ganancias": meses[date.slice(0,4) + "-12"],
        },
      ];
    console.log(ChartPrueba)
    

  return (
    <Container> 
    <Button><a href='/dashboard'><BsArrow90DegLeft size={50} /></a></Button>
    <Reports />
    <Chart data={ChartPrueba} title='Ganancias por Mes' grid dataKey='Ganancias' />
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