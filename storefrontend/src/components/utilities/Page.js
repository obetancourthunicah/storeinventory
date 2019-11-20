import React from 'react';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';
import './Page.css'
const Page = (props)=>{
  return (
    <main>
      <MyHeader />
      <section className="content">
          {props.children}
      </section>
      <MyFooter />
    </main>
  );
}
export default  Page;
