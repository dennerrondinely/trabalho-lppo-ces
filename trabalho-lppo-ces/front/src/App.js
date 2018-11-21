import React, { Component } from 'react';
import './App.css';
import Rotas from './components/Paginas/Rotas'

export default class App extends React.Component {
render() {
    return (
      <div className="App">
            <Rotas />
      </div>
    );
  }
}