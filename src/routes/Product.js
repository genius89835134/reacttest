import React, { Component } from 'react';
import Content from '../components/Content'
import Product_div1 from '../components/Product_div1'
import Product_div2 from '../components/Product_div2'
import Product_div3 from '../components/Product_div3'
import Product_div4 from '../components/Product_div4'
class Product extends Component {
  render() {
    return (
      <div className="Product">
        <div className="P_div1">
          <Product_div1></Product_div1>
          <Product_div3></Product_div3>
        </div>
        <div className="P_div2">
          <Product_div4></Product_div4>
        </div>
      </div>
    )
  }
}

export default Product;