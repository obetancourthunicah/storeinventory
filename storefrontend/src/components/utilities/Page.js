import React from 'react';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';
import './Page.css'
const Page = ({ showHeader = true, headerTitle, showFooter=true, children})=>{
  let header = null;
  if(showHeader){
    header = (<MyHeader title={(headerTitle || "Simple Store Inventory")}/>);
  }
  let footer = null;
  if(showFooter){
    footer = (<MyFooter />);
  }
  return (
    <main>
      {header}
      <section className="content">
          {children}
      </section>
      {footer}
    </main>
  );
}
export default  Page;
