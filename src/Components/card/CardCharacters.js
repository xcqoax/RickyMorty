import React from 'react';
import { useQuery, gql } from '@apollo/client';
import  Card  from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import  Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'

export default function CardCharacters(props) {

  function handleClick(name){
   console.log('hola '+name)
  }

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
       
        if (loading) return <Container><Spinner animation="border" variant="primary" className='text-center'/></Container>;
        if (error) return  <p>Error</p>
       
         const resultado = data.characters.results;
       
       const listaPersonajes = resultado.map((personaje) =>
       <div>
         <Col>
           <Card style={{ width: '18rem' }} className="mt-2" >
             <Card.Img variant="top" src={personaje.image} />
             <Card.Body>
               <Card.Title className='text-center' onClick={handleClick}>{personaje.name}</Card.Title>
               <Button onClick={handleClick(personaje.name)} variant="outline-primary" > Detalles </Button>
             </Card.Body>
           </Card>
         </Col>  
       </div>
        // hacer tarjeta
       )
       
         return(
           <div>
             <Container>
               <Row md={3}>
                 {listaPersonajes}
               </Row>
             </Container>
           </div>
         );
       }
       
