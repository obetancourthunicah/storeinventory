import React from 'react';
import { useStateValue } from '../utilities/context';
import { useRouteMatch } from "react-router";

import { Link } from 'react-router-dom';
import './MyFooter.css';
export default () => {
  const [{auth}, dispatch] = useStateValue();
  const { url } = useRouteMatch();
  console.log(url );
  if(auth.logged){
    return (
      <footer>
        <nav>
          <ul>
            <li><Link to="/product" className={(url === "/product") ? "active" : ""}>Productos</Link></li>
            <li><Link to="/location" className={(url === "/location") ? "active" : ""}>Localidades</Link></li>
            <li><Link to="/stats" className={(url === "/stats") ? "active" : ""}>Estadística</Link></li>
          </ul>
        </nav>
      </footer>);
  }else{
    return (
    <footer>
      <nav>
        <ul>
            <li><Link to="/login" className={(url === "/login") ? "active" : ""}>Login</Link></li>
            <li><Link to="/signin" className={(url === "/signin") ? "active" : ""}>Sign In</Link></li>
        </ul>
      </nav>
    </footer>);
  }
}
