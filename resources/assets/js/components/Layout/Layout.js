import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router';
import Header from './Header';
import Footer from './Footer';

class Layout extends Component {
  render(){
    return (
      <div className="App">
        <Header />
        <div className="content">
          {this.props.children}
        </div>
        <Footer/>
      </div>
    )
  }
}
export default Layout;