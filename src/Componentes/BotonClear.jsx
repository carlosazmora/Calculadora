import React from 'react';
import "../Stylesheets/BotonClear.css";


function BotonClear(props) {
  return (
    <div className="Limpiar" onClick={() => props.Clicked()}>
      {props.children}
    </div>
  );
}

export default BotonClear;