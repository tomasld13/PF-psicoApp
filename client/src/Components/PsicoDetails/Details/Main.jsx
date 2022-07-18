import { Container } from '@chakra-ui/layout'
import styled from 'styled-components'
import Content from './Content.jsx'
import Sidebar from './Sidebar/Sidebar.jsx'

export default function Main() {
  return (
    <SuperCont> 
    <Container display={{ base: 'block', md: 'flex' }} maxW="container.xl" >
      <Sidebar/>
      <Content/>
    </Container>
    </SuperCont>
    
  )
}

const SuperCont = styled.div`
  background-color: #212329;
`