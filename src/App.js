import './App.css';
import React from 'react';
import Controles from './Interfaz/Controles/Javascript/Controles';
import Lienzo3D from './Interfaz/Lienzo3D/Javascript/Lienzo3D';
import Principal from './Interfaz/PantallaPrincipal/Javascript/Principal';
import ProviderCaraContenedor from './Providers/ProviderCara/ProviderCaraContenedor';
import ProviderKeyBase from './Providers/ProviderKeys/ProviderKeyBase';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ProviderKeyBase>
      <ProviderCaraContenedor>
        <Principal Controles={<Controles />} ZonaDeTrabajo={<Lienzo3D></Lienzo3D>}>
        </Principal>
      </ProviderCaraContenedor>
    </ProviderKeyBase>
    );
  }
}export default App;



        /*  <div style={{
        background: '#EAEBEE',
        width: '100%',
        height: '100%',
        position: 'absolute',
        alignItems: 'center',
        display: 'grid',
        justifyItems: 'center',
      }}><div style={{
          width: '25%',
          height: '25%',
          background: '#bbccfa',
          border: '1px solid',
          borderRadius: '17px',
        }}>
          <div style={{
            width: '100%',
            height: '50%',
            alignItems: 'center',
            justifyContent: 'center',
            display: 'grid'
          }}>
            <p style={{
              textAlign: 'center',
              margin: '0'
            }}>Introduce tu edad: </p>
            <input style={{
              textAlign: 'center',
            }} onChange={this.Cambiar}></input>

          </div>
          <div style={{
            alignItems: 'center',
            justifyContent: 'center',
            display: 'grid'
          }}>
            <div>
              <p >Tu edad en segundos es</p>
              <p style={{
                textAlign: 'center',
                margin: '0'
              }}>{this.state.segundos}</p></div></div></div></div>*/