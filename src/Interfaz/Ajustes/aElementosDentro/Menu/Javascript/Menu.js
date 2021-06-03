import React, { useContext, useState } from 'react';
import ProviderCara from '../../../../../Providers/ProviderCara/ProviderCara';
import Editor from '../../Editor/Javascript/Editor';
import BotonIcono from '../../../../BotonIcono/Javascript/BotonIcono';
import '../Css/Menu.css';
import { faAddressBook, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { text } from '@fortawesome/fontawesome-svg-core';
function Menu() {
    const pr = useContext(ProviderCara);
    const conClick = function funClick(){
        console.log('clickeado');
        pr.cambiarVerMenu(0);
    }
    if (pr.verMenu) {
        return (<div className='Menu' >
            <div   onClick={conClick} style={{
                position: 'absolute',
                width: "100%",
                height: '100%',
                
                zIndex: 0
            }}></div>
            <div className="PPadre" >
                <div className="MenOpciones" >
                    <Editor texto='Generar' hacer={function e(pr, fun) {
                       
                        var text = '';
                        pr.CarasDatos.forEach(function (a, b) {
                            if (a.visible != 0) {
                                text+="{"
                                text+=':id: '+'"'+b+'", '
                                Object.keys(a).forEach(function (key){
                                    text+=":"+key+'*'+typeof(a[key])+': "'+a[key]+'",';
                                   //text+=":"+key+': "'+a[key]+'",';
                                })
                                text+="}"
                            }

                        });
                        fun(text);
                    }}>Copiar y guardar</Editor>
                    <BotonIcono icono={faTimesCircle} hacer={function (provider) {

                        provider.cambiarVerMenu(false);

                    }}></BotonIcono>
                </div>
                <div className="MenOpciones"
                >
                    <Editor texto="Agregar" hacer={function (props, fun, texto) {
                        var posIn = 0;
                        var posFin = texto.indexOf('}');
                        var parte = "";
                        var caras = new Map();
                        do {
                            parte = texto.substring(posIn + 1, posFin);
                            var ids = 0;
                            var idPi;
                            var idPf;
                            var con = true;
                            var datosC = {};
                            var id;
                            do {
                                idPi = parte.indexOf(':', ids);
                                ids = idPi + 1;
                                if (con) {
                                    idPf = idPi;
                                    con = false;
                                } else {
                                    var datI = parte.indexOf('"', idPi);
                                    var datF = parte.indexOf('"', datI + 1);
                                    var dat=parte.substring(idPf + 1, idPi)
                                    var dat2=parte.substring(datI + 1, datF);
                                    var tipo;
                                    if(parte.substring(idPf + 1, idPi)=="id"){
                                        id=dat2;
                                    }else{
                                        tipo=dat.substring(dat.indexOf('*')+1)
                                        dat=dat.substring(0, dat.indexOf('*'));
                                        console.log('dat '+tipo)
                                        if(tipo=="number"){
                                            datosC[dat] = parseInt(dat2);
                                        }else if(tipo=="string"){
                                            datosC[dat] = dat2;
                                        }
                                       
                                    }
                                    con = true;
                                }
                            } while (idPi != -1);
                            caras.set(id, datosC)
                            posIn = texto.indexOf('{', posIn + 1);
                            posFin = texto.indexOf('}', posFin + 1);
                        } while (posIn != -1);
                       
                        caras.forEach(function (value, key) {
                            if(key!=undefined){
                                pr.cambiarVerMenu(0);
                                pr.AgregarCaraDatos(key, value)
                            }
                          
                            
                            /*Object.keys(value).forEach(function (key) {
                                pr.AgregarCaraDatos()
                            })*/

                        })
                        /*console.log('carr');
                        console.log(caras);
                        console.log('carr');*/
                    }}>Pegar datos</Editor>
                </div>
            </div>
        </div>);
    } else {
        return (<div>Oculto</div>);
    }
}
export default Menu;
