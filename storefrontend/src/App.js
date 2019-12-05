import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import PrivateRoute from './components/utilities/PrivateRoute';
import mainReducer from './store/store';
import { StateProvider } from './components/utilities/context';

import Home from './components/pages/home/home.js';
import Login from './components/pages/login/login';
import Signin from './components/pages/sigin/Signin';
import Notfound from './components/pages/Notfound/NotFound';

import Product from './components/pages/private/product/product';
import ProductForm from './components/pages/private/productform/productform';

 import './App.css';
import { configAuthAxios } from './components/utilities/MyAxios';


class App extends Component{
  constructor(){
    super();
    this.state=mainReducer();

    if(this.state.auth.jwt!=''){
      configAuthAxios(this.state.auth);
    }
  }


  render(){
    return (
      <StateProvider initialState={this.state} reducer={mainReducer}>
          <Router>
            <Switch>
              <Route path="/" exact  component={Home}/>
              <Route path="/login" component={Login}/>
              <Route path="/signin" component={Signin} />
              <PrivateRoute path="/product" component={Product}/>
              <PrivateRoute path="/productform" component={ProductForm} />
              <Route path="*" component={Notfound} />
            </Switch>
          </Router>
      </StateProvider>
    )
  }
}

export default App;
