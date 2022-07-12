import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { psicologoFacturas } from "../../../../slice/psico/thunks"
import { Link } from "react-router-dom"
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'

export default function Historial() {
  const { id } = useSelector(state => state.auth.authBack)
  const facturas = useSelector(state => state.psicology.psicoFacturas)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(psicologoFacturas(id))
  },[dispatch])

  return (
    <>
        <div>
        <TableContainer>
  <Table size='sm'>
    <Thead>
      <Tr>
        <Th>Nombre</Th>
        <Th>Apellido</Th>
        <Th isNumeric>Precio</Th>
        <Th>Servicio</Th>
        <Th>Fecha</Th>
      </Tr>
    </Thead>
    <Tbody>
      {facturas?.map(factura => (
        <Tr>
          <Td><Link to={`/paciente/${factura.pacienteId}`} >{factura.paciente.usuario.name}</Link></Td>
          <Td><Link to={`/paciente/${factura.pacienteId}`} >{factura.paciente.usuario.lastname}</Link></Td>
          <Td>{factura.precio}</Td>
          <Td>{factura.servicio}</Td>
          <Td>{factura.fecha}</Td>
        </Tr>
      ))}
    </Tbody>
  </Table>
</TableContainer>
        </div>
    </>
  )

}