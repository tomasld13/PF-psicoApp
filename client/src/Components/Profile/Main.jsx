import { Container } from '@chakra-ui/layout'
import styled from 'styled-components'
import Content from './Profile2/Content'
import Sidebar from './Sidebar/Sidebar'

export default function Main() {
  return (
    <Background> 
    <Container display={{ base: 'block', md: 'flex' }} maxW="container.xl" >
      <Sidebar />
      <Content />
    </Container>
  </Background>
  )
}


const Background = styled.div`
  background-color: #f0efff;
`