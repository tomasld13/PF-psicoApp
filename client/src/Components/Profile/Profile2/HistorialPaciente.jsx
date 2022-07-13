import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { pacienteFacturas } from "../../../slice/psico/thunks"
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

export default function HistorialPaciente() {
  const { id } = useSelector(state => state.auth.authBack)
  const facturas = useSelector(state => state.psicology.facturas)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(pacienteFacturas(id))
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
          <Td><Link to={`/psico/${factura.psicologoId}`} >{factura.psicologo.usuario.name}</Link></Td>
          <Td><Link to={`/psico/${factura.psicologoId}`} >{factura.psicologo.usuario.lastname}</Link></Td>
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