import React, { useState } from "react";
import emailjs from 'emailjs-com'
import Mailto from "react-protected-mailto"

export default function Form() {

  const [messageSent, setMessageSent] = useState(false)


  function sendEmail(e) {
    console.log(e.target, "new new")
    e.preventDefault();

    emailjs.sendForm('service_13bnb3e', 'template_kh5fogk', e.target, 'user_9EF7CbKJH32e0KnAqQOLa', this)
      .then((result) => {
        setMessageSent(true)
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()

  }



  if (messageSent) {
    setTimeout(() => {
      setMessageSent(false)
    }, [2000])
  }

  return (
    <div id="formScroll" className="form-div">

      <div className='form'>
        <h2>REQUEST A FREE QUOTE</h2>
        <form className="contact-form" enctype="multipart/form-data" method="post" onSubmit={sendEmail}>
          <input type="text" placeholder='NAME' name='Name' />

          <br />

          <input type='text' placeholder='EMAIL' name='Email' />

          <br />

          <input type='text' placeholder='PHONE' name='Phone' />

          <br />

          <textarea type='text'
            placeholder='TELL US ABOUT YOUR PROJECT'
            name='Message' ></textarea>

          <input type="submit" value={messageSent ? "Thanks, We'll Reach Out Shortly!" : "Send"} />
        </form>

      </div>

      <div div className="companyInfo">
        <h5>
          CALL US: <Mailto tel='310-800-1203' />
        </h5>
        <h5>
          EMAIL US: <Mailto
            email='INFO@BEIGECASHMERE.COM'
            headers={
              { subject: 'Requesting a Quote' }
            } />
        </h5>
        <h5>24 HOURS / 7 DAYS A WEEK </h5>
        <h5>ADDRESS: 2411 WEST OLYMPIC BLVD. STE 5 LOS ANGELES, CA 90006 </h5>
      </div>


    </div>
  );

}


