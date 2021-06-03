import React from 'react';
import ProviderCara from '../../../Providers/ProviderCara/ProviderCara';
import '../Css/EstilosSlider.css';
import DeUno from '../ElementosDentro/DeUno/DeUno.js/DeUno';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

class SliderControl extends React.Component {
    static contextType = ProviderCara;
    varPrueba = 0;
    constructor(props) {
        super(props);
        this.ControlSlider = this.ControlSlider.bind(this);
        this.state = {
            valor: 0
        }
        this.evSumar = this.evSumar.bind(this);
        this.evRestar = this.evRestar.bind(this);
    }
    ControlSlider(event) {
        this.setState((state, props) => ({
            valor: event.target.value
        }));
        this.props.Hacer(this.context, event.target.value, this.props.id);
    }
    evSumar() {
        if (this.state.valor < 360) {
            var val = parseInt(this.state.valor, 10);
            this.setState({
                valor: val += 1
            });
            this.props.Hacer(this.context, this.state.valor, this.props.id);
        }
    }
    evRestar() {
        if (this.state.valor > 0) {
            var val = parseInt(this.state.valor, 10);
            this.setState({
                valor: val -= 1
            });
            this.props.Hacer(this.context, this.state.valor, this.props.id);
        }
    }
    render() {

        return (
            <div className="slider padre">
                <div className="Slider Controlador">
                    <DeUno hacer={this.evSumar} Icono={faPlusCircle}></DeUno>
                    <DeUno hacer={this.evRestar} Icono={faMinusCircle}></DeUno>
                </div>
                <div className="divSlider"
                    style={
                        {
                            backgroundColor: this.props.colFondo ?? '#80a8f1',

                        }}
                >
                    <div className="divBarra" style={
                        {
                            backgroundColor: this.props.colFondo ?? '#80a8f1',

                        }}>
                        <span className="estiloValue izquierda">{this.state.valor}</span>
                        <input type="range" className="inpuBarra" min={this.props.minimo ?? 0} max={this.props.maximo ?? 360} steps="1" value={this.state.valor}
                            onChange={this.ControlSlider}>
                        </input>
                        <span className="estiloValue derecha">{this.props.maximo ?? 360}</span>
                    </div>

                </div>
            </div>
        );
    }
}
export default SliderControl;