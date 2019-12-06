import React from 'react';
import Page from '../../../utilities/Page';
import {useStateValue} from '../../../utilities/context';


export default (props)=>{
  const [ {prods}, dispatch] = useStateValue();
  if(!prods.currentId && true){
      props.history.replace("/product");
  }else{
  const CurrenProd = prods.products.filter((o)=>{
    return o._id === prods.currentId;
  })[0];
  return (
    <Page>
      <h1>Mostrando Producto</h1>
      <span><b>SKU</b></span>
      <span>{CurrenProd.sku}</span>
      <span><b>Producto</b></span>
      <span>{CurrenProd.product}</span>
      <span><b>Inventario</b></span>
      <span>{CurrenProd.stock}</span>
    </Page>
  );
  }
}
