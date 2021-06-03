import React from 'react';
import ProviderCara from '../../../../../Providers/ProviderCara/ProviderCara';
import '../Css/EstilosDeUno.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class DeUno extends React.Component {
    static contextType=ProviderCara;
    constructor(props){
        super(props);
        this.state={
            valor: 0
        }
    }
    render() {
        return (
           <div onClick={this.props.hacer}>
               <FontAwesomeIcon icon={this.props.Icono} className="DeUnoIcon"/>
           </div>
           
        );
    }
}
export default DeUno;