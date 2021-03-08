import React from 'react';
import Cara3d from '../../Interfaz/Cara3d/Javascript/Cara3d';
import CaracteristicasContenedor from '../../Interfaz/CaracteristicasContenedor/Javascript/CaracteristicasContenedor';
import CarasLista from '../../Interfaz/Controles/ElementosDentro/CarasLista/Javascript/CarasLista';
import ProviderCara from './ProviderCara'
class ProviderCaraContenedor extends React.Component {
    caras = new Map();
    CarasLista = new Map();
    CarasDatos = new Map();
    disponible = '0';
    keys = [1, 2, 3, 5];
    seleccionado;
    angulos = {
        anguloX: 0,
        anguloY: 1,
        anguloZ: 0,
    };
    selecAnterior;
    constructor(props) {
        super(props);
        this.AgregarCara = (keyUn) => {
            console.log(keyUn);
            this.CarasLista.set(
                keyUn,
                <CaracteristicasContenedor keyNueva={keyUn} />
            );
            this.caras.set(
                keyUn,
                <Cara3d keyNueva={keyUn} />
            )
            this.CarasDatos.set(
                keyUn,
                {
                    translateX: 0,
                    translateY: 0,
                    translateZ: 0,
                    anguloY: 0,
                    anguloX: 0,
                    anguloZ: 0,
                    visible: 'visible',
                    Activado: '1',
                }
            );

            //  console.log(this.CarasLista);
            this.setState((state) => ({
                disponible: this.disponible++,
                caras: this.caras,
                CarasLista: this.CarasLista,
                CarasDatos: this.CarasDatos,
            }));
        }
        this.SeleccionarCara = (idUn, cambiarA) => {
            if (this.selecAnterior != null) {
                this.CarasDatos.get(this.selecAnterior).activado = '0';
            }
            this.CarasDatos.get(idUn).Activado = cambiarA;
            this.selecAnterior = idUn;
            this.setState(() => ({
                CarasDatos: this.CarasDatos,
            }));
        }
        this.Seleccionar = (elementoSeleccionado) => {
            this.seleccionado = elementoSeleccionado;
            //console.log(elementoSeleccionado);
            this.setState((state) => ({
                seleccionado: this.seleccionado
            }));
        }
        this.RotarY = (anguloY) => {
            this.setState((state) => ({
                angulos: {
                    anguloX: state.angulos.anguloX,
                    anguloY: anguloY,
                    anguloZ: state.angulos.anguloZ,
                }
            }));
        };
        this.RotarX = (anguloX) => {
            this.setState((state) => ({
                angulos: {
                    anguloX: anguloX,
                    anguloY: state.angulos.anguloY,
                    anguloZ: state.angulos.anguloZ,
                }
            }));
        };
        this.RotarZ = (anguloZ) => {
            this.setState((state) => ({
                angulos: {
                    anguloX: state.angulos.anguloX,
                    anguloY: state.angulos.anguloY,
                    anguloZ: anguloZ,
                }
            }));
        };
        this.CambiarAngulos = (x, y, z) => {
            //  console.log(y)
            this.setState((state) => (
                {
                    angulos: {
                        anguloX: x,
                        anguloY: y,
                        anguloZ: z,
                    }
                }
            ));
        }
        this.ActualizarDatos = (id, translateX, translateY, translateZ, anguloX, anguloY, anguloZ) => {
            this.CarasDatos.get(id).translateX = translateX;
            this.CarasDatos.get(id).translateY = translateY;
            this.CarasDatos.get(id).translateZ = translateZ;
            this.CarasDatos.get(id).anguloX = anguloX;
            //console.log(translateX);
            this.setState((state, props) => ({
                CarasDatos: this.CarasDatos
            }))
        }
        this.ActualizarX = (keUn, translateX) => {
            this.CarasDatos.get(keUn).translateX = translateX;
            this.CarasDatos.get(keUn).activado = '1';
            this.setState((state, props) => ({
                CarasDatos: this.CarasDatos
            }))

        }
        this.Eliminar = (idUn) => {
            this.CarasDatos.get(idUn).visible = 'hidden';
        }
        this.CambiosCara = (idUn, NuevoValor, intOp) => {
            switch (intOp) {
                case 0:
                    this.CarasDatos.get(idUn).translateX = NuevoValor;
                    this.setState((state, props) => ({
                        CarasDatos: this.CarasDatos,
                    }));
                    break;
                case 1:
                    this.CarasDatos.get(idUn).anguloX = NuevoValor;
                    this.setState((state, props) => ({
                        CarasDatos: this.CarasDatos,
                    }));
                    break;
            }
        }

        this.state = {
            caras: this.caras,
            CarasLista: this.CarasLista,
            disponible: this.disponible,
            CarasDatos: this.CarasDatos,
            keys: this.keys,
            angulos: this.angulos,
            seleccionado: this.seleccionado,
            AgregarCara: this.AgregarCara,
            Seleccionar: this.Seleccionar,
            CambiarAngulos: this.CambiarAngulos,
            ActualizarDatos: this.ActualizarDatos,
            ActualizarX: this.ActualizarX,
            Eliminar: this.Eliminar,
            SeleccionarCara: this.SeleccionarCara,
            RotarY: this.RotarY,
            RotarX: this.RotarX,
            RotarZ: this.RotarZ,
            CambiosCara: this.CambiosCara,
        }
    }
    render() {
        return (
            <ProviderCara.Provider value={this.state}>
                {this.props.children}
            </ProviderCara.Provider>
        );
    }
}
export default ProviderCaraContenedor;