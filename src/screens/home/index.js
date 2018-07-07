import React, { Component } from 'react';
import HomeLayout from './layout'


const GB = 2**20;
const MB = 2**10;

const ecuacion = t => 3*GB - 2 * 2**t - 51200*t - 2*MB;

const derivada = t => -2 * 2**t * Math.log(2) - 51200;

const ecNewtonRaphson = xn => xn - (ecuacion(xn) / derivada(xn)); 

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

  handleNewtonRaphson( i = 0, xnAnterior = 0) {               // Intervalo []
    const resultado = ecNewtonRaphson(xnAnterior);


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
