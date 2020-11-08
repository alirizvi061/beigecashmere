import React, { Component } from "react";
import Mailto from 'react-protected-mailto'


class Form extends Component {
  render() {
    return (
      <div id="formScroll" className='form'>
        <h2>REQUEST A FREE QUOTE</h2>
        {/* <Mailto
          email='info@beigecashmere.com'
          headers={
            { subject: 'Question from pricing' }
          } /> */}
        <form
          action='mailto:info@beigecashmere.com'
          method='post'
          name='EmailForm'
          encType='text/plain'
        >
          <input
            type='text'
            size='70'
            name='Subject'
            value='Quote Request'
            hidden
          />
          <input type='text' placeholder='NAME' name='Name' />
          <br />
          <input type='text' placeholder='EMAIL' name='Email' />
          <br />
          <input type='text' placeholder='PHONE' name='Phone' />
          <br />
          <textarea
            type='text'
            placeholder='TELL US ABOUT YOUR PROJECT'
            name='Project Information'>
          </textarea>
          <br />
          <input type='submit' value='EMAIL' />
          <br />
        </form>
      </div>
    );
  }
}

export default Form;
