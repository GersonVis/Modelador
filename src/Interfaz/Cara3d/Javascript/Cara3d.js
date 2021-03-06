import React from 'react';
import ProviderCara from '../../../Providers/ProviderCara/ProviderCara';
import '../Css/Cara3d.css'
class Cara3d extends React.Component {
    static contextType = ProviderCara;
    keyNueva;
    backgroundColor = 'red';
    yo = this;
    posXR; posYR;
    pulsadoCom = 0;
    transX = 0;
    transY = 0;
    classEstilo = 'divCara3D Cara3DSeleccionado';
    constructor(props) {
        super(props);
        this.keyNueva = props.keyNueva;
        this.evPulsado = this.evPulsado.bind(this);
        this.evSoltado = this.evSoltado.bind(this);
        this.evPresionado = this.evPresionado.bind(this);
        this.evAfuera = this.evAfuera.bind(this);
        this.state = {
            classEstilo: this.classEstilo,
            colorFondo: 'red',
            x: 0,
            y: 0,
            posIX: 0,
            posIY: 0,
            transX: 0,
            transY: 0,
        }
    }
    evSoltado(e) {
        this.pulsadoCom = 0;
        this.transX = this.transX + (e.clientX - this.state.posIX);
        this.transY = this.transY + (e.clientY - this.state.posIY);
        this.setState((state, props) => ({
            classEstilo: 'divCara3D Cara3DSeleccionado'
        }))
    }
    evPulsado(e) {
        this.pulsadoCom = 1;
        this.context.Seleccionar(this.keyNueva);
        this.setState((state, props) => ({
            classEstilo: 'divCara3D Cara3Dpresionado',
            posIX: e.clientX,
            posIY: e.clientY,
        }));
    }
    evPresionado(e) {
        if (this.pulsadoCom === 1) {
            this.context.ActualizarDatos(this.keyNueva, this.state.x,
                this.state.y, 0, 0, 0, 0);
            this.setState(function (state, props) {
                return {
                    x: this.transX + (e.clientX - this.state.posIX)+0,
                    y: this.transY + (e.clientY - this.state.posIY)+0,
                }
            });
        }
    }
    evAfuera() {
        this.pulsadoCom = 0;
    }
    render() {
        const { x, y, evMover } = this.state;
        const datos = this.context.CarasDatos.get(this.keyNueva);
      
        return (<div>
            {datos.visible != 'hidden' ?
                <div
                   
                    id={this.keyNueva}
                    key={this.keyNueva}
                    className={this.context.seleccionado == this.keyNueva ? this.state.classEstilo : 'divCara3D'}
                    style={{
                        transform: 'translateY(' + datos.translateY + 'px) translateX(' + datos.translateX + 'px)',
                    }}
                >
                </div> : <div></div>}
        </div>
        );
    }
}
export default Cara3d;