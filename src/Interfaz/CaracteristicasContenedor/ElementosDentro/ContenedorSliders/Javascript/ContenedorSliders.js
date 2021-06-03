import React from 'react';
import ProviderCara from '../../../../../Providers/ProviderCara/ProviderCara';
import SliderControl from '../../../../SliderControl/Javascript/SliderControl';
import '../Css/EstilosContenedorSliders.css';
class ContenedorSliders extends React.Component {
    static contextType=ProviderCara;
    render() {
        return (
            <div className="ContenedorSliders">
                <SliderControl id={this.context.seleccionado} Hacer={function e(context, value, id) {
                    context.RotarCaraX(id, value);
                }}></SliderControl>
                <SliderControl id={this.context.seleccionado} Hacer={function e(context, value, id) {
                    context.RotarCaraY(id, value);
                }}></SliderControl>
                <SliderControl id={this.context.seleccionado} Hacer={function e(context, value, id) {
                    context.RotarCaraZ(id, value);
                }}></SliderControl>
            </div>
        );
    }
}
export default ContenedorSliders;