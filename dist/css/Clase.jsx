import React, {Component} from 'react';
class ClaseDePrueba extends Component {
   constructor(props){
    super(props);
    this.state={
        name: 'Edgardo',
        age: '27',
    }
   }
    render(){
        return <h1>Hola, mi nombre es{this.state.name}
        </h1>
    }
}
