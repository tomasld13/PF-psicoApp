import React from 'react'
import {Container, Row,  Col , Form } from 'react-bootstrap';
import {Button} from '../Button/Button'
import DefaultUserPic from './team-male.jpg'
import {  useSelector } from 'react-redux'


function Profile() {

    const {displayName, status} = useSelector(state => state.auth.authFirebase);
    const storeAuthBack = useSelector(state => state.auth.authBack);


  return (
    <Container>
        <Row>
       <Col>
       <img src={DefaultUserPic} alt="profils pic" />
       </Col>
        <Col>
            <h1>PERFIL</h1>
            <Form className="form">     
    <p></p>
  <Form.Group controlId="formCategory1">
    <Form.Label>Nombre Completo</Form.Label>
    <Form.Control type="text" defaultValue='Nombre y apellido del usuario'/>
  </Form.Group>

  <Form.Group controlId="formCategory2">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" defaultValue='Email del usuario' />
  </Form.Group> 

  <Form.Group controlId="formCategory3">
    <Form.Label>Contraseña</Form.Label>
    <Form.Control type="password" defaultValue='Contraseña del usuario' />
  </Form.Group> 

  <Form.Group controlId="formCategory4">
    <Form.Label>Confirmar Contraseña</Form.Label>
    <Form.Control type="password" defaultValue='Contraseña del usuario' />
  </Form.Group> 

  <Form.Group controlId="formCategory5">
    <Form.Label>Foto de perfil</Form.Label>
    <Form.Control type="file" name="profileImage"/>
    </Form.Group>
  <Button variant="primary" >Actualizar perfil</Button>
  <Button variant="primary" >Ver favoritos</Button>
  <Button variant="primary" >Sesiones pendientes</Button>
  </Form>
   </Col>
    </Row>
</Container>
    )
}

export default Profile