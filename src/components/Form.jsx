import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div id="formScroll" className='form'>
        <h1>REQUEST A FREE QUOTE</h1>
        <form
          action='mailto:email@gmail.com'
          method='post'
          name='EmailForm'
          encType='text/plain'
        >
          <input
            type='text'
            size='50'
            name='subject'
            value='Quote Request'
            hidden
          />
          <input type='text' size='50' placeholder='Name' name='name' />
          <br />
          <input type='text' size='50' placeholder='Email' name='email' />
          <br />
          <input type='text' size='50' placeholder='Phone' name='phone' />
          <br />
          <input
            type='text'
            size='50'
            placeholder='Tell us about your project'
            name='comment'
          />
          <br />
          <input size='50' type='submit' value='Email'/>
          <br />
        </form>
      </div>
    );
  }
}

export default Form;
