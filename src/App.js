import React, { Component } from 'react';
import './App.css';
// Routes
import Home from './routes/Home';
import Product from './routes/Product';
import Car from './routes/Car';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import News from './components/News';

import { BrowserRouter as Router, Route } from 'react-router-dom';

/**
  * 路由閘道
  * @param {array} routerProps render 預設傳的 props
  * @param {string} name 提供判斷載入的路由名稱
  * @param {array} payloadProps 想提取的資料
  */
class App extends Component {
  state = {
    products: [
      {
        id: 1, name: '幾何別針-狐狸', price: 469, material: '黃銅', made: '中國大陸', stock: 7,
        img: 'https://cdn01.pinkoi.com/product/kbqwB3Y4/0/2/800x0.jpg',
        summary: '從了解狐狸的摺紙開始，嘗試摺出各種的摺法之後，從不同的角度觀察，再簡化而設計出的圖像。'
      },
      {
        id: 2, name: 'Milk Coffee 牛奶咖啡味大豆蠟燭', material: '蠟', price: 799, made: '香港', stock: 4,
        img: 'https://cdn02.pinkoi.com/product/jtnnDPY7/0/1/800x0.jpg',
        summary: '咖啡，焦糖。 以100%美國製大豆蠟，配上可持續生產的木芯及不含鄰苯二甲酸酯的香薰油製成。'
      },
      {
        id: 3, name: 'MICO化學系滴濾式手沖咖啡壺套裝', material: '玻璃', price: 969, made: '中國大陸', stock: 10,
        img: 'https://cdn01.pinkoi.com/product/nZnBAzwL/0/3/800x0.jpg',
        summary: '一款全新簡單實用的手沖咖啡壺套裝，盡情展現您實驗室一樣專業的咖啡魔法。'
      },
    ],
    title: 'React',
  }
  renderRoute(routerProps, name = '', payloadProps = []) {
    let state = {};
    payloadProps.forEach(value => state[value] = this.state[value]);

    // 困難版本 Pure Function
    //const state = payloadProps.reduce((p, v) => { return { ...p, [v]: this.state[v] } }, {});

    //console.log(state);
    switch (name) {
      default:
      case '': return <Home {...routerProps} {...state} />;
      case 'product': return <Product {...routerProps} {...state} />;
    }
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Header></Header>
          <Menu></Menu>
          <Route path="/" exact render={props => this.renderRoute(props, '', ['products', 'title'])} />
          <Route path="/car" component={Car} />
          <Route path="/product/:id" render={props => this.renderRoute(props, 'product', ['products'])} />
          <Footer></Footer>
        </div>
      </Router>
    );
  }
}

export default App;
