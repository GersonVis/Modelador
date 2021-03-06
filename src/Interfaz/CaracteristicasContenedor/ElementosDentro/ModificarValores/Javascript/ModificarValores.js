import React from 'react';
import ProviderCara from '../../../../../Providers/ProviderCara/ProviderCara';
import '../Css/EstilosModificarValores.css';
class ModificarValores extends React.Component {
    static contextType = ProviderCara;
    intTrX;
    constructor(props) {
        super(props);
        this.CambioTranslateX = this.CambioTranslateX.bind(this);
        this.clickTrX=this.clickTrX.bind(this);
        this.funTrX=this.funTrX.bind(this);
        this.state = {
            valueTranslate: this.props.datos,
            trAcX: '0',
            trValueX: '',
        }
    }
    CambioTranslateX(eve) {
        console.log(eve.target.value);
        this.setState((state, props) => ({
            trValueX: eve.target.value,
        }));
        if(eve.target.value!=''){
            console.log('key: '+this.props.keyNueva);
            this.context.ActualizarX(this.props.keyNueva, eve.target.value);
        }
    }
    funTrX(){
        var ele=document.getElementById(this.keyNueva+'trx');
        ele.blur();
        this.setState((state, props) => ({
            trAcX:'0',
        }));
        clearInterval(this.intTrX);
    }
    clickTrX(){
        this.setState((state, props) => ({
            trAcX:'1',
        }));
        this.intTrX=setInterval(this.funTrX, 5000);
    }
    render() {
        const datos = this.context.CarasDatos.get(this.props.keyNueva);
        return (
            <div className="divCaractConteDatos">
                <div className="divModificarValores">
                    <div className="divModificarValoresIdenti">
                        <p className="pModificarValoresTexto">X</p>
                    </div>
                    {this.state.trAcX == '0' ?
                        <div className="divModificarValoresConInput">
                            <input className="divModificarValoresInput" id={this.keyNueva+'trx'} type="text" value={datos.translateX} onClick={this.clickTrX}></input>
                        </div> :
                        <div className="divModificarValoresConInput">
                            <input className="divModificarValoresInput" id={this.keyNueva+'trx'} type="text" value={this.state.trValueX} onChange={this.CambioTranslateX}></input>
                        </div>
                    }
                    <div className="divModificarValoresConInput">
                        <input className="divModificarValoresInput" type="text" value={this.props.datos2}></input>
                    </div>
                </div>
            </div>


        );
    }
}
export default ModificarValores;
