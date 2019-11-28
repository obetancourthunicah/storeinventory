import React, {Component} from 'react';
import Page from '../../../utilities/Page';

export default class Product extends Component {
  render(){
    return(<Page title="Products" showFooter={false}>
      <section>
      <h1>Datos del Product</h1>
      </section>
    </Page>)
  }

}
