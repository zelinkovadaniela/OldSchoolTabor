import React, { Component } from 'react';

class Contact extends Component {

  render() {
    return (
      <div className="wrapper">
        <div className="hero_img">
          <div className="container">
            <div className="heading_wrapper">
              <h1 className="heading">kontakt</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="main_contentWrapper">
            <ul>
              <li><h2>Daniela Zelinková</h2></li>
              <li><h3>provozovatel</h3></li>
              <li><span><a href="mailto:danka@tenkratnatabore.cz?bcc=radim@tenkratnatabore.cz">danka@tenkratnatabore.cz</a></span></li>
              <li><span><a href="tel:+420774183924">+420 774 183 924</a></span></li>
              <li><span>IČ: 05678251</span></li>
              <li><span>28.pluku 23</span></li>
              <li><span>10100 Praha 10</span></li>
            </ul>
            <ul>
              <li><h2>Radim Stejskal</h2></li>
              <li><h3>hlavní vedoucí</h3></li>
              <li><span><a href="mailto:radim@tenkratnatabore.cz?bcc=danka@tenkratnatabore.cz">radim@tenkratnatabore.cz</a></span></li>
              <li><span><a href="tel:+420776188931">+420 776 188 931</a></span></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default Contact;