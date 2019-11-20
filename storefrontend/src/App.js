import React, {Component} from 'react';
import Home from './components/pages/home/home.js';
import Login from './components/pages/login/login';
 import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={
      currentPage:"home",
    };
    this.changeCurrentPage = this.changeCurrentPage.bind(this);
  }
  changeCurrentPage(pageTo){
    this.setState({currentPage:pageTo});
  }
  render(){
    switch(this.state.currentPage){
      case "home":
        return (<Home changePage={this.changeCurrentPage}/>)
        break;
      case "login":
        return (<Login changePage={this.changeCurrentPage}/>)
        break;
    }
    return (<Home />)
  }
}

export default App;
