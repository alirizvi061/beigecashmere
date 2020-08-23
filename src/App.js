
import "./App.css"
import React, { Component } from 'react'
import NavMenu from "./components/NavMenu"
import Home from "./components/Home"
export default class App extends Component {
  render() {
    return (
      <div>
        <Home />

        {/* <NavMenu /> */}
      </div>
    )
  }
}

