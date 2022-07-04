import { FormControl, FormLabel, Grid, Input, Select } from '@chakra-ui/react'
import { useSelector } from 'react-redux'

function AccountSettings() {

  const { name, lastname, email, telephone, address } = useSelector(state=>state.auth.authBack)

  return (
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      gap={6}
    >
      <FormControl id="firstName">
        <FormLabel>Nombre</FormLabel>
        <Input 
        focusBorderColor="brand.blue" 
        type="text" 
        placeholder={name}
        ></Input>
      </FormControl>
      <FormControl id="lastName">
        <FormLabel>Apellido</FormLabel>
        <Input focusBorderColor="brand.blue" type="text" placeholder={lastname} />
      </FormControl>
      <FormControl id="phoneNumber">
        <FormLabel>Numero de telefono</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="tel"
          placeholder={telephone}
        />
      </FormControl>
      <FormControl id="emailAddress">
        <FormLabel>Email</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="email"
          placeholder={email}
        />
      </FormControl>
      <FormControl id="passwordUser">
        <FormLabel>Contraseña</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="password"
          placeholder="ContraseñaDelUser"
        />
      </FormControl>

      <FormControl id="confPasswordUser">
        <FormLabel>Confirmar Contraseña</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="password"
          placeholder="ContraseñaDelUser"
        />
      </FormControl>
      
      <FormControl id="address">
        <FormLabel>Dirección</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="password"
          placeholder={address}
        />
      </FormControl>
      <FormControl id="country">
        <FormLabel>País</FormLabel>
        <Select focusBorderColor="brand.blue" placeholder="Seleccionar país">
          <option value="argentina" selected>
            Argentina
          </option>
        </Select>
      </FormControl>
    </Grid>
  )
}

export default AccountSettings