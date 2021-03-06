import React from 'react';
import GirarY from '../../GirarY/Javascript/GirarY';
import '../Css/EstilosPrincipal.css';
class Principal extends React.Component {

    
    render() {
        return (
            <div className="divPrincipal">
                <div className="divPrincipalTrabajo">
                   {this.props.ZonaDeTrabajo}
                </div>
                <div className="divPrincipalControles">
                   {this.props.Controles}
                </div>
                <GirarY></GirarY>
            </div>
        );
    }
}
export default Principal;