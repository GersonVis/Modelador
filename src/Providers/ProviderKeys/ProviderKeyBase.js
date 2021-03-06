import React from 'react';
import ProviderKey from './ProviderKey'


class ProviderKeyBase extends React.Component{
    caras=[];
    disponible='0';
    constructor(props){
        super(props);
        this.TextoCambiar = (ev) => {
            console.log('pull');
			this.setState((state) => ({
				disponible: this.disponible++,
			}));
		}
        this.state={
            caras: this.caras,
            disponible: this.disponible,
            TextoCambiar: this.TextoCambiar
        }
    }
       render(){
           return(
               <ProviderKey.Provider value={this.state}>
                   {this.props.children}
               </ProviderKey.Provider>
           );
       }
}
export default ProviderKeyBase;