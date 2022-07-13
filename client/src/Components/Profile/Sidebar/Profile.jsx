import { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux' 
import imagetemplate from '../../Profile/team-male.jpg'
import {
  Avatar,
  AvatarBadge,
  Badge,
  Button,
  Heading,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import { getPsicology, uploadImage } from '../../../slice/psico/thunks';

function Profile() {

  const userGoogle = useSelector(state => state.auth.authGoogle);
  const userBack = useSelector(state => state.auth.authBack);
  const [userProfile, setUserProfile] = useState(null)

  const { isOpen, onOpen, onClose } = useDisclosure()
  const profileImage = useRef(null)

  const dispatch = useDispatch();

  const idUser = userGoogle.id ? userGoogle.id : userBack.id;
  const userImg = userGoogle.avatar ? userGoogle.avatar : userGoogle.photoURL ? userGoogle.photoURL : userBack.avatar;

  const openChooseImage = () => {
    profileImage.current.click()
  }
  

  const changeProfileImage = event => {
    const selected = event.target.files[0];
    dispatch(uploadImage(idUser, selected));

    if (selected) {
      let reader = new FileReader()
      reader.onloadend = () => setUserProfile(reader.result)
      return reader.readAsDataURL(selected)
    }

  }


  return (
    <VStack spacing={3} py={5} borderBottomWidth={1} borderColor="brand.light">
      <Avatar
        size="2xl"
        name="nombre"
        cursor="pointer"
        onClick={openChooseImage}
        src={userProfile ? userProfile : userImg}
      >
        <AvatarBadge bg="brand.blue" boxSize="1em">
          <svg width="0.4em" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
            />
          </svg>
        </AvatarBadge>
      </Avatar>
      <input
        hidden
        type="file"
        ref={profileImage}
        onChange={changeProfileImage}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Algo salio mal...</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Arhivo no soportado!</Text>
            <HStack mt={1}>
              <Text color="brand.cadet" fontSize="sm">
                Archivos soportados:
              </Text>
              <Badge colorScheme="green">PNG</Badge>
              <Badge colorScheme="green">JPG</Badge>
              <Badge colorScheme="green">JPEG</Badge>
            </HStack>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Cerrar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <VStack spacing={1}>
        <Heading as="h3" fontSize="xl" color="brand.dark">
          {userGoogle.name ? userGoogle.name : userBack.name}
        </Heading>
        <Text color="brand.gray" fontSize="sm">
          {(userGoogle.rolId===1 || userBack.rolId === 1)?"Paciente":"Psicologo"}

        </Text>
      </VStack>
    </VStack>
  )
}

export default Profile