import React, { useState, useEffect } from "react";
import { Logo } from "./Components";
import { decreaseRate, increaseRate } from "./Actions/appActions";
import { connect } from "react-redux";
import "./Assets/css/App.css";

const handleControlRate = (plus,value, {decreaseRate, increaseRate} ) => plus ? increaseRate(value) : decreaseRate(value)

const App = (props) => {
  const [rate, setRate] = useState(0)
  useEffect(() => setRate(props.rate))
  
  return(
    <div className="App">
      <header className="App-header">
        <Logo />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Sua nota para essa pagina: {props.rate}</p>
        <button
          target="_blank"
          onClick={() => handleControlRate(true,rate,props)}
          rel="noopener noreferrer"
        >
          Aumentar nota
        </button>
        <button
          target="_blank"
          onClick={() => handleControlRate(false,rate,props)}
          rel="noopener noreferrer"
        >
          Diminuir nota
        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

const mapStateToProps = state => ({
  rate: state.appState.rate
});

export default connect(
  mapStateToProps, { decreaseRate, increaseRate }
)(App);