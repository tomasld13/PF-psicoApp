import { FormControl, FormLabel, Grid, Input, Select, FormErrorMessage, FormHelperText, Button } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import Swal from "sweetalert2";

function validate(input) {
  let errors = {}
 
    if(!input.name) {
      errors.name = 'El nombre es requerido'
    } else if (!/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(input.name)) {
      errors.name = 'El nombre no debe ser numérico'
    } else if (!input.lastname) {
      errors.lastname = 'El apellido es requerido'
    } else if(!/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(input.lastname)) {
      errors.lastname = 'El apellido no debe ser numérico'
    } else if(!input.telephone) {
      errors.telephone = 'El numero debe ser del siguiente formato: +5412345678901'
    } else if(!/^\+54\d{11}$/.test(input.telephone)) {
      errors.telephone = 'El número es inválido'
    } else if (!input.email) {
      errors.email = 'El correo es requerido'
    } else if (!/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(input.email)) {
      errors.email = 'Inserte un correo válido'
    }
    return errors;
}


function AccountSettings() {


  const [errors, setErrors] = useState({})

  const { name, lastname, email, telephone, address } = useSelector(state=>state.auth.authBack)

  const [input, setInput] = useState({
    name: '',
    lastname: '',
    email: '',
    telephone: '',
  })

    function handleInputChange(e) {
      setInput({
        ...input,
        [e.target.name]: e.target.value,
      })
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    )
  }


    // function handleSubmit(e) {
    //   e.preventDefault();

    //   if(input.name === '' || input.lastname === '' || input.email === '' 
    //   || input.telephone === '') {
    //     return Swal.fire(
    //       'Debe de completar los campos',
    //       '',
    //       'error'
    //     )
    //   } 
    // }

    const isEnabled = !errors.name && !errors.lastname && !errors.telephone && !errors.email
    
  return (
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      gap={6}
    >    
    <form>
    
      <FormControl 
      isRequired
      id="firstName"
      >
        <FormLabel>Nombre</FormLabel>
        <Input 
        focusBorderColor="brand.blue" 
        type="text" 
        name='name'
        value={input.name}
        placeholder={name}
        onChange={(e) => handleInputChange(e)}
        ></Input>
         {errors.name && <p className="e">{errors.name}</p>}  
      </FormControl>

      <FormControl 
      isRequired 
      id="lastname"
      >
        <FormLabel>Apellido</FormLabel>
        <Input 
        focusBorderColor="brand.blue" 
        type="text" 
        name='lastname'
        value={input.lastname}
        placeholder={lastname} 
        onChange={(e) => handleInputChange(e)}
        ></Input>
      {errors.lastname && <p className="e">{errors.lastname}</p>} 
      </FormControl>

      <FormControl 
      isRequired 
      id="phoneNumber">
        <FormLabel>Numero de telefono</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          value={input.telephone}
          name='telephone'
          type="phone"
          placeholder={telephone}
          onChange={(e) => handleInputChange(e)}
        />
      </FormControl>
      {errors.telephone && <p className="e">{errors.telephone}</p>} 

      <FormControl 
      isRequired 
      id="email">
        <FormLabel>Email</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="email"
          value={input.email}
          name='email'
          placeholder={email}
          onChange={(e) => handleInputChange(e)}
        />
 {errors.email && <p className="e">{errors.email}</p>} 
      </FormControl>
            
      <FormControl id="address">
        <FormLabel>Dirección</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="text"
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
  </form>
  <Button disabled={!isEnabled}>Actualizar</Button>
    </Grid>
  )
}

export default AccountSettings