import React, {Component} from 'react';
import { Link } from "react-router";

class Homepage extends Component {

  render() {
    return (
      <div className="wrapper">
        <div className="hero_img">
          <div className="container">
            <div className="heading_wrapper">
              <h1 className="heading">tenkrát na táboře</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="main_contentWrapper">
            <div className="text-center homepage_contentWrapper">
              <h2>Vítejte na stránkách tábora pro dospělé!</h2>
              <ul className="homepage_upperContent">
                <li className="f-20">
                  <span className="font_lobster">datum konání: </span>
                  <em className="f-24">4. - 9.září 2018</em>
                </li>
                <li className="f-20">
                  <span className="font_lobster">místo konání: </span>
                  <em className="f-24">areál kempu v Cichořicích</em>
                </li>
                <li className="f-20">
                  <span className="font_lobster">podmínky účasti: </span>
                  <em className="f-24">25 let a více a chuť vrátit se do dětských let</em>
                </li>
              </ul>

              <div className="font_basic mt-5">
                <span>Jsme parta mladých 30tníků, kteří se nadchli pro nápad uspořádat tábor. Tábor pro dospělé. Pro dospělé, co
                  mají chuť se vrátit do dětských let a znova strávit pár dní mimo civilizaci s ostatníma nadšencama. Pobavit se,
                  zasoutěžit si, a na chvílu omládnout. Jestli vás tenhle nápad těší tolik jako nás, přihlásit se můžete <Link to="/prihlaska">zde</Link>.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Homepage;