import React from "react";
import { IndexLink, Link } from "react-router";

export default class Footer extends React.Component{

  render(){
    return(
      <div className="footer">
        <div className="container">
          <div className="footer_linksWrapper">
            <ul className="footer_links">
              <li>
                <IndexLink to="/">domů</IndexLink>
              </li>
              <li>
                <Link to="tabor">tábor</Link>
              </li>
              <li>
                <Link to="vedeni">vedení</Link>
              </li>
              <li>
                <IndexLink to="prihlaska">přihláška</IndexLink>
              </li>
              <li>
                <Link to="kontakt">kontakt</Link>
              </li>
              <li>
                <Link to="galerie">galerie</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}