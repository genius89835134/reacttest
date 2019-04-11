import React, { Component } from 'react';
class Home extends Component {
  i = 0;
  renderProducts(p = {}) {

    console.log(this.props.products);
    return (
      <div width="150px">
        <img src={p.img} alt0={p.name} width="150"height="150"></img><br/>
        <font>{p.name}</font><br />
        <font color="green">{`$NT${p.price}`}</font>
      </div>
    );
  }
  render() {
    return (
      <div className="Home">
        <h3>編輯嚴選</h3>
        <div className="item_table">
          {this.props.products.map(p => this.renderProducts(p))}
        </div>
      </div>
    )
  }
}

export default Home;