import React, { Component } from 'react';
import HomeLayout from './layout';
import { metodoNewtonRaphson } from './utils'

class HomeContainer extends Component {
 state = { data: [] };

  handleBiseccion() {

  }

  handlePuntoFijo() {

  }

  handleNewtonRaphson = () => {
    const data = metodoNewtonRaphson();
    this.setState({ data });
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
