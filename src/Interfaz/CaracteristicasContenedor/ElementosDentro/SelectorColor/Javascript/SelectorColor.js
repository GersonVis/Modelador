import React from 'react';
import SliderControl from '../../../../SliderControl/Javascript/SliderControl';
import '../Css/SelectorColor.css';
const SelectorColor= (props) =>{
   
    return (
        <div className="SelectorColor">
            <SliderControl maximo='255' id={props.keyNueva} colFondo='red' Hacer={function e(context, value, id) {
                context.CambiarRed(id, value);
            }}
            ></SliderControl>
            <SliderControl maximo='255' id={props.keyNueva} colFondo='green' Hacer={function e(context, value, id) {
                context.CambiarGreen(id, value);
            }}></SliderControl>
            <SliderControl maximo='255' id={props.keyNueva} colFondo='blue' Hacer={function e(context, value, id) {
                context.CambiarBlue(id, value);
            }}></SliderControl>
        </div>
    );
}

export default SelectorColor;