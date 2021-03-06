import React from 'react';
import '../Css/EstilosGirarY.css'
import ProviderCara from '../../../Providers/ProviderCara/ProviderCara';
class GirarY extends React.Component {
    static contextType = ProviderCara;
    anguloY = 0;
    anguloX = 0;
    anguloZ = 0;
    evTime;
    evTimeGirando=null;
    constructor(props) {
        super(props);
        this.evClickX = this.evClickX.bind(this);
        this.evClickY = this.evClickY.bind(this);
        this.evClickZ = this.evClickZ.bind(this);
        this.evDown = this.evDown.bind(this);
        this.evRelojGirar=this.evRelojGirar.bind(this);
        this.funGirar=this.funGirar.bind(this);
    }
    evClickX() {
        this.context.RotarX(this.anguloX += 1);
    }
    evClickY() {
        this.context.RotarY(this.anguloY += 1);
    }
    evClickZ() {
        this.context.RotarZ(this.anguloZ += 1);
    }
    funGirar(){
        this.anguloY=this.anguloY===360?0:this.anguloY;
        this.context.RotarY(this.anguloY += 1);
    }
    evRelojGirar(){
       this.context.seleccionado='';
       if(this.evTimeGirando==null){
           this.evTimeGirando=setInterval(this.funGirar,10)
       }else{
           clearInterval(this.evTimeGirando);
           this.evTimeGirando=null;
       }
    }
    
    evDown(ejecutar){
        this.evTime=setInterval(this.evReloj, 10);
    }
    render() {
        return (
            <div className="divGirarControles">
                <div className="divGirar divGirarY"
                    onClick={this.evClickY}
                    onMouseDown={this.evDown}>
                    <p className="divControlesTexto">Y</p>
                </div>
                <div className="divGirar divGirarR"
                    onClick={this.evRelojGirar}
                  >
                    <p className="divControlesTexto">R</p>
                </div>
                <div className="divGirar divGirarX"
                    onClick={this.evClickX}>
                    <p className="divControlesTexto">X</p>
                </div>
                <div className="divGirar divGirarZ"
                    onClick={this.evClickZ}>
                    <p className="divControlesTexto">Z</p>
                </div>
            </div>

        );
    }
}
export default GirarY;
