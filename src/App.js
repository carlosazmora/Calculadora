import { useState } from 'react';
import { evaluate } from 'mathjs';
import './App.css';
import Boton from './Componentes/Boton';
import BotonClear from './Componentes/BotonClear';
import Pantalla from './Componentes/Pantalla';

function App() {

  const [Input, setInput] = useState("");

  const modificarInput = (valor) =>{
    setInput(Input + valor);
  }

  const evaluarInput = () =>{
    try{
      if(isFinite(evaluate(Input))){
        setInput(evaluate(Input))
      }else{
        alert("El resultado no es un número.");
        setInput("");
      }
    }catch{
      alert("Error al ejecutar la operación matemática.");
      setInput("");
    }
  }

  return (
    <div className="App">
      <h1>¡Hola, Mundo!</h1>
      <div className="Calculadora">
        <div className="Pantalla">
          <Pantalla Input = {Input}/>
        </div>
        <div className="Fila">
          <Boton Clicked = {modificarInput}>7</Boton>
          <Boton Clicked = {modificarInput}>8</Boton>
          <Boton Clicked = {modificarInput}>9</Boton>
          <Boton Clicked = {modificarInput}>+</Boton>
        </div>
        <div className="Fila">
          <Boton Clicked = {modificarInput}>4</Boton>
          <Boton Clicked = {modificarInput}>5</Boton>
          <Boton Clicked = {modificarInput}>6</Boton>
          <Boton Clicked = {modificarInput}>-</Boton>
        </div>
        <div className="Fila">
          <Boton Clicked = {modificarInput}>1</Boton>
          <Boton Clicked = {modificarInput}>2</Boton>
          <Boton Clicked = {modificarInput}>3</Boton>
          <Boton Clicked = {modificarInput}>*</Boton>
        </div>
        <div className="Fila">
          <Boton Clicked = {modificarInput}>0</Boton>
          <Boton Clicked = {modificarInput}>.</Boton>
          <Boton Clicked = {evaluarInput}>=</Boton>
          <Boton Clicked = {modificarInput}>/</Boton>
        </div>
        <div className="Fila">
          <BotonClear Clicked = {() => setInput("")}>AC</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
