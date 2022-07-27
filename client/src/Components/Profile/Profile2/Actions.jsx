import { Box, Button } from '@chakra-ui/react'
import Swal from "sweetalert2";

function Actions() {

  return (
    <Box mt={5} py={5} px={8} borderTopWidth={1} borderColor="brand.light">
      <Button onClick={() => {
        Swal.fire(
          "!Los cambios fueron guardados exitosamente!",
          "" ,
          "success"
        )
      }}
      >Actualizar</Button>
    </Box>
  )
}

export default Actions