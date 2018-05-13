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
                <Link to="tabor">o táboře</Link>
              </li>
              <li>
                <Link to="vedeni">o nás</Link>
              </li>
              <li>
                <Link to="galerie">galerie</Link>
              </li>
              <li>
                <IndexLink to="prihlaska">přihláška</IndexLink>
              </li>
              <li>
                <Link to="kontakt">kontakt</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer_iconsAuthor font_basic">Icons made by <a href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
      </div>
    );
  }
}