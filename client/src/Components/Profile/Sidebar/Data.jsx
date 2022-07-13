import { Box, Text, VStack } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPacientID } from '../../../slice/psico/thunks.js';

const list = [
  {
    id: 1,
    name: 'Citas agendadas',
    value: 0,
    color: 'yellow',
  },
  {
    id: 2,
    name: 'Sesiones realizadas',
    value: 0,
    color: 'green',
  },
  {
    id: 3,
    name: 'Plan: citas individuales',
    value: '',
    color: 'cadet',
  },
]

function Data() {

  const paciente = useSelector(state => state.psicology.pacientId);
  const authBack = useSelector(state => state.auth.authBack);
  const authGoogle = useSelector(state => state.auth.authGoogle);

  const dispatch = useDispatch();

  const idUser = authBack.id ? authBack.id : authGoogle.id;


  useEffect(() => {
    dispatch(getPacientID(idUser));
  }, [])
  
  console.log(paciente);
  return (
    <VStack as="ul" spacing={0} listStyleType="none">
      {list.map(item => (
        <Box
          key={item.id}
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
          <Text color="brand.dark">{item.name}</Text>
          <Text color={`brand.${item.color}`} fontWeight="bold">
            {item.value}
          </Text>
        </Box>
      ))}
    </VStack>
  )
}

export default Data