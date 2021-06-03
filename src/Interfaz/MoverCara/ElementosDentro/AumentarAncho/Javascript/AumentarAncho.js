import React from 'react';
import ProviderCara from '../../../../../Providers/ProviderCara/ProviderCara';
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../Css/EstilosAumentarAncho.css';
import Tirador from '../../Tirador/Javascript/Tirador';
import TiradorResta from '../../TiradorResta/Javascript/TiradorResta'
const AumentarAncho = (props) => {
    return (<div className="AuAncho">
        <Tirador Hacer={
            props.sum
        }></Tirador>
        <div>
            {props.children}
        </div>
        <TiradorResta Hacer={
            props.rest
        }></TiradorResta>
    </div>);
}
export default AumentarAncho;