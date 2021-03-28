import React from 'react';
import ProviderCara from '../../../Providers/ProviderCara/ProviderCara';
import '../Css/EstilosRotarEjes.css'
class GirarCara extends React.Component {
    render(){
        return(<div className="divGirarCara">
            <div className='divGirarBotones'><p className='pGirarTexto'>X</p></div>
            <div className='divGirarBotones'><p className='pGirarTexto'>Y</p></div>
            <div className='divGirarBotones'><p className='pGirarTexto'>Z</p></div>
        </div>);
    }
}
export default GirarCara;