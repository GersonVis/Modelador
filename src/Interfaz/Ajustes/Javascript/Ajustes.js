
import { faAddressBook, faCog, faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import ProviderCara from '../../../Providers/ProviderCara/ProviderCara';
import ProviderCaraContenedor from '../../../Providers/ProviderCara/ProviderCaraContenedor';
import Menu from '../aElementosDentro/Menu/Javascript/Menu';
import '../Css/EstilosAjustes.css';
function Ajustes(){
    var [ver, mostrarOpciones] = useState(true);
    const Caras= useContext(ProviderCara);
    function ecClick(){ 
        mostrarOpciones(true);
        Caras.cambiarVerMenu(true);
    }
    return(
      <div className="Ajustes" onClick={
        ecClick
           }>
        <FontAwesomeIcon icon={faSave} color='white'></FontAwesomeIcon>
    </div>);
}
export default Ajustes;
