import { Container } from '@chakra-ui/layout'
import Content from './Content.jsx'
import Sidebar from './Sidebar/Sidebar.jsx'

export default function Main() {
  return (
    <Container display={{ base: 'block', md: 'flex' }} maxW="container.xl" >
      <Sidebar/>
      <Content/>
    </Container>
  )
}