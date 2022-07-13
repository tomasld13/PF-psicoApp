import React from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getSaldoTotal, postSaldoTotal } from "../../../../slice/psico/thunks"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { useDisclosure, Button } from "@chakra-ui/react"

export default function Suscripcion() {
  const { id, email} = useSelector(state => state.auth.authBack)
  const saldo = useSelector(state => state.psicology.saldoTotal)
  const linkPago = useSelector(state=>state.psicology.initPoint.id)
  console.log(linkPago, "linkPago")
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSaldoTotal(id))
  },[dispatch])
  let obj = {
    cuota: "Subscripcion",
    precio: saldo.saldo,
    psicoId: id,
    email: email,
    fecha: new Date(),
  }
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
        <div>
          <h1>Saldo a pagar: {saldo.saldo}</h1>
      <Button onClick={() =>{
        onOpen();
        dispatch(postSaldoTotal(obj))
        }}>Pagar</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirmar transaccion</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Vas a realizar un pago por {saldo.saldo}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='red' mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme='blue'><a href={`${linkPago}`}>Confirmar</a></Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        </div>
    </>
  )

}