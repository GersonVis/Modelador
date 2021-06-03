import React from 'react';
import '../Css/EstilosMoverContenedor.css';
import AumentarAncho from '../ElementosDentro/AumentarAncho/Javascript/AumentarAncho';
import MoverInterfaz from '../ElementosDentro/MoverInterfaz/Javascript/MoverInterfaz';
class MoverContenedor extends React.Component {
    constructor(props) {
        super(props);
        this.evDown = this.evDown.bind(this);
        this.evMove = this.evMove.bind(this);
        this.evUp = this.evUp.bind(this);
        this.evLeave = this.evLeave.bind(this);
        this.state = {
            abajo: false,
            soltado: true,
            x: 50,
            y: 50,
            pIX: 0,
            pIY: 0,
        };
    }
    evDown(ev) {
        this.state.abajo = true;
        this.state.pIX = this.state.x - ev.clientX;
        this.state.pIY = this.state.y - ev.clientY;
    }
    evMove(ev) {
        if (this.state.abajo) {
            // console.log(this.state.x, this.state.y, this.state.pIX, this.state.pIY,)
            this.setState(function (state, props) {
                return {
                    x: ev.clientX + this.state.pIX,
                    y: ev.clientY + this.state.pIY,
                }
            });
        }
    }
    evUp(ev) {
        this.state.abajo = false;
    }
    evLeave(ev) {
        this.state.abajo = false;
    }
    render() {
        return (<div className="Mover Principal"
            style={{
                top: this.state.y,
                left: this.state.x
            }}>

            <div className="Mover Contenedor">
                <AumentarAncho sum={function a(context, valor) {
                    context.CambiarAncho(valor);
                }} rest={function a(context, valor) {
                    context.CambiarAncho(valor);
                }}>W</AumentarAncho>
                <AumentarAncho sum={function a(context, valor) {
                    context.CambiarAlto(valor);
                }} rest={function a(context, valor) {
                    context.CambiarAlto(valor);
                }}>H</AumentarAncho>
            </div>
            <div className="Mover Boton"
                onMouseDown={this.evDown}
                onMouseMove={this.evMove}
                onMouseUp={this.evUp}
                onMouseLeave={this.evLeave}></div>
            <div className="MoverContenedor Posiciones">
                <MoverInterfaz Hacer={function e(context, value) {
                    context.MoverX(value);
                }}>X</MoverInterfaz>
                <MoverInterfaz Hacer={function e(context, value) {
                    context.MoverY(value);
                }}>Y</MoverInterfaz>
                <MoverInterfaz Hacer={function e(context, value) {
                    context.MoverZ(value);
                }}>Z</MoverInterfaz>
            </div>

        </div>);
    }
}
export default MoverContenedor;