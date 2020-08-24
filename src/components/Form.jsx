import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div id="formScroll" className="form">
        <h2>REQUEST A FREE QUOTE</h2>
        <form>
          <input type="text" size="50" placeholder="Name" />
          <br />
          <input type="text" size="50" placeholder="Email" />
          <br />
          <input type="text" size="50" placeholder="Phone" />
          <br />
          <input
            type="text"
            size="50"
            placeholder="Tell us about your project"
          />
          <br />
          <input size="50" type="submit" />
          <br />
        </form>
      </div>
    );
  }
}

export default Form;
