import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import La from './components/La';
import Chicago from './components/Chicago';
import Nyc from './components/Nyc';
import Projects from './components/Projects';
import Form from './components/Form';
import Footer from './components/Footer';
import NavMenu from './components/NavMenu';
import Photography from './components/Photography';
import Careers from './components/Careers';
import ReactGA from "react-ga"
import RouteChangeTracker from "./components/RouteChangeTracker"


// function initializeAnalytics(){
//   ReactGA.initialize("UA-181230328-1")
//   ReactGA.pageview('/HomePage')
// }

export default class App extends Component {

  render() {
    // initializeAnalytics()
    return (
      <div>
        <BrowserRouter>
        <RouteChangeTracker />
        {<NavMenu />}
          <Route exact path="/" component={Home} />
          <Route exact path="/la" component={La} />
          <Route exact path="/chicago" component={Chicago} />
          <Route exact path="/newyork" component={Nyc} />
          <Route exact path="/videography" component={Projects} />
          <Route exact path="/photography" component={Photography} />
          <Route exact path="/careers" component={Careers} />
          <Form />
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}
