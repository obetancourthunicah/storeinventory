import React from 'react';

const MyHeader = ({title}) =>{
  return (
    <header>
      <h1 style={styles.h1}>{title}</h1>
    </header>
  );
}

const styles = {
  h1:{
    backgroundColor:"#333",
    color:"#FFF",
    textAlign:"center",
    fontSize:"21px",
    padding:"16px",
    margin:"0px",
  }
}

export default MyHeader;
