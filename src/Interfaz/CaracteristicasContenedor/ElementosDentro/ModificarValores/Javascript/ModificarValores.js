import React from 'react';
import ProviderCara from '../../../../../Providers/ProviderCara/ProviderCara';
import '../Css/EstilosModificarValores.css';
class ModificarValores extends React.Component {
    static contextType = ProviderCara;
    intTrX;
    eleM;
    parsear = /^[0-9]+$/;
    constructor(props) {
        super(props);
        this.state = {
            translateX: '',
            anguloX: '',
        }
        this.clTranslateX = this.clTranslateX.bind(this);
        this.CambioTranslateX = this.CambioTranslateX.bind(this);
    }
    CambioTranslateX(e, op) {
        console.log('op:' + op);
        var val = e.target.value;
        switch (op) {
            case 0:
                this.setState({ translateX: val })
                break;
            case 1:
                this.setState({ anguloX: val })
                break;
        }
        if (val.startsWith('-')) {
            if (val.match(this.parsear)) {
                switch (op) {
                    case 0:
                        this.context.CambiosCara(this.props.keyNueva, parseInt(val), op);
                        break;
                    case 1:
                        this.context.CambiosCara(this.props.keyNueva, parseInt(val, op));
                        break;
                }
            }
        } else {
            if (val.match(this.parsear)) {
                switch (op) {
                    case 0:
                        this.context.CambiosCara(this.props.keyNueva, parseInt(val), op);
                        break;
                    case 1:
                        this.context.CambiosCara(this.props.keyNueva, parseInt(val), op);
                        break;
                }
            }
        }
    }
    clTranslateX(e) {
      // this.context.CambiosCara(this.props.keyNueva, this.state.translateX, op);
        this.context.SeleccionarCara(this.props.keyNueva, '2');
    }
    render() {
        const datos = this.context.CarasDatos.get(this.props.keyNueva);
        //console.log(datos);
        if (datos.Activado === '1') {
            this.state.translateX = datos.translateX;
            return (
                <div className="divCaractConteDatos">
                    <div className="divModificarValores">
                        <div className="divModificarValoresIdenti">
                            <p className="pModificarValoresTexto">X</p>
                        </div>
                        <div className="divModificarValoresConInput">
                            <input className="divModificarValoresInput"
                                id={this.keyNueva + 'trx'}
                                type="text"
                                value={datos.translateX}
                                onClick={this.clTranslateX}></input>
                        </div>
                        <div className="divModificarValoresConInput">
                            <input className="divModificarValoresInput"
                                id={this.keyNueva + 'trx'}
                                type="text"
                                value={datos.anguloX}
                                onClick={this.clTranslateX}></input>
                        </div>
                    </div>
                </div>

            );
        } else {
            return (
                <div className="divCaractConteDatos">
                    <div className="divModificarValores">
                        <div className="divModificarValoresIdenti">
                            <p className="pModificarValoresTexto">X</p>
                        </div>
                        <div className="divModificarValoresConInput">
                            <input className="divModificarValoresInput"
                                id={this.keyNueva + 'trx'}
                                type="text"
                                value={this.state.translateX}
                                onChange={(e) => this.CambioTranslateX(e, 0)}
                                onClick={this.clTranslateX}></input>
                        </div>
                        <div className="divModificarValoresConInput">
                            <input className="divModificarValoresInput"
                                id={this.keyNueva + 'trx'}
                                type="text"
                                value={this.state.anguloX}
                                onChange={(e) => this.CambioTranslateX(e, 1)}
                                onClick={this.clTranslateX}></input>
                        </div>
                    </div>
                </div>
            );
        }

    }
}
export default ModificarValores;
