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
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header></Header>
          <Menu></Menu>
          <Route path="/" exact component={Home} />
          <Route path="/Car" component={Car} />
          <Route path="/Product" component={Product} />
          <Footer></Footer>
        </div>
      </Router>
    );
  }
}

export default App;
