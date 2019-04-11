import React, { Component } from 'react';
import './Menu.css';
class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <ul style={{ paddingTop: 10 }}>
          <li>主打活動</li>
          <li>配件飾品</li>
          <li>居家生活</li>
          <li>包包提袋</li>
          <li>衣著良品</li>
          <li>文具卡片</li>
          <li>體驗活動</li>
          <li>所有分類</li>
          <li>探索更多</li>
        </ul>
      </div>
    )
  }
}

export default Menu;