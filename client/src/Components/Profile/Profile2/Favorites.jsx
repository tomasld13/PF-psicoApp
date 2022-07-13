import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    FormControl,
    FormLabel,
    Grid,
    Input,
    InputGroup,
    InputLeftAddon,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
  } from '@chakra-ui/react'
import { psychoFavs } from '../../../slice/psico/thunks.js';
import { getPsychoFavs } from '../../../slice/psico/thunks.js';
import { Link } from 'react-router-dom';
  
  function CompanySettings() {

    const idUserBack = useSelector(state => state.auth.authBack.id);
    const idUserGoogle = useSelector(state => state.auth.authGoogle.id);
    const psicologoFavs = useSelector(state => state.psicology.psychologiFavs);
    const dispatch = useDispatch();

    const idUser = idUserBack ? idUserBack : idUserGoogle;

    useEffect(() => {
      dispatch(getPsychoFavs(idUser));
    }, []);

    const deleteFavs = (idPsico) => {
      dispatch(psychoFavs('DELETE',idUser, idPsico));
      setTimeout(() => {
        dispatch(getPsychoFavs(idUser));
      },50);
    }

    return (
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        gap={6}
      >
        {
          psicologoFavs.favoritos?.length > 0 ? <div>
            {
              psicologoFavs.favoritos.map(fav => {
                return <>
                <FormControl className='flex' id="companyName" key={fav.id}>
                  <Link to={`/psico/${fav.idPsico}`}>
                    <FormLabel className='cursor-pointer'>Nombre: <span className='font-bold'>{fav.psicofavorito}</span></FormLabel>
                  </Link>
                  <button className='text-red-600 font-bold' onClick={() => deleteFavs(fav.idPsico)}>Eliminar</button>
                </FormControl>
                </> 
              })
            }
          </div> : <>Ningún psicologo en favoritos</>
        }
      </Grid>
    )
  }
  
  export default CompanySettings