import React, { useState,useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import  Card  from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import  Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'


export default function CardCharacters(props) {
  const [ datosPersonajes, setDatosPersonajes ] = useState ({
    nombre: '',
    imagen:'',
    tipo : '',
    genero : '',
    especies : ''
  })

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let person
  let infoModal ={}
 
  function handleClick(e){  
  let nombreChar = e.target.innerText
       person.find(char => {
          if(char.name === nombreChar){
                setDatosPersonajes({
                  nombre: char.name,
                  imagen: char.image,
                  tipo : char.type,
                  genero : char.gender,
                  especies : char.species
                })
              }
          })  
          
          handleShow()
   };

   
  const Personajes = gql`
        query{
          characters (filter:{name:"${props.name}"}){
            results{
              name
              image
              type
              gender
              species
            }
          }        
        }
    `;


        const { loading, error, data } = useQuery(Personajes)
       
        if (loading) return <Container><div className="row justify-content-center mt50"><Spinner animation="border" variant="primary" /></div></Container>;
        if (error) return  <p>Error</p>
       
        const resultado = data.characters.results;
          person = resultado

         return(
           <div>
             
             <Container>
               <Row >
                {resultado.map(personaje =>(
                  <Col md={4} xs={6}>
                    <Card style={{ width: '18rem' }} className="mt-2" >
                      <Card.Img variant="top" src={personaje.image} />
                      <Card.Body className='btnInfo'>
                        <Button onClick={handleClick} variant="outline-primary" > {personaje.name} </Button>
                      </Card.Body>  
                    </Card>
                 </Col> 
                ))}
                
               </Row>
                                  
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>{datosPersonajes.nombre}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="informacionGeneralPersonaje">
                    <img src={datosPersonajes.imagen} />
                    <ul className="infoPersonaje">
                      <li> <strong>Especie:</strong> {datosPersonajes.especies} </li>
                      <li> <strong>Genero:</strong> {datosPersonajes.genero} </li>  
                      <li> <strong>Tipo:</strong> {datosPersonajes.tipo} </li>
                    </ul>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>

             </Container>
           </div>
         );
        
       }
       
