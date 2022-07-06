import styled from 'styled-components'
import Sidebar from './Componentes/Sidebar';
import MainContent from './Componentes/MainContent'
import UserList from './Componentes/Users/UserList';


function AdminApp() {
    return <Container>
    <Sidebar />
    <MainContent />
    {/* <UserList /> */}
    </Container>
}

const Container = styled.div`
    display: flex;
    height: 100vh;
    background: linear-gradient(to bottom right, white 0, #e6e4ff 100%);
`


export default AdminApp;