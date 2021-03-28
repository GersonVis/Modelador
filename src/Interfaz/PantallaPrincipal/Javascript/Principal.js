import React from 'react';
import GirarControles from '../../GirarControles/Javascript/GirarControles.js'
import '../Css/EstilosPrincipal.css';
import RotarEjes from '../../RotarEjes/Javascript/RotarEjes.js'
import SliderControl from '../../SliderControl/Javascript/SliderControl.js';
import ProviderCara from '../../../Providers/ProviderCara/ProviderCara.js';
class Principal extends React.Component {
    static contextType = ProviderCara;
    render() {
        return (
            <div className="divPrincipal">
                <div className="divPrincipalTrabajo">
                   <div >{this.props.ZonaDeTrabajo}</div>
                   <div className="Principal Sliders">
                            <SliderControl Hacer={function e(context, value){
                                
                                context.RotarX(value);
                            }}></SliderControl>
                            <SliderControl Hacer={function e(context, value){
                               
                                context.RotarY(value);
                            }}></SliderControl>
                            <SliderControl Hacer={function e(context, value){
                               
                                context.RotarZ(value);
                            }}></SliderControl>
                    </div>
                </div>
                <div className="divPrincipalControles">
                   {this.props.Controles}
                </div>
                <GirarControles></GirarControles>
                
            </div>
        );
    }
}
export default Principal;