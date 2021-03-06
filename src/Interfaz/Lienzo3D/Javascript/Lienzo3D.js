import React from 'react';
import ProviderCara from '../../../Providers/ProviderCara/ProviderCara';
import '../Css/EstilosLienzo3D.css';

class Lienzo3D extends React.Component {
    static contextType = ProviderCara;
    constructor(props) {
        super(props);
        this.evClick = this.evClick.bind(this);
    }

    evClick() {

    }
    render() {
        const { angulos } = this.context;
        if (this.context.caras == 0) {

        }
        return (
            <div id='bodPadre'>
                <div id="divPadre">
                    <div class="clBase" id="idBase1"
                    >
                        <div class="clDentro"
                            style={{
                                transform: 'rotateX(' + angulos.anguloX + 'deg) rotateY(' + angulos.anguloY + 'deg) rotateZ(' + angulos.anguloZ + 'deg)'
                            }}>
                            {Array.from(this.context.caras.values())}
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
export default Lienzo3D;