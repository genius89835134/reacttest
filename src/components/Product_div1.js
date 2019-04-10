import React, { Component } from 'react';
class Product_div1 extends Component {
  render() {
    return (
      <div className="Product_div1" style={{ width: '400px' }}>
        <img src={require('../img/220x220.jpg')} alt="幾何狐狸" height="100%" ></img>
      </div>
    )
  }
}

export default Product_div1;