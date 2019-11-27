import React, {Component} from 'react';
import Page from '../../utilities/Page';
import { StateContext } from '../../utilities/context';
export default class Home extends Component{
    static contextType = StateContext;
    render(){
      console.log(this.context);
      return (
          <Page>
            <h1>Simple Store Inventory V0.1</h1>
            <button onClick={()=>this.props.history.replace('/login')}>Iniciar Sesión</button>
            <button onClick={()=> this.props.history.replace('/product')}>Ir a Producto</button>
          </Page>
      );
    }
}
