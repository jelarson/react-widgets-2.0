import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Home from "./home";
import NavBar from "./navbar.js";
import Hashtag from './hashtag';
import LeastGreatest from './least-greatest';
import Spongebob from './spongebob';
import Squared from './squared';
import StringIncrement from './string-incrementor';
import StringReverse from './string-reverse';
import MilitaryTime from './military-time';

export default function App() {
  return (
    <div className="App">
      <Router>
        <div className='app-wrapper'>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/hashtag" component={Hashtag} />
            <Route exact path="/least-greatest" component={LeastGreatest} />
            <Route exact path="/spongebob" component={Spongebob} />
            <Route exact path="/squared" component={Squared} />
            <Route exact path="/string-increment" component={StringIncrement} />
            <Route exact path="/string-reverse" component={StringReverse} />
            <Route exact path="/military-time" component={MilitaryTime} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
