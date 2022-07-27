import { Box, Text, Textarea } from '@chakra-ui/react'
import { useEffect } from 'react'
import Profile from './Profile'
import { useDispatch, useSelector } from 'react-redux'
import { getSobreMiPsicologo } from "../../../../slice/psico/thunks"
import { useParams } from 'react-router-dom'


function Sidebar() {
  const params = useParams();
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSobreMiPsicologo(params.id))
  },[])
  const sobreMi  = useSelector(state => state.psicology.sobreMi.sobreMi)
  const detalles = useSelector(state => state.psicology.pychoId)
  return (
    <Box
      as="aside"
      flex={1}
      mr={{ base: 0, md: 5 }}
      mb={{ base: 5, md: 0 }}
      bg="white"
      rounded="md"
      borderWidth={1}
      borderColor="brand.light"
      style={{ transform: 'translateY(-100px)' }}
    >
      <Profile />
      <h1 className="mt-4 text-lg font-bold">Especialidad:</h1>
      <p className="pt-2" >{detalles?.especialidades[0]?.especialidad}</p>
      <h1 className="mt-4 text-lg font-bold">Años de experiencia:</h1>
      <p className="pt-2" >{detalles?.yearsExperience}</p>
      <div className="max-w-xs px-6 pb-6">
        <Text>
          <h1 className="mt-4 text-lg font-bold">Sobre Mi:</h1>
          <p className="pt-3">
            {sobreMi}</p>
        </Text>
      </div>
      
    </Box>
  )
}

export default Sidebar