import styled from 'styled-components'
import Sidebar from './Componentes/Sidebar';
import MainContent from './Componentes/MainContent'



function AdminApp() {
    return <Container>
    <Sidebar />
    <MainContent />
    </Container>
}

const Container = styled.div`
    display: flex;
    height: 100%;
    background: linear-gradient(to bottom right, white 0, #e6e4ff 100%);
`


export default AdminApp;