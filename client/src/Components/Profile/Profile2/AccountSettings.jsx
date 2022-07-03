import { FormControl, FormLabel, Grid, Input, Select } from '@chakra-ui/react'

function AccountSettings() {
  return (
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      gap={6}
    >
      <FormControl id="firstName">
        <FormLabel>Nombre</FormLabel>
        <Input focusBorderColor="brand.blue" type="text" placeholder="Nombre" />
      </FormControl>
      <FormControl id="lastName">
        <FormLabel>Apellido</FormLabel>
        <Input focusBorderColor="brand.blue" type="text" placeholder="Apellido" />
      </FormControl>
      <FormControl id="phoneNumber">
        <FormLabel>Numero de telefono</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="tel"
          placeholder="+54 9 11 15468965"
        />
      </FormControl>
      <FormControl id="emailAddress">
        <FormLabel>Email</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="email"
          placeholder="nombre@gmail.com"
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
      
      <FormControl id="city">
        <FormLabel>Ciudad</FormLabel>
        <Select focusBorderColor="brand.blue" placeholder="Select city">
          <option value="buenosaires">Buenos Aires</option>
          <option value="mendoza">Mendoza</option>
          <option value="cordoba">Ciudad de Córdoba</option>
          <option value="caba" selected>
            Capital Federal
          </option>
          <option value="rosario">Rosario</option>
          <option value="laplata">La Plata</option>
          <option value="salta">Salta</option>
        </Select>
      </FormControl>
      <FormControl id="country">
        <FormLabel>País</FormLabel>
        <Select focusBorderColor="brand.blue" placeholder="Seleccionar país">
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

export default AccountSettings