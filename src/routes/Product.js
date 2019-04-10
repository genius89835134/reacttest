import React, { Component } from 'react';
import Content from '../components/Content'
import Product_div1 from '../components/Product_div1'
import Product_div2 from '../components/Product_div2'
class Product extends Component {
  render() {
    return (
      <div className="Product">
      <Product_div1></Product_div1>
      <Product_div2></Product_div2>
      </div>
    )
  }
}

export default Product;