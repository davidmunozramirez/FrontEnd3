import React, {Component} from 'react';

export default class EleccionesAnteriores extends Component{

    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        console.log(this.props);
        const {opcionesPasadas} = this.props;
        return (
            <div className="recordatorio">
                <h3>Selección anterior: {opcionesPasadas}</h3>
                
                <h4>Historial de opciones elegidas: </h4>

                <ul>{
                    this.props.arrayOpciones.map((elemento, index)=> {
                        return <li key={index}>En la Opción {index + 1} elegiste: {elemento}</li>
                    })
                    }</ul>
            </div>
        )
    }

}
