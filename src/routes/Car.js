import React, { Component } from 'react';

class Car extends Component {
  // 這個方法名稱有點沒意義，建議換別的。
  run(list) {

    let iname = [];
    let iprice = [];
    let inum = [];
    iname.push(localStorage.getItem("name").split(","));
    iprice.push(localStorage.getItem("price").split(","));
    inum.push(localStorage.getItem("num").split(","));
    console.log(list);
    const option = list.map((option, index) => {
      for (let i = 0; i < option; i++) {
        // 這裡好像怪怪的, map 裡面又寫 for 又 return 好多次?
        return (
          <div>{iname[i]}<br />{iprice[i]}<br />{inum[i]}</div>
        )
      }
      // map 應該最後要 return 東西回去, 但是你這裡沒有 return 東西
      // 你上面的 return 照理說只作用在 for loop 裡面
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