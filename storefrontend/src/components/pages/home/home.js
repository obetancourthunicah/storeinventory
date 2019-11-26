import React, {Component} from 'react';
import Page from '../../utilities/Page';
export default class Home extends Component{
    render(){
      console.log(this.props);
      return (
          <Page>
            <h1>Simple Store Inventory V0.1</h1>
            <button onClick={()=>this.props.history.replace('/login')}>Iniciar Sesión</button>
          </Page>
      );
    }
}
