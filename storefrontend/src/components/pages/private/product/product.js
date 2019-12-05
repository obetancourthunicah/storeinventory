import React  from 'react';
import Page from '../../../utilities/Page';
import {useStateValue} from '../../../utilities/context';
import { loadProducts } from './products.actions';
import { Link } from 'react-router-dom';

import './products.css';

const ProdsItem = (item)=>{
  return (
    <span key={item._id}>
      {item.product}
      <Link to={`/productform/${item._id}`}> > </Link>
    </span>
  )
}

const ProdsItemV2 = (item, handler) => {
  return (
    <span key={item._id}>
      {item.product}
      <button onClick={(e)=>{e.preventDefault();e.stopPropagation();handler(item._id);}}> > </button>
    </span>
  )
}

export default (props)=>{
    const [{prods}, dispatch] = useStateValue();
    if(prods.products.length === 0){
      loadProducts(1,10,dispatch);
    }
    
    const clickHandler = (id)=>{
      dispatch({
        type:"SET_CURRENT_PROD",
        payload:{id:id}
      }
      );
      props.history.push("/productform");
    }

    const renderProds = prods.products.map((o)=>{
      //return ProdsItem(o);
      return ProdsItemV2(o, clickHandler);
    })
    return(<Page title="Products" showFooter={false}>
      <h1>Datos del Product</h1>
      <section className="List">
        {renderProds}
      </section>
    </Page>);
}
