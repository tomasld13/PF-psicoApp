import React from "react"
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
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td isNumeric>25.4</Td>
      </Tr>
      <Tr>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
        <Td isNumeric>30.48</Td>
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
        </div>
    </>
  )

}