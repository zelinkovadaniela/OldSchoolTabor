require('./bootstrap');
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Layout from './components/Layout/Layout';
import Subscription from './components/Subscription';
import AboutCamp from './components/AboutCamp';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Homepage from './components/Homepage';
import Gallery from "./components/Gallery/Gallery";

render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout} >
      <IndexRoute component={Homepage} />
      <Route path="o-tabore" component={AboutCamp} />
      <Route path="o-nas" component={AboutUs} />
      <Route path="prihlaska" component={Subscription} />
      <Route path="kontakt" component={Contact} />
      <Route path="galerie" component={Gallery} />
    </Route>
  </Router>,
  document.getElementById('app'));