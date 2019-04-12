import React, { Component } from 'react';
class Home extends Component {
  constructor(props) {
    super(props);
    this.history = props.history;
  }

  renderProducts(p = {}) {
    return (
      <div key={`product-${p.id}`} width="150px"
        onClick={() => this.history.push(`./product/${p.id}`)}>
        <img src={p.img} alt={p.name} width="150" height="150"></img><br />
        <font>{p.name}</font><br />
        <font color="green">{`$NT${p.price}`}</font>
      </div>
    );
  }

  render() {
    return (
      <div className="Home" >
        <h3>編輯嚴選</h3>
        <div className="item_table">
          {this.props.products.map(p => this.renderProducts(p))}
        </div>
      </div>
    )
  }
}

export default Home;