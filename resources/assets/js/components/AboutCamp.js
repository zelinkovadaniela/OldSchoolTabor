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
              <a href="#whatMore"><p>na co se ještě těšit?</p></a>
              <a href="#where"><p>kde to bude?</p></a>
              <a href="#whatIncluded"><p>co je v ceně?</p></a>
              <a href="#whatExcluded"><p>co v ceně není?</p></a>
              <a href="#whenHowMuch"><p>kdy, kdo a za kolik?</p></a>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="main_contentWrapper">
            <h2 className="heading2">náš tábor</h2>
            <p className="section_aboutPerex">
              Tábor organizuje parta mladých zapálených lidí a všichni si moc dobře pamatují mladá léta strávená na táborech.
              Tam sme všichni zapomněli na starosti všedních dní. Mohli jsme se přenést do jiných dob,
              stát se někým jiným, na pár dní. V neposlední řad sme spoznali spoustu nových kamarádů a zažili
              nespočet skvělých chvil. A tak proč se tam na chvílu nevrátit zpět...
            </p>
            <div className="section_about">

                <div className="section_aboutItem" id="whatToExpect">
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
                      <button className="btn">celý popis</button>
                    </li>
                  </ul>
                </div>
                <div className="section_aboutItem" id="whatMore">
                  <h3 className="heading3">
                    na co se ještě těšit:
                  </h3>
                  <ul className="section_aboutList">
                    <li>
                      <span>na živou muziku</span>
                    </li>
                    <li>
                      <span>na výborné jídlo od kluků z Waipawa</span>
                    </li>
                    <li>
                      <span>...na návrat do dětských let</span>
                    </li>
                    <li>
                      <button className="btn">celý popis</button>
                    </li>
                  </ul>
                </div>
                <div className="section_aboutItem" id="where">
                  <h3 className="heading3">
                    kde to bude:
                  </h3>
                  <ul className="section_aboutList">
                    <li>
                      <span>Středisko Naděje se nachází v krásné přírodě CHKO Ždárské vrchy</span>
                    </li>
                    <li>
                      <span>rybník Chochol je 10 minut chůze</span>
                    </li>
                    <li>
                      <span>v areálu je fotbalové a volejbalové hřiště, ohniště, ping-pong a stolní fotbálek.</span>
                    </li>
                    <li>
                      <button className="btn">celý popis</button>
                    </li>
                  </ul>
                </div>
                <div className="section_aboutItem" id="whatIncluded">
                  <h3 className="heading3">
                    co je v ceně:
                  </h3>
                  <ul className="section_aboutList">
                    <li>
                      <span>ubytování v chatkách (4, 5 lůžkové)</span>
                    </li>
                    <li>
                      <span>strava 5-krát denně a pitný režim</span>
                    </li>
                    <li>
                      <span>veškerý program</span>
                    </li>
                    <li>
                      <button className="btn">celý popis</button>
                    </li>
                  </ul>
                </div>
                <div className="section_aboutItem" id="whatExcluded">
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
                    <li>
                      <button className="btn">celý popis</button>
                    </li>
                  </ul>
                </div>
                <div className="section_aboutItem" id="whenHowMuch">
                  <h3 className="heading3">
                    kdy, kdo a za kolik:
                  </h3>
                  <ul className="section_aboutList">
                    <li>
                      <span>termín: 11. - 16.září 2018</span>
                    </li>
                    <li>
                      <span>kdokoliv starší 25let</span>
                    </li>
                    <li>
                      <span>cena: 4900,- Kč/osobu/5nocí</span>
                    </li>
                    <li>
                      <button className="btn">celý popis</button>
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