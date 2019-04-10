import React, { Component } from 'react';
import Footer_div1 from './Footer-div1';
import Footer_div2 from './Footer-div2';
import Footer_div3 from './Footer-div3';
import Footer_div4 from './Footer-div4';
import Footer_div5 from './Footer-div5';
class About extends Component {
  render() {
    return (
      <div className="Footer">
        <Footer_div1></Footer_div1>
        <Footer_div2></Footer_div2>
        <Footer_div3></Footer_div3>
        <Footer_div4></Footer_div4>
        <Footer_div5></Footer_div5>
      </div>
    )
  }
}

export default About;