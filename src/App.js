import './App.css';
import React from 'react';
import Controles from './Interfaz/Controles/Javascript/Controles';
import Lienzo3D from './Interfaz/Lienzo3D/Javascript/Lienzo3D';
import Principal from './Interfaz/PantallaPrincipal/Javascript/Principal';
import ProviderCaraContenedor from './Providers/ProviderCara/ProviderCaraContenedor';
import ProviderKeyBase from './Providers/ProviderKeys/ProviderKeyBase';

class App extends React.Component {
  render() {
    return (
      <div>
        <ProviderKeyBase>
          <ProviderCaraContenedor>
            <Principal Controles={<Controles />} ZonaDeTrabajo={<Lienzo3D></Lienzo3D>}>
            </Principal>
          </ProviderCaraContenedor>
        </ProviderKeyBase>

      </div>
    );
  }
}

export default App;
