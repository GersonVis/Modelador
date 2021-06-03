import React from 'react';
import ProviderCara from '../../../Providers/ProviderCara/ProviderCara';
import SliderControl from '../../SliderControl/Javascript/SliderControl';
import '../Css/EstilosCaracteristicasContenedor.css';
import CambiarColor from '../ElementosDentro/CambiarColor/Javascript/CambiarColor';
import ContenedorSliders from '../ElementosDentro/ContenedorSliders/Javascript/ContenedorSliders';
import ContenedorEliminar from '../ElementosDentro/Eliminar/Javascript/ContenedorEliminar';
import ModificarValores from '../ElementosDentro/ModificarValores/Javascript/ModificarValores';
import SelectorColor from '../ElementosDentro/SelectorColor/Javascript/SelectorColor';
class CaracteristicasContenedor extends React.Component {
    static contextType = ProviderCara;
    keyNueva;
    yo = this;
    pulsadoCom = 0;
    classEstilo = 'divCaractContenedorCentro'
    constructor(props) {
        super(props);
        this.keyNueva = props.keyNueva;
        this.evPulsado = this.evPulsado.bind(this);
        this.evSoltado = this.evSoltado.bind(this);
        this.evPresionado = this.evPresionado.bind(this);
        this.evAfuera = this.evAfuera.bind(this);
        this.evEliminar = this.evEliminar.bind(this);
        this.state = {
            classEstilo: this.classEstilo,
        }
    }
    evSoltado(e) {
        this.pulsadoCom = 0;

    }
    evPulsado(e) {
        this.pulsadoCom = 1;
        //console.log(this.keyNueva);
        this.context.Seleccionar(this.keyNueva);
        this.setState((state, props) => ({
            classEstilo: this.classEstilo + ' CaractSeleccionado',
        }));
    }
    evPresionado(e) {
        if (this.pulsadoCom === 1) {
            this.setState(function (state, props) {
                return {

                }
            });
        }
    }
    evAfuera() {
        this.pulsadoCom = 0;
    }
    evEliminar() {
        //  this.context.Eliminar(this.keyNueva);
    }
    render() {
        const { x, y, evMover } = this.state;
        const datos = this.context.CarasDatos.get(this.keyNueva);
        //const yoEnLista= this.context.CarasLista.get(this.keyNueva);
        console.log(datos)
        return (
            <div>
                {datos.visible != 0 ?
                    <div
                        className='divCaracteristicasContenedor'>
                        <div onMouseDown={this.evPulsado}
                            onMouseUp={this.evSoltado}
                            onMouseOut={this.evAfuera}
                            className={this.context.seleccionado == this.keyNueva ? this.state.classEstilo + ' CaractSeleccionado' : 'divCaractContenedorCentro'}>
                            <div className="Caracteristicas Cambios">
                                {
                                    (datos.ajustesColor || datos.ajustesColor==1) ?
                                        <SelectorColor keyNueva={this.props.keyNueva}></SelectorColor>
                                        : <ContenedorSliders></ContenedorSliders>
                                }

                                <CambiarColor keyNueva={this.props.keyNueva}></CambiarColor>
                            </div>
                            <ContenedorEliminar keyPasar={this.keyNueva}></ContenedorEliminar>
                        </div>
                    </div>
                    : <div></div>}
            </div>
        );
    }
}
export default CaracteristicasContenedor;
/*<div className="divCaracConElimintar"
                                onMouseDown={this.evEliminar}>
                                <div className="divCaracConElimintarBot">
                                    <p className="pTexto">X</p>
                                </div>
                            </div>*/