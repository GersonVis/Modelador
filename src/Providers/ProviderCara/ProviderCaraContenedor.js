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
    verMenu=false;
    datosSeleccionado;
    selecAnterior;
    ajustesColor = false;
    constructor(props) {
        super(props);
        this.AgregarCaraDatos = (keyUn, datos) => {
            // console.log(keyUn);
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
                datos
            );

            console.log(this.CarasDatos);
            this.setState((state) => ({
                disponible: this.disponible++,
                caras: this.caras,
                CarasLista: this.CarasLista,
                CarasDatos: this.CarasDatos,
            }));
        }
        this.AgregarCara = (keyUn) => {
            // console.log(keyUn);
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
                    ancho: 40,
                    alto: 40,
                    visible: 1,
                    Activado: 1,
                    ajustesColor: 0,
                    red: 30,
                    green: 38,
                    blue: 49,
                }
            );
            console.log('final');
            console.log(this.CarasDatos);
            console.log('final');
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
            this.datosSeleccionado = this.CarasDatos.get(elementoSeleccionado);
            //console.log(this.datosSeleccionado);
            this.state.datosSeleccionado = this.datosSeleccionado;
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
            this.CarasDatos.get(idUn).visible = 0;
            this.setState((state, props) => ({

            }));
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
        this.RotarCaraX = (id, valor) => {
            this.CarasDatos.get(id).anguloX = valor;
            this.CarasDatos.get(id).activado = '1';
            this.setState((state, props) => ({
                CarasDatos: this.CarasDatos
            }))
        }
        this.RotarCaraY = (id, valor) => {
            this.CarasDatos.get(id).anguloY = valor;
            this.CarasDatos.get(id).activado = '1';
            this.setState((state, props) => ({
                CarasDatos: this.CarasDatos
            }))
        }
        this.RotarCaraZ = (id, valor) => {
            this.CarasDatos.get(id).anguloZ = valor;
            this.CarasDatos.get(id).activado = '1';
            this.setState((state, props) => ({
                CarasDatos: this.CarasDatos
            }))
        }

        this.MoverX = (value) => {
            var dat = this.CarasDatos.get(this.seleccionado);
            dat.translateX += value;
            this.setState((state, props) => ({
                CarasDatos: this.CarasDatos
            }))
        }
        this.MoverY = (value) => {
            var dat = this.CarasDatos.get(this.seleccionado);
            dat.translateY += value;
            this.setState((state, props) => ({
                CarasDatos: this.CarasDatos
            }))
        }
        this.MoverZ = (value) => {
            var dat = this.CarasDatos.get(this.seleccionado);
            dat.translateZ += value;
            this.setState((state, props) => ({
                CarasDatos: this.CarasDatos
            }))
        }
        this.CambiarAncho = (value) => {
            var dat = this.CarasDatos.get(this.seleccionado);
            if (dat.ancho >= 0 || value > 0) {
                dat.ancho += value;
                this.setState((state, props) => ({
                    CarasDatos: this.CarasDatos
                }))
            } else {
                if (dat.ancho > 0) {
                    dat.ancho += value;
                    this.setState((state, props) => ({
                        CarasDatos: this.CarasDatos
                    }))
                }

            }

        }
        this.CambiarAlto = (value) => {
            var dat = this.CarasDatos.get(this.seleccionado);
            if (dat.alto >= 0 || value > 0) {
                dat.alto += value;
                this.setState((state, props) => ({
                    CarasDatos: this.CarasDatos
                }))
            } else {
                if (dat.alto > 0) {
                    dat.alto += value;
                    this.setState((state, props) => ({
                        CarasDatos: this.CarasDatos
                    }))
                }

            }

        }
        this.CambiarColor = (value) => {
            var dat = this.CarasDatos.get(this.seleccionado);
            dat.backgroundColor = value;
            this.setState((state, props) => ({
                CarasDatos: this.CarasDatos
            }))
        }
        this.AjustesColor = (id, value) => {
            var dat = this.CarasDatos.get(id);
            dat.ajustesColor = value;
            this.setState((state, props) => ({

            }))

        }
        this.CambiarRed = (id, value) => {
            var dat = this.CarasDatos.get(id);
            dat.red = value;
            this.setState((state, props) => ({

            }))
        }
        this.CambiarGreen = (id, value) => {
            var dat = this.CarasDatos.get(id);
            dat.green = value
            this.setState((state, props) => ({

            }))
        }
        this.CambiarBlue = (id, value) => {
            var dat = this.CarasDatos.get(id);
            dat.blue = value;
            this.setState((state, props) => ({

            }))
        }
        this.cambiarVerMenu=(valor)=>{
            this.verMenu=valor;
            console.log(valor);
            this.setState((state, props) => ({
                verMenu: this.verMenu
            }))
        }
        this.state = {
            verMenu: this.verMenu,
            ajustesColor: this.ajustesColor,
            caras: this.caras,
            CarasLista: this.CarasLista,
            disponible: this.disponible,
            CarasDatos: this.CarasDatos,
            keys: this.keys,
            angulos: this.angulos,
            seleccionado: this.seleccionado,
            datosSeleccionado: this.datosSeleccionado,
            AgregarCara: this.AgregarCara,
            AgregarCaraDatos: this.AgregarCaraDatos,
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
            RotarCaraX: this.RotarCaraX,
            RotarCaraY: this.RotarCaraY,
            RotarCaraZ: this.RotarCaraZ,
            MoverX: this.MoverX,
            MoverY: this.MoverY,
            MoverZ: this.MoverZ,
            CambiarAncho: this.CambiarAncho,
            CambiarAlto: this.CambiarAlto,
            CambiarColor: this.CambiarColor,
            AjustesColor: this.AjustesColor,
            CambiarRed: this.CambiarRed,
            CambiarGreen: this.CambiarGreen,
            CambiarBlue: this.CambiarBlue,
            cambiarVerMenu: this.cambiarVerMenu,
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