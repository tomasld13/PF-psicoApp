import { useState, useRef } from 'react'
//import imagetemplate from '../../Profile/team-male.jpg'
import {
  Avatar,
  // AvatarBadge,
  // Badge,
  // Button,
  Heading,
  // HStack,
  // Modal,
  // ModalBody,
  // ModalCloseButton,
  // ModalContent,
  // ModalFooter,
  // ModalHeader,
  // ModalOverlay,
  Text,
  // useDisclosure,
  VStack,
} from '@chakra-ui/react'
import { useSelector } from 'react-redux'

function Profile() {
  const [userProfile, setUserProfile] = useState(null)
  const { pychoId } = useSelector(state => state.psicology)

  return (
  <>
    { (pychoId.hasOwnProperty("id"))?
    <VStack spacing={3} py={5} borderBottomWidth={1} borderColor="brand.light">
      <Avatar
        size="2xl"
        name="nombre"
        cursor="pointer"
        src={pychoId.usuario.avatar ? pychoId.usuario.avatar : null}>
      </Avatar>
      <VStack spacing={1}>
        <Heading as="h3" fontSize="xl" color="brand.dark">
          {`${pychoId.usuario.name.split(" ")[0]} ${pychoId.usuario.lastname.split(" ")[0]}`}
        </Heading>
        <Text color="brand.gray" fontSize="sm">
          {pychoId.usuario.rol.name}
        </Text>
      </VStack>
    </VStack>
    : null
    }
  </>
  )
}

export default Profile