import { Box, Text, VStack } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPacientID } from '../../../slice/psico/thunks.js';

function Data() {

  const paciente = useSelector(state => state.psicology.pacientId);
  const authBack = useSelector(state => state.auth.authBack);
  const authGoogle = useSelector(state => state.auth.authGoogle);

  const dispatch = useDispatch();

  const idUser = authBack.id ? authBack.id : authGoogle.id;


  useEffect(() => {
    dispatch(getPacientID(idUser));
  }, [])
  
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
      {paciente.factura?.length > 0 ? paciente.factura.map(paciente => (
          <Text color={`brand.green`} fontWeight="bold">
            {paciente.value}
          </Text>
      )) : <Text color={`brand.yellow`} fontWeight="bold">
            No hay citas
          </Text> }
      </Box>
    </VStack>
  )
}

export default Data