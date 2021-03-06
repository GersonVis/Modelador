import React from 'react';
import ProviderCara from '../../../../../Providers/ProviderCara/ProviderCara';
import '../Css/EstiloCarasLista.css';
class CarasLista extends React.Component{
    static contextType=ProviderCara;
    render(){
        return(<div className="divCarasLista">
            {Array.from(this.context.CarasLista.values())}
        </div>);
    }
}
export default CarasLista;