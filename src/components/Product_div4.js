import React, { Component } from 'react';
class Product_div4 extends Component {
  render() {
    return (
      <div className="Product_div4" style={{ width: '400px' }}>
        <h2>幾何別針-狐狸</h2><br />
        <font color="green">NT$469</font><br/>
        數量<br/>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select><br/>
        <button>放入購物車</button>
      </div>
    )
  }
}

export default Product_div4;