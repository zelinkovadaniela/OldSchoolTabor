import React, { Component } from 'react';

class AboutCamp extends Component {

  render() {
    return (
      <div className="wrapper">
        <div className="hero_img">
          <div className="container">
            <div className="heading_wrapper">
              <h1 className="heading">o táboře</h1>
              <a href="#whatToExpect"><p>co od tábora čekat?</p></a>
              <a href="#whatIncluded"><p>co je v ceně?</p></a>
              <a href="#whatExcluded"><p>co v ceně není?</p></a>
              <a href="#whenHowMuch"><p>fakta</p></a>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="main_contentWrapper">
            <div className="section_about">
                <div className="section_aboutItem odd" id="whatToExpect">
                  <h3 className="heading3">
                    co od tábora čekat:
                  </h3>
                  <ul className="section_aboutList">
                    <li>
                      <span>celotáborovou hru</span>
                    </li>
                    <li>
                      <span>spoustu aktivit - ne jenom na fyzičku, ale i na rozvoj mysli</span>
                    </li>
                    <li>
                      <span>odměny pro jednotlivce, ale i pro celej tým</span>
                    </li>
                    <li>
                      <span>na živou muziku</span>
                    </li>
                    <li>
                      <span>na výborné jídlo od kluků z Waipawa</span>
                    </li>
                  </ul>
                </div>
                <div className="section_aboutItem even" id="whatIncluded">
                  <h3 className="heading3">
                    co je v ceně:
                  </h3>
                  <ul className="section_aboutList">
                    <li>
                      <span>ubytování v chatkách (4 lůžkové)</span>
                    </li>
                    <li>
                      <span>strava 5-krát denně a pitný režim</span>
                    </li>
                    <li>
                      <span>veškerý program</span>
                    </li>
                    <li>
                      <span>v případě potřeby také zajištění dopravy z nádraží do tábora</span>
                    </li>
                  </ul>
                </div>
                <div className="section_aboutItem odd" id="whatExcluded">
                  <h3 className="heading3">
                    co v ceně není:
                  </h3>
                  <ul className="section_aboutList">
                    <li>
                      <span>pojištění - v případě zájmu, možnost domluvit</span>
                    </li>
                    <li>
                      <span>doprava</span>
                    </li>
                    <li>
                      <span>konzumace na baru</span>
                    </li>
                  </ul>
                </div>
                <div className="section_aboutItem even" id="whenHowMuch">
                  <h3 className="heading3">
                    fakta:
                  </h3>
                  <ul className="section_aboutList">
                    <li>
                      <span>termín: 4. - 9.září 2018</span>
                    </li>
                    <li>
                      <span>kdokoliv starší 25let</span>
                    </li>
                    <li>
                      <span>cena: 4900,- Kč/osobu/5nocí</span>
                    </li>
                  </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default AboutCamp;