import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div id="formScroll" className='form'>
        <h2>REQUEST A FREE QUOTE</h2>
        <form
          action='mailto:email@gmail.com'
          method='post'
          name='EmailForm'
          encType='text/plain'
        >
          <input
            type='text'
            size='70'
            name='subject'
            value='Quote Request'
            hidden
          />
          <input type='text' size='60' placeholder='NAME' name='name' />
          <br />
          <input type='text' size='60' placeholder='EMAIL' name='email' />
          <br />
          <input type='text' size='60' placeholder='PHONE' name='phone' />
          <br />
          <textarea
            type='text'
            placeholder='TELL US ABOUT YOUR PROJECT'
            name='comment'>
          </textarea>
          <br />
          <input size='55' type='submit' value='EMAIL' />
          <br />
        </form>
      </div>
    );
  }
}

export default Form;
