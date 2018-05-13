import React, { Component } from "react";
import { IndexLink, Link } from "react-router";

class Header extends Component {
  constructor(){
    super();
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse(){
    const collapsed =!this.state.collapsed;
    this.setState({collapsed});
  }
  render(){
    const {collapsed } = this.state;
    const navClass = collapsed ? "collapse" : "";
    return(
      <div className="navbar navbar-default navbar-fixed-top navbar navbar-expand-xl">
        <div className="container">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">tenkrát na táboře</Link>
            <button className="navbar-toggler" type="button" onClick={this.toggleCollapse.bind(this)}>
              <span className="sr-only">Toggle Navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className={"navbar-collapse " + navClass} id="navbar-main">
            <ul className="nav navbar-nav">
              <li className="nav-item">
                <Link to="o-tabore" onClick={this.toggleCollapse.bind(this)} className="nav-link" activeClassName="active">o táboře</Link>
              </li>
              <li className="nav-item">
                <Link to="o-nas" onClick={this.toggleCollapse.bind(this)} className="nav-link" activeClassName="active">o nás</Link>
              </li>
              <li className="nav-item">
                <Link to="galerie" onClick={this.toggleCollapse.bind(this)} className="nav-link" activeClassName="active">galerie</Link>
              </li>
              <li className="nav-item">
                <IndexLink to="prihlaska" onClick={this.toggleCollapse.bind(this)} className="nav-link" activeClassName="active">přihláška</IndexLink>
              </li>
              <li className="nav-item">
                <Link to="kontakt" onClick={this.toggleCollapse.bind(this)} className="nav-link" activeClassName="active">kontakt</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;