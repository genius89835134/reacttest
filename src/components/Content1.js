import React, { Component } from 'react';
class Content1 extends Component {
  render() {
    return (
      <div className="Content1">
        <h3>編輯嚴選</h3>
        <div>
          <img src={require('../img/220x220.jpg')} alt="幾何狐狸" height="150"></img>
          幾何別針-狐狸<br />
          <font color="green">NT$ 469</font>
        </div>
        <div>
          <img src={require('../img/220x220 (1).jpg')} alt="Milk Coffee 牛奶咖啡味大豆蠟燭" height="150"></img>
          Milk Coffee 牛奶咖啡味大豆蠟燭<br />
          <font color="green">NT$ 799</font>
        </div>
        <div>
          <img src={require('../img/220x220 (2).jpg')} alt="MICO化學系滴慮式手沖咖啡壺套裝" height="150"></img>
          MICO化學系滴慮式手沖咖啡壺套裝<br />
          <font color="green">NT$ 969</font>
        </div>
        <div>
          <img src={require('../img/220x220 (3).jpg')} alt="便利貼-怪臉" height="150"></img>
          便利貼-怪臉<br />
          <font color="green">NT$ 119</font>
        </div>
        <div>
          <img src={require('../img/220x220 (4).jpg')} alt="Tsnuo無漂染竹纖衛生巾-夜用型" height="150"></img>
          Tsnuo無漂染竹纖衛生巾-夜用型<br />
          <font color="green">NT$ 219</font>
        </div>
      </div>
    )
  }
}

export default Content1;