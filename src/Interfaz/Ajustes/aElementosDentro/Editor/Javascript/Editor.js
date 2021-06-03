import React, { useContext, useState } from 'react';
import ProviderCara from '../../../../../Providers/ProviderCara/ProviderCara';
import '../Css/Editor.css';

function Editor(props) {
    var [text, setCount] = useState('');
    const pr = useContext(ProviderCara);

    function evCambiarText() {
        props.hacer(pr, setCount, text)
        
    }
    function evCambio(ev){
        setCount(ev.target.value)
    }
    return (<div className="Editor">
        <div className="Editor Padre">
            <div className="EdivTitulo">
                <span>{props.children}</span>
            </div>
            <div className="EdivTextArea">
                <textarea className="ETextArea" value={text} onChange={evCambio}></textarea>
            </div>
            <div className="EdivAccion">
                <div className="EAccion" onClick={evCambiarText}>
                    <span>{props.texto ?? ''}</span>
                </div>
            </div>
        </div>
    </div>);
}
export default Editor;
