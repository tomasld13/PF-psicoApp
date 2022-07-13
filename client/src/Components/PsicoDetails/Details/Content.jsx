import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, Button } from '@chakra-ui/react'
import { useParams, useNavigate } from 'react-router-dom'
import Informacion from './Informacion.jsx'
// import Actions from './Actions'
// import Favorites from './Favorites'
// import Notificationes from './Notificationes'
import Checkout from '../../PruebaMercadoPago/Checkout'
const Content = () => {
  const tabs = ['Información','Agendar cita',/* 'Notificaciones'*/]
  const {id} = useParams();
  let navigate = useNavigate();
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
        <TabList px={5}>
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

        <TabPanels px={3} mt={5}>
          <TabPanel>
            <Informacion />
          </TabPanel>
          <TabPanel>
            <Checkout id={id} />
          </TabPanel>
          <TabPanel>
            {/* <Notificationes /> */}
          </TabPanel>
        </TabPanels>
      </Tabs>

      {/* <Actions /> */}
            <Button onClick={()=>navigate(-1)}>Volver</Button>
    </Box>
  )
}

export default Content