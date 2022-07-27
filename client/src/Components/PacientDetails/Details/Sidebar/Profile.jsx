import { useState, useRef } from 'react'
import {
  Avatar,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react'
import { useSelector } from 'react-redux'

function Profile() {
  const [userProfile, setUserProfile] = useState(null)
  const { pacientId  } = useSelector(state => state.psicology)

  return (
  <>
    { (pacientId.hasOwnProperty("id"))?
    <VStack spacing={3} py={5} borderBottomWidth={1} borderColor="brand.light">
      <Avatar
        size="2xl"
        name="nombre"
        cursor="pointer"
      >
      </Avatar>
      <VStack spacing={1}>
        <Heading as="h3" fontSize="xl" color="brand.dark">
          {`${pacientId.usuario.name.split(" ")[0]} ${pacientId.usuario.lastname.split(" ")[0]}`}
        </Heading>
        <Text color="brand.gray" fontSize="sm">
          {pacientId.usuario.rol.name}
        </Text>
      </VStack>
    </VStack>
    : null
    }
  </>
  )
}

export default Profile