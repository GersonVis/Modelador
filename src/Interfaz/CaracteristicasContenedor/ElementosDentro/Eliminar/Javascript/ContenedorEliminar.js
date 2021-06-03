import React from 'react';
import ProviderCara from '../../../../../Providers/ProviderCara/ProviderCara';
import SliderControl from '../../../../SliderControl/Javascript/SliderControl';
import '../Css/EstilosEliminar.css';
import {faPlusCircle, faMinusCircle, faTrash} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class ContenedorEliminar extends React.Component {
    static contextType=ProviderCara;
    constructor(props){
        super(props);
        this.evEliminarDown=this.evEliminarDown.bind(this);
    }
    evEliminarDown(){
        this.context.Eliminar(this.props.keyPasar);
    }
    render() {
        
        return (<div className="divCaracConElimintar"
            onClick={this.evEliminarDown}>
            <div className="divCaracConElimintarBot">
            <FontAwesomeIcon icon={faTrash} color='white' className="Eliminar Icon"/>
            </div>
        </div>);
    }
}
export default ContenedorEliminar;