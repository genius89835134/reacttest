import React, { Component } from 'react';
class Product_div3 extends Component {
  render() {
    return (
      <div className="Product_div3" style={{ width: '400px' }}>
        <h3>運費與其他資訊</h3>
        <hr></hr>
        <table>
          <thead>
            <tr>
              <th rowspan="3" valign="top">國際運費</th>
              <th>從香港寄出</th>
            </tr>
            <tr>
              <td>寄往</td>
              <td>第一件運費</td>
              <td>第二件加收</td>
            </tr>
            <tr>
              <td>台灣</td>
              <td>NT$234</td>
              <td>NT$0</td>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    )
  }
}

export default Product_div3;