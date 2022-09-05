import React, {Component} from 'react';

class Formulario extends Component{
    constructor(props){
        super(props)
        this.state={valor:''}
    }
    evitarSubmit(event){
        event.preventDefault()
    }
    guardarCambios(event){
        this.setState({valor: event.target.value});
        console.log(this.state.valor)
    }
    //

    render(){
        return(
             <form onSubmit={(event)=>this.evitarSubmit(event)}>
                <input type="text" onChange={(event)=> this.guardarCambios(event)} value={this.state.valor} />
             </form>

        )
    }

}

export default Formulario