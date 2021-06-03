import React from 'react';
import ProviderCara from '../../../../../Providers/ProviderCara/ProviderCara';

import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class TiradorResta extends React.Component {
    static contextType = ProviderCara;
    au = 1;
    dif;
    au = 1;
    posOr = 0;
    posFin = 0;
    posAn = 0;
    com = false;
    posNueva = 0;
    constructor(props) {
        super(props);
        this.evDown = this.evDown.bind(this);
        this.evUp = this.evUp.bind(this);
        this.evMove = this.evMove.bind(this);
        this.evLeave = this.evLeave.bind(this);
        this.evRegresar = this.evRegresar.bind(this);
        this.state = {
            abajo: false,
            x: 0,
            pIX: 0,
            xSta: 0
        }
    }
    evDown(ev) {
        this.state.abajo = true;;
        this.state.xSta = ev.clientX;
        this.posAn=ev.clientX;
    }
    evRegresar() {
        console.log('regresado');
        clearInterval(this.idRegresar);
        this.au=0;
        this.state.xSta=0;
        this.setState(function (state, props){
            return {
                x: 0
            }
        });
    }
    evUp(ev) {
        this.state.abajo = false;
        this.au = this.state.x;
        this.posFin = this.state.x;
        this.idRegresar = setInterval(this.evRegresar, 100);
    }
    evMove(ev) {
        if (this.state.abajo && this.context.seleccionado != null) {
            if (this.com) {
                this.com = false;
                this.posAn = ev.clientX;
            } else {
                this.com = true;
            }
            if(ev.clientX>this.state.xSta){
                
                this.props.Hacer(this.context, this.posAn - ev.clientX);
                this.setState(function (state, props) {
                    return {
                        x: this.state.xSta-ev.clientX
                    }
                });
            }
        }
    }
    evLeave() {
        //this.state.abajo=false;
    }
    render() {
        return (<div className="MoverInt Tirador">
            <div className="MoverInt Tirador Circulo"
                onMouseUp={this.evUp}
                onMouseDown={this.evDown}
                onMouseMove={this.evMove}
                style={{
                    right: this.state.x,
                }}
            >
                <FontAwesomeIcon icon={faArrowRight} />
            </div>
            <div className="MoverInt Tirador Ralla"></div>
        </div>);
    }
}
export default TiradorResta;