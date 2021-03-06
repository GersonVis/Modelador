import Ract from 'react';
class GirarZ extends React{
    static contextType = ProviderCara;
    anguloY=0;
    constructor(props){
        super(props);
        this.evClick=this.evClick.bind(this);
    }
    evClick(){
        this.context.RotarY(this.anguloY+=10);
    }
    render(){
        return(
            <div className="divGirarY"
            onClick={this.evClick}>
                Y
            </div>
        );
    }
}
export default GirarZ;
