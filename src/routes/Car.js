import React, { Component } from 'react';
class Car extends Component {
  run(list) {
    
    let iname = [];
    let iprice = [];
    let inum = [];
    iname.push(localStorage.getItem("name").split(","));
    iprice.push(localStorage.getItem("price").split(","));
    inum.push(localStorage.getItem("num").split(","));
    console.log(list);
    const option = list.map((option, index) => {
      for(let i=0;i<option;i++){
        return(
          <div>{iname[i]}<br/>{iprice[i]}<br/>{inum[i]}</div>
          )
      }
    });
    return option;
  }
  render() {
    const list = [];
    list.push(localStorage.getItem("name").split(",").length);
    return (
      <div className="Car">
        <div className="P_div1">
          <div>

          </div>
        </div>
        <div className="P_div2">

        </div>
        {this.run(list)}
      </div>
    )
  }
}

export default Car;