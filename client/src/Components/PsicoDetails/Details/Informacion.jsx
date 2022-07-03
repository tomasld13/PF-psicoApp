import { FormControl, FormLabel, Grid, Input, Select } from '@chakra-ui/react'
import { useSelector } from 'react-redux'

function Informacion() {
    const { pychoId  } = useSelector(state => state.psicology)
  return (
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      gap={6}
    >
      <FormControl id="firstName">
        <FormLabel>Nombre</FormLabel>
        <Input focusBorderColor="brand.blue" type="text" value={`${pychoId.usuario.name}`} placeholder="Nombre" readOnly />
      </FormControl>
      <FormControl id="lastName">
        <FormLabel>Apellido</FormLabel>
        <Input focusBorderColor="brand.blue" type="text" value={`${pychoId.usuario.lastname}`} placeholder="Apellido" readOnly />
      </FormControl>
      <FormControl id="phoneNumber">
        <FormLabel>Numero de telefono</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="tel"
          placeholder="+54 9 11 15468965"
          readOnly
          value={`${pychoId.usuario.telephone}`} 
          />
      </FormControl>
      <FormControl id="emailAddress">
        <FormLabel>Email</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="email"
          placeholder="nombre@gmail.com"
          readOnly
          value={`${pychoId.usuario.email}`}
        />
      </FormControl>
      <FormControl id="passwordUser">
        <FormLabel>Fecha de nacimiento</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="text"
          readOnly
          value={`${pychoId.usuario.birth}`}
        />
      </FormControl>

      <FormControl id="confPasswordUser">
        <FormLabel>Dirección</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="text"
          readOnly
          value={`${pychoId.usuario.address}`}
        />
      </FormControl>
      
      <FormControl id="city">
        <FormLabel>Ciudad</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="text"
          readOnly
          value={`${pychoId.usuario.ciudad.name}`}
        />
        {/* <Select focusBorderColor="brand.blue" placeholder="Select city">
          <option value="buenosaires">Buenos Aires</option>
          <option value="mendoza">Mendoza</option>
          <option value="cordoba">Ciudad de Córdoba</option>
          <option value="caba" selected>
            Capital Federal
          </option>
          <option value="rosario">Rosario</option>
          <option value="laplata">La Plata</option>
          <option value="salta">Salta</option>
        </Select> */}
      </FormControl>
      <FormControl id="country">
        <FormLabel>País</FormLabel>
        <Select focusBorderColor="brand.blue" placeholder="Seleccionar país" disabled>
          <option value="argentina" selected>
            Argentina
          </option>
          <option value="colombia">Colombia</option>
          <option value="venezuela">Venezuela</option>
        </Select>
      </FormControl>
    </Grid>
  )
}

export default Informacion