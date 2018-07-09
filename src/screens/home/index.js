import React, { Component } from 'react';
import HomeLayout from './layout';
import {metodoBiseccion, metodoNewtonRaphson, metodoPuntoFijo} from './utils';


class HomeContainer extends Component {
 state = { data: [] };

  handleBiseccion = () => {
    const data = metodoBiseccion();
    this.setState({ data: data });
  }

  handlePuntoFijo() {
    const data = metodoPuntoFijo();
    this.setState({ data });
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
