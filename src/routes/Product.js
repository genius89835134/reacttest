import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';
class Product extends Component {
  constructor(props) {
    super(props);
    this.history = props.history;
  }

  state = {
    num: 1,
  }
  renderselect(stock) {
    const option = stock.map((option, index) => {
      if (index < 1) {
      } else if (index == 1) {
        return <option key={`stock-${index}`} value={index} selected="selected">{option}</option>
      } else {
        return <option key={`stock-${index}`} value={index}>{option}</option>
      }
    });
    return option;
  }

  car = (price,name) => {
    let iname = [];
    let iprice = [];
    let inum = [];
    if (localStorage.getItem("name") && localStorage.getItem("num") && localStorage.getItem("price")) {
      iname.push(localStorage.getItem("name"));
      inum.push(localStorage.getItem("num"));
      iprice.push(localStorage.getItem("price"));
    }
    iname.push(name);
    inum.push(this.state.num);
    iprice.push(price);
    localStorage.setItem("name", iname);
    localStorage.setItem("num", inum);
    localStorage.setItem("price", iprice);
  }
  render() {
    const id = this.props.match.params.id;
    //console.log(id);
    const p = this.props.products.find(p => p.id === Number(id));
    const stock = [];
    for (let i = 0; i <= p.stock; i++) {
      stock.push(i);
    }
    return (
      <div className="Product">
        <div className="P_div1">
          <div className="Product_div1" style={{ width: '400px' }}>
            <img src={p.img} alt={p.name} width='300' height="300" ></img>
          </div>
          <div className="Product_div2" style={{ width: '400px' }}>
            <h3>商品介紹</h3>
            <hr></hr>
            材料：{p.material}<br />
            尺寸：15 x 16 (mm)<br />
            包裝：獨立卡紙包裝
          </div>
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
        </div>
        <div className="P_div2">
          <div className="Product_div4" style={{ width: '700px', height: '290px' }}>
            <font color="black" size="6">{p.name}</font><br />
            <font color="#009697" size="6">$NT{p.price}</font><br />
            數量<br />
            <select onChange={(e) => this.state.num = (e.target.value)}>
              {this.renderselect(stock)}
            </select><br />
            <button onClick={() => this.car(p.price, p.name)}>放入購物車</button>
          </div>
          <hr></hr>
          <div className="Product_div5" style={{ width: '700px' }}>
            <h3>商品資訊</h3><br />
            <table>
              <thead>
                <tr>
                  <td>商品材質</td>
                  <td>{p.material}</td>
                </tr>
                <tr>
                  <td>商品產地</td>
                  <td>{p.made}</td>
                </tr>
                <tr>
                  <td>庫存</td>
                  <td>{p.stock}件</td>
                </tr><tr>
                  <td>商品摘要</td>
                  <td>{p.summary}</td>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default Product;