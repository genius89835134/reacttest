import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Link to="/"><img src={require('../img/logo-v2.png')} alt="Pinkoi" height="50" ></img></Link>
        <input placeholder='乳液'></input>
        <button>搜尋</button>
        <button>登入/註冊</button>
        <img src={require('../img/shopping-cart.png')} alt="Shopping-cart" height="30"></img>
      </div>
    )
  }
}

export default Header;