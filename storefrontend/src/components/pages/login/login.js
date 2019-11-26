import React, { Component } from 'react';
import Page from '../../utilities/Page';
import {Link} from 'react-router-dom';
export default class Home extends Component {
  render() {
    return (
      <Page>
        <h1>Iniciar Sesión</h1>
        <Link to="/">Ir a Home</Link>
      </Page>
    );
  }
}
