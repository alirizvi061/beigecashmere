import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import La from './components/La';
import Chicago from './components/Chicago';
import Nyc from './components/Nyc';
import Form from './components/Form';
import Footer from './components/Footer';
import NavMenu from './components/NavMenu';
import Form2 from './components/Form2';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          {<NavMenu />}
          <Route exact path="/" component={Home} />
          <Route exact path="/la" component={La} />
          <Route exact path="/chicago" component={Chicago} />
          <Route exact path="/newyork" component={Nyc} />
          <Form2 />
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}
