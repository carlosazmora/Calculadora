import React from 'react';
import "../Stylesheets/Boton.css";

const esOperador = (valor) =>{
  return isNaN(valor) && (valor !== ".") && (valor !== "=");
}

function Boton(props) {
  return (
    <div className={`Boton ${esOperador(props.children) ? "Operador": "Numero"}`.trimEnd()} onClick={() => props.Clicked(props.children)}>
      {props.children}
    </div>
  );
}

export default Boton;