import React from 'react';
import ProviderCara from '../../../Providers/ProviderCara/ProviderCara';
import '../Css/EstilosCaracteristicasContenedor.css';
import ModificarValores from '../ElementosDentro/ModificarValores/Javascript/ModificarValores';
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
        console.log(this.keyNueva);
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
        this.context.Eliminar(this.keyNueva);
    }
    render() {
        const { x, y, evMover } = this.state;
        const datos = this.context.CarasDatos.get(this.keyNueva);
        //const yoEnLista= this.context.CarasLista.get(this.keyNueva);

        return (
            <div>
                {datos.visible != 'hidden' ?
                    <div
                        className='divCaracteristicasContenedor'

                    >
                        <div onMouseDown={this.evPulsado}
                            onMouseUp={this.evSoltado}
                            onMouseOut={this.evAfuera}
                            className={this.context.seleccionado == this.keyNueva ? this.state.classEstilo + ' CaractSeleccionado' : 'divCaractContenedorCentro'}>
                            <div className="divCaractConteDatosPadre">
                                <ModificarValores keyNueva={this.keyNueva}></ModificarValores>

                            </div>
                            <div className="divCaracConElimintar"
                                onMouseDown={this.evEliminar}>
                                <div className="divCaracConElimintarBot">
                                    <p className="pTexto">X</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    : <div></div>}
            </div>
        );
    }
}
export default CaracteristicasContenedor;