import React from "react";
import emailjs from 'emailjs-com'

export default function Form() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_79x9b9l', 'template_n14srsh', e.target, 'user_YIptbOHIy9sETu4BiabOb')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  }


  return (
    <div id="formScroll" className='form'>
      <h2>REQUEST A FREE QUOTE</h2>
      {/* <form
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
      </form> */}

      <form className="contact-form" onSubmit={sendEmail}>
        <input type="text" placeholder='NAME' name='Name' />
        {/* <label>Name</label> */}
        <br />

        <input type='text' placeholder='EMAIL' name='Email' />
        {/* <label>Email</label> */}
        <br />

        <input type='text' placeholder='PHONE' name='Phone' />
        {/* <label>Phone</label> */}
        <br />

        <textarea type='text'
          placeholder='TELL US ABOUT YOUR PROJECT'
          name='Message' ></textarea>
        {/* <label>Message</label> */}
        <input type="submit" value="Send" />
      </form>
    </div>
  );

}


