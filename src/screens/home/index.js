import React, { Component } from 'react';
import HomeLayout from './layout'


const GB = 2**30;
const MB = 2**20;
const KB = 2**10;

const ecuacion = t => 3*GB - 2*KB * 2*t - 512*KB * 100*t - 2*MB;

const data = [
  {
    iteracion: 1,
    xn: ecuacion(0),
    xnAnterior: 0,
    error: 0
  },
  {
    iteracion: 2,
    xn: ecuacion(1),
    xnAnterior: ecuacion(0),
    error: Math.abs(ecuacion(1) - ecuacion(0))
  }
]

class HomeContainer extends Component {
 state = { data }

  handleBiseccion() {

  }

  handlePuntoFijo() {

  }

  handleNewtonRaphson() {

  }

  render() {
    return (
      <HomeLayout
        handleBiseccion={this.handleBiseccion}
        handlePuntoFijo={this.handlePuntoFijo}
        handleNewtonRaphson={this.handleNewtonRaphson}
        data={this.state.data}
      />
    );
  }
}

export default HomeContainer;
