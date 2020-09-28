import React from 'react';
import { useQuery, gql } from '@apollo/client';
import  Card  from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import  Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'

function handleClick(personaje){
  
  console.log(personaje)
 } 

export default function CardCharacters(props) {

 

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
              
         return(
           <div>
             <Container>
               <Row >
                {resultado.map(personaje =>(
                  <Col md={4} xs={6}>
                    <Card style={{ width: '18rem' }} className="mt-2" >
                      <Card.Img variant="top" src={personaje.image} />
                      <Card.Body>
                        <Card.Title className='text-center'>{personaje.name}</Card.Title>
                        <Button onClick={handleClick(personaje)} variant="outline-primary" > Detalles </Button>
                      </Card.Body>  
                    </Card>
                 </Col> 
                ))}
                 
               </Row>
             </Container>
           </div>
         );
       }
       
