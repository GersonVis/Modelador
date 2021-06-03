
import { faAddressBook, faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import ProviderCara from '../../../Providers/ProviderCara/ProviderCara';

import '../Css/BotonIcono.css';
function BotonIcono(props){
    const [val, actualizar]= useState(0);
    const provider=useContext(ProviderCara);
   
    function evClick(){
        props.hacer(provider);
        actualizar(val);
    }
    return(
      <div className="BotonIcono" >
          {props.texto}
        <FontAwesomeIcon icon={props.icono} onClick={evClick} color='white'></FontAwesomeIcon>
    </div>);
}
export default BotonIcono;
