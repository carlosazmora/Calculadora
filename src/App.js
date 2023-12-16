import './App.css';
import Boton from './Componentes/Boton';
import BotonClear from './Componentes/BotonClear';
import Pantalla from './Componentes/Pantalla';

function App() {
  return (
    <div className="App">
      <h1>¡Hola, Mundo!</h1>
      <div className="Calculadora">
        <div className="Pantalla">
          <Pantalla/>
        </div>
        <div className="Fila">
          <Boton>7</Boton>
          <Boton>8</Boton>
          <Boton>9</Boton>
          <Boton>+</Boton>
        </div>
        <div className="Fila">
          <Boton>4</Boton>
          <Boton>5</Boton>
          <Boton>6</Boton>
          <Boton>-</Boton>
        </div>
        <div className="Fila">
          <Boton>1</Boton>
          <Boton>2</Boton>
          <Boton>3</Boton>
          <Boton>*</Boton>
        </div>
        <div className="Fila">
          <Boton>0</Boton>
          <Boton>.</Boton>
          <Boton>=</Boton>
          <Boton>/</Boton>
        </div>
        <div className="Fila">
          <BotonClear>AC</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
