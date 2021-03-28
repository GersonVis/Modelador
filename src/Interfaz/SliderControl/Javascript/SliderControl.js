import React from 'react';
import ProviderCara from '../../../Providers/ProviderCara/ProviderCara';
import '../Css/EstilosSlider.css';
class SliderControl extends React.Component {
    static contextType=ProviderCara;
    constructor(props){
        super(props);
        this.ControlSlider=this.ControlSlider.bind(this);
        this.state={
            valor: 0
        }
    }
    ControlSlider(event){
        this.setState((state, props)=>({
            valor: event.target.value
        }));
        this.props.Hacer(this.context, event.target.value, this.props.id);
    }
    render() {
        return (
            <div className="slider padre">
                <div className="divSlider">
                <div className="divBarra">
                    <span className="estiloValue izquierda">{this.state.valor}</span>
                    <input type="range" className="inpuBarra" min="0" max="360" steps="1" value={this.state.valor}
                    onChange={this.ControlSlider}>
                    </input>
                    <span className="stiloValue derecha">360</span>
                </div>
            </div>
           </div>
        );
    }
}
export default SliderControl;