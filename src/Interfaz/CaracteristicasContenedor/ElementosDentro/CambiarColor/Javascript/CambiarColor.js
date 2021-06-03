import React from 'react';

import SliderControl from '../../../../SliderControl/Javascript/SliderControl';
import '../Css/EstilosCambiarColor.css';
import { faPlusCircle, faMinusCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProviderCara from '../../../../../Providers/ProviderCara/ProviderCara';
class CambiarColor extends React.Component {
    static contextType = ProviderCara;
    activarAjustes=0;
    max = parseInt('ffffff', 16);
    base="00";
    constructor(props) {
        super(props);
        this.evEliminarDown = this.evEliminarDown.bind(this);
        this.evChange = this.evChange.bind(this);
        this.evColorCambiar=this.evColorCambiar.bind(this);
        this.state = {
            valor: '#1e2631',
            aceptado: '1e2631'
        }
    }
    evEliminarDown() {
        this.context.Eliminar(this.props.keyPasar);
    }
    evChange(ev) {
        console.log(ev.target.value);
        var hex = ev.target.value.replaceAll('#', '');
        hex = parseInt(hex, 16);
        if (hex <= this.max) {
            this.state.aceptado = ev.target.value.replaceAll('#', '');
            this.context.CambiarColor(this.state.aceptado);
        }
        this.setState({
            valor: ev.target.value
        })
    }
    evColorCambiar(){
        var datos=this.context.CarasDatos.get(this.props.keyNueva);
        var r=datos.red.toString(16);
        r=r.toString();
        console.log(r.toString(16));
        this.context.AjustesColor(this.props.keyNueva, this.activarAjustes?this.activarAjustes=0:this.activarAjustes=1);
    }
    
    render() {
        var datos=this.context.CarasDatos.get(this.props.keyNueva);
        
        return (<div className="CambiarColor Padre" >
            <div className="CambiarColor pCuadro">
                <div
                onClick={this.evColorCambiar} 
                style={{
                    backgroundColor: 'rgb('+datos.red+','+datos.green+','+datos.blue+')',
                }} className="CambiarColor Cuadro">
                </div>
            </div>
           
        </div>);
    }
}
export default CambiarColor;
// <input type="text" className="CambiarColor Input" onChange={this.evChange} value={this.state.valor}></input>