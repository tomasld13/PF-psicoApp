import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import {useSelector} from 'react-redux'
import AccountSettings from './AccountSettings'
// import Actions from './Actions'
import Favorites from './Favorites'
import Notificationes from './Notificationes'
import Suscripcion from './ParaPsicologo/Suscripcion.jsx'
import Calendario from './ParaPsicologo/Calendario.jsx'
import Historial from './ParaPsicologo/Historial.jsx'
import HistorialPaciente from './HistorialPaciente'
import Servicio from './ParaPsicologo/Servicio.jsx'

const Content = () => {
  const { rolId }  = useSelector(state => state.auth.authBack);
  const userGoogle  = useSelector(state => state.auth.authGoogle);

  const tabs = (rolId===1 || userGoogle.rolId === 1)?
    ['Ajustes', 'Favoritos', 'Historial']
    :['Ajustes', 'Suscripción','Calendario', 'Historial', 'Servicio'];

  return (
    <Box
      as="main"
      flex={3}
      d="flex"
      flexDir="column"
      justifyContent="space-between"
      pt={5}
      bg="white"
      rounded="md"
      borderWidth={1}
      borderColor="gray.200"
      style={{ transform: 'translateY(-100px)' }}
    >
      <Tabs>
        <TabList px={5}  className='flex flex-wrap'>
          {tabs.map(tab => (
            <Tab 
              key={tab}
              mx={3}
              px={0}
              py={3}
              fontWeight="semibold"
              color="brand.cadet"
              borderBottomWidth={1}
              _active={{ bg: 'transparent' }}
              _selected={{ color: 'brand.dark', borderColor: 'brand.blue' }}
            >
              {tab}
            </Tab>
          ))}
        </TabList>

          {//Para el Perfil del paciente
            (rolId===1 || userGoogle.rolId === 1)?
            <TabPanels px={3} mt={5}>
              <TabPanel>
                <AccountSettings />
              </TabPanel>
              <TabPanel>
                <Favorites />
              </TabPanel>
              {/* <TabPanel>
                <Notificationes />
              </TabPanel> */}
              <TabPanel>
                <HistorialPaciente/> 
              </TabPanel> 
            </TabPanels>
            
            ://Para el perfil del Psicologo
              <TabPanels px={3} mt={5}>
              <TabPanel>
                <AccountSettings />
              </TabPanel>
              <TabPanel>
                <Suscripcion/> 
              </TabPanel>
              <TabPanel>
                <Calendario/> 
              </TabPanel>
              <TabPanel>
                <Historial/> 
              </TabPanel>
              <TabPanel>
                <Servicio/> 
              </TabPanel>
            </TabPanels>
          }

      </Tabs>

      {/* <Actions /> */}
    </Box>
  )
}

export default Content