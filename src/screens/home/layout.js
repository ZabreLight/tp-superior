import React, { Component } from 'react';
import ReactTable from "react-table";

import logo from './assets/logo.svg';
import { columns } from './constants';

import 'react-table/react-table.css'
import './styles.css';

function HomeLayout({handleBiseccion, handlePuntoFijo, handleNewtonRaphson, data}){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">TP MATEMATICA SUPERIOR</h1>
        </header>
        <div className="main-buttons">
          <button className="my-button" onClick={handleBiseccion}>BISECCION</button>
          <button className="my-button" onClick={handlePuntoFijo}>PUNTO FIJO</button>
          <button className="my-button" onClick={handleNewtonRaphson}>NEWTON RAPHSON</button>
        </div>
        <ReactTable data={data} columns={columns} defaultPageSize={10} />
      </div>
    );
}

export default HomeLayout;
