import React, { Component } from 'react';
// import { Link, Redirect } from 'react-router-dom';
// 下面這個是什麼? 應該是你誤按什麼建議修正的東西
// import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';
class Product extends Component {
  constructor(props) {
    super(props);
    this.history = props.history;
    this.state = {
      num: 1,
    }
  }

  // 如果你都寫建構子 constructor, 就建議把 state 寫在上面
  // state = {
  //   num: 1,
  // }
  renderselect(stock) {
    return stock.map((st, index) => {
      // 在 map 裡面最後一定要 return 東西回去, 寫在 if else 的作用域不同,是不算的
      // if (index < 1) {
      //   // 這裡的意義就多餘了, 應該要思考如何省略掉這行
      // } else if (index == 1) {
      //   return <option key={`stock-${index}`} value={index} selected="selected">{option}</option>
      // } else {
      //   return <option key={`stock-${index}`} value={index}>{option}</option>
      // }

      // 學長重寫範例
      let option = null;
      if (index === 1) {
        // 預設值不要用 selected，改使用 defaultChecked 
        option = <option key={`stock-${index}`} value={index} defaultChecked>{st}</option>
      } else if (index > 1) {
        option = <option key={`stock-${index}`} value={index}>{st}</option>
      }
      // 就是這裡，最後一定要 return
      return option;
    });
    // 直接 return 就好了, 不用再額外命名變數
    // return options;
  }

  car = (price, name) => {
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

    // 下面 for loop 就不要用這種了，直接用 functional 寫法
    // const stock = p.stock.map(p);
    // for (let i = 0; i <= p.stock; i++) {
    //   stock.push(i);
    // }

    // [...Array(p.stock)] 產一個長度為 stock 的陣列
    // https://stackoverflow.com/questions/4852017/how-to-initialize-an-arrays-length-in-javascript
    const stock = [...Array(p.stock)].map((x, index) => index);


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
                  { /** 使用駝峰式，JSX 規定，不然會出現警告 */}
                  <th rowSpan="3" valign="top">國際運費</th>
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
            { /** 請乖乖使用 setState，否則 React 會警告你 */}
            { /** <select onChange={(e) => this.state.num = (e.target.value)}> */}
            <select onChange={(e) => this.setState({ num: e.target.value })}>
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