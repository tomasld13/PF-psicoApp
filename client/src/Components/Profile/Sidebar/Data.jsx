import { Box, Text, VStack, Textarea } from '@chakra-ui/react'
import { useEffect } from 'react';
import { useState } from 'react';
import {  useSelector, useDispatch } from 'react-redux';
import { postSobreMiPsicologo } from "../../../slice/psico/thunks"

function Data() {
  const dispatch = useDispatch();
  const facturas = useSelector(state => state.psicology.facturas);
  const authBack = useSelector(state => state.auth.authBack);
  const authGoogle = useSelector(state => state.auth.authGoogle);

  const idRol = authBack.rolId ? authBack.rolId : authGoogle.rolId;
  const idUser = authBack.id ? authBack.id : authGoogle.id;
  const [sobreMi, setSobreMi] = useState(authBack.sobreMi ? authBack.sobreMi : "");
  const handleOnChange = (e) => {
    setSobreMi(e.target.value);
  }
  if(idRol === 1){
    return (
      <VStack as="ul" spacing={0} listStyleType="none">
        <Box
          as="li"
          w="full"
          py={3}
          px={5}
          d="flex"
          alignItems="center"
          justifyContent="space-between"
          borderBottomWidth={1}
          borderColor="brand.light"
        >
        <Text color="brand.dark">Citas agendadas</Text>
        {facturas ? (
            <Text color={`brand.green`} fontWeight="bold">
              {facturas.length} 
            </Text>
        ) : <Text color={`brand.yellow`} fontWeight="bold">
              No hay citas
            </Text> }
            < hr/>
            <Text color="brand.dark">Ultima Cita</Text>
        {facturas ? (
            <Text color={`brand.green`} fontWeight="bold">
              {facturas[facturas?.length - 1]?.fecha} 
              &nbsp;&nbsp;
              {facturas[facturas?.length - 1]?.servicio}
            </Text>
        ) : null }
        </Box>
      </VStack>
    )
  }else{
    return (
      <VStack as="ul" spacing={0} listStyleType="none">
        <Box
          as="li"
          w="full"
          py={3}
          px={5}
          d="flex"
          alignItems="center"
          justifyContent="space-between"
          borderBottomWidth={1}
          borderColor="brand.light"
        >
        <Text color="brand.dark">Sobre mi</Text>
        <Textarea placeholder="Escribe algo sobre ti" value={sobreMi} onChange={handleOnChange} ></Textarea>
        <button className='bg-primary text-white border border-primary font-bold py-2 px-4 rounded hover:bg-white hover:text-primary my-2.5 mx-2.5 h-10' onClick={() => {
          dispatch(postSobreMiPsicologo(idUser, {sobreMi}))
        }}>Actualizar</button>
        </Box>
      </VStack>
    )
  }
}

export default Data