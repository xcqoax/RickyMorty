import React, { Component } from 'react'
import CardCharacters from '../card/CardCharacters'
import  Container  from 'react-bootstrap/Container';

class HomePage extends Component {
    constructor(props){
        super(props);
        this.state = {
        inputName : ''
        };

this.handleChange = this.handleChange.bind(this);
}

handleChange(e){  
    this.setState({
        inputName: e.target.value
    });
}

    render() {
        return (
            <div>
               
                <div className="navPersonaje">   
                    <Container>
                <input type="text" placeholder="Escribe el personaje" value={this.state.inputName} onChange={this.handleChange}/>
                    </Container>
                </div> 
                <CardCharacters name = {this.state.inputName}/>
                
            </div>
        );
    }
}

export default HomePage;




