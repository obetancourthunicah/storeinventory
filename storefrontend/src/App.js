import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import PrivateRoute from './components/utilities/PrivateRoute';

import Home from './components/pages/home/home.js';
import Login from './components/pages/login/login';

import Product from './components/pages/private/product/product';

 import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={
      auth:{
        logged:true
      }
    };
    this.changeCurrentPage = this.changeCurrentPage.bind(this);
  }
  changeCurrentPage(pageTo){
    this.setState({currentPage:pageTo});
  }
  render(){
    return (
      <Router>
        <section>
            <Route path="/" exact  component={Home}/>
            <Route path="/login" component={Login}/>
            <PrivateRoute path="/product" component={Product} auth={this.state.auth}/>
          </section>
      </Router>
    )
    /*
    switch(this.state.currentPage){
      case "home":
        return (<Home changePage={this.changeCurrentPage}/>)
        break;
      case "login":
        return (<Login changePage={this.changeCurrentPage}/>)
        break;
    }
    return (<Home />)
    */
  }
}

export default App;
