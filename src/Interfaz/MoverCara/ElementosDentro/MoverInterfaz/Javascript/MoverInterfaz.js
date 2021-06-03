import React from 'react';
import Tirador from '../../Tirador/Javascript/Tirador';
import '../Css/EstilosMoverInterfaz.css';
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProviderCara from '../../../../../Providers/ProviderCara/ProviderCara';
import TiradorResta from '../../TiradorResta/Javascript/TiradorResta';

class MoverInterfaz extends React.Component {
    static contextType = ProviderCara;
    au = 1;
    constructor(props) {
        super(props);
    }
    render() {
        return (<div className="MoverInt">
            <Tirador Hacer={this.props.Hacer}></Tirador>
            <div className="MoverInt Texto">{this.props.children}</div>
            <TiradorResta Hacer={this.props.Hacer}></TiradorResta>
        </div>);
    }
}
export default MoverInterfaz;