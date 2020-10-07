import React, { Component } from 'react'
import CardCharacters from '../card/CardCharacters'


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
                
                <input type="text" placeholder="Escribe el personaje" value={this.state.inputName} onChange={this.handleChange}/>
                
                <CardCharacters name = {this.state.inputName}/>

            </div>
        );
    }
}

export default HomePage;




