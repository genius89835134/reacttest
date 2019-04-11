import React, { Component } from 'react';
class Content1 extends Component {
  renderProducts(p = {}) {
    return (
      <div>
        <img src={p.img} alt={p.name} height="150"></img>
        <font>{p.name}</font><br />
        <font color="green">{`$NT{p.price}`}</font>
      </div>
    );
  }
  render() {
    return (
      <div className="Content1">
        <h3>編輯嚴選</h3>
        <div className="item_table">
          {this.props.products.map(p => this.renderProducts(p))}
        </div>
        <table>
          <thead>
            <tr>
              <td>
                <img src={require('../img/220x220 (1).jpg')} alt="Milk Coffee 牛奶咖啡味大豆蠟燭" height="150"></img>
              </td>
              <td>
                <img src={require('../img/220x220 (2).jpg')} alt="MICO化學系滴慮式手沖咖啡壺套裝" height="150"></img>
              </td>
              <td>
                <img src={require('../img/220x220 (3).jpg')} alt="便利貼-怪臉" height="150"></img>
              </td>
              <td>
                <img src={require('../img/220x220 (4).jpg')} alt="Tsnuo無漂染竹纖衛生巾-夜用型" height="150"></img>
              </td>
            </tr>
            <tr>
              <td>幾何別針-狐狸</td>
              <td>Milk Coffee 牛奶咖啡味大豆蠟燭</td>
              <td>MICO化學系滴慮式手沖咖啡壺套裝</td>
              <td>便利貼-怪臉</td>
              <td>Tsnuo無漂染竹纖衛生巾-夜用型</td>
            </tr>
            <tr>
              <td></td>
              <td><font color="green">NT$ 799</font></td>
              <td><font color="green">NT$ 969</font></td>
              <td><font color="green">NT$ 119</font></td>
              <td><font color="green">NT$ 219</font></td>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Content1;