import React from 'react';
import '../Css/EstiloControles.css';
import BotonAgregar from '../ElementosDentro/BotonAgregar/Javascript/BotonAgregar';
import CarasLista from '../ElementosDentro/CarasLista/Javascript/CarasLista';
class Controles extends React.Component{
    render()
    {
        return(
            <div className="divControles">
                <div className="divControlesCaras">
                    <CarasLista></CarasLista>
                </div>
                <div className="divControlesAgregar">
                    <BotonAgregar></BotonAgregar>
                </div>
            </div>
        );
    }
}
export default Controles;