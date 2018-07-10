import React, { Component } from 'react';
import HomeLayout from './layout';
import {metodoBiseccion, metodoNewtonRaphson, metodoPuntoFijo} from './utils';
import {columns} from './constants';

class HomeContainer extends Component {
 state = {
     columns: columns,
     data: []
 };

  handleBiseccion = () => {
    const { columns, data } = metodoBiseccion();
    this.setState({ columns, data });
  };


  handlePuntoFijo = () => {
    const {columns, data} = metodoPuntoFijo();
    this.setState({ columns,data });
  };

  handleNewtonRaphson = () => {
    const {columns, data} = metodoNewtonRaphson();
    this.setState({ columns,data });
  };

  render() {
    return (
      <HomeLayout
        handleBiseccion={this.handleBiseccion}
        handlePuntoFijo={this.handlePuntoFijo}
        handleNewtonRaphson={this.handleNewtonRaphson}
        columns={this.state.columns}
        data={this.state.data}
      />
    );
  }
}

export default HomeContainer;
