import { useRef, useState } from 'react'
import {
  Badge,
  Box,
  Button,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import SectionTitle from '../SectionTitle/SectionTitle'

export default function Cover() {
  const [coverImage, setCoverImage] = useState(null)
  const inputRef = useRef(null)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const openChooseFile = () => {
    inputRef.current.click()
  }

  const handleChangeCover = event => {
    const ALLOWED_TYPES = ['image/png', 'image/jpeg', 'image/jpg']
    const selected = event.target.files[0]

    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      let reader = new FileReader()
      reader.onloadend = () => setCoverImage(reader.result)
      return reader.readAsDataURL(selected)
    }

    onOpen()
  }

  return (
    <Box h={60} overflow="hidden">
      <Image
        w="full"
        h="full"
        objectFit="cover"
        src={coverImage ? coverImage : '/img/cover.jpg'}
        alt="Cover"
      />
      <Button
        onClick={openChooseFile}
        position="absolute"
        top={4}
        right={4}
        variant="ghost"
      >
        <svg width="1.2em" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
          />
        </svg>
        <Text ml={2}>Cambiar portada</Text>
        <input ref={inputRef} type="file" onChange={handleChangeCover}  />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Algo salio mal...</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Archivo no soportado!</Text>
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
    </Box>
  )
}