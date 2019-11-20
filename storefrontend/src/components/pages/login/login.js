import React, { Component } from 'react';
import Page from '../../utilities/Page';
export default class Home extends Component {
  render() {
    return (
      <Page>
        <h1>Iniciar Sesión</h1>
        <button onClick={()=>this.props.changePage("home")}>Inicio</button>
      </Page>
    );
  }
}
