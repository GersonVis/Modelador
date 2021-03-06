import React from 'react';
import ProviderCara from '../../../../../Providers/ProviderCara/ProviderCara';
import '../Css/EstilosBotonAgregar.css'
class BotonAgregar extends React.Component{
    static contextType=ProviderCara;
    colorBotonBase='#1e2631';
    colorTextoBase='#d9b310';
    colorBotonSecundario='#d9b310';
    colorTextoSecundario='#1e2631';
    constructor(props){
        super(props);
        this.evPresionado=this.evPresionado.bind(this);
        this.evSoltado=this.evSoltado.bind(this);
        this.state={
            colorBoton: this.colorBotonBase,
            colorTexto: this.colorTextoBase,
        }
    }
    evPresionado(){
        var date = new Date();
        var keyUn=date.getDay() + '' + date.getHours() + date.getMinutes() + date.getMilliseconds();
        this.context.AgregarCara(keyUn);
        this.setState((state, props) => ({
            colorBoton: this.colorBotonSecundario,
            colorTexto: this.colorTextoSecundario,
        }));
    }
    evSoltado(){
        this.setState((state, props) => ({
            colorBoton: this.colorBotonBase,
            colorTexto: this.colorTextoBase,
          }));
    }
    render(){
        return(
            <div className="divBotonAgregar"
            onMouseDown={this.evPresionado}
            onMouseUp={this.evSoltado}
            style={
                {
                    backgroundColor:this.state.colorBoton,
                    color: this.state.colorTexto,
                }
            }
            >
                <p className="divBotonAgregarTexto">AGREGAR</p>
            </div>
        );
    }
}
export default BotonAgregar;