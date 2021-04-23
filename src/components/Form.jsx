import React, { useState, useEffect } from "react";
import emailjs from 'emailjs-com'
import Mailto from "react-protected-mailto"
import ReactGA from "react-ga"

export default function Form() {

  const [messageSent, setMessageSent] = useState(false)

  useEffect(() => {
    document.getElementById('thankYouModal').style.display = 'none'
  }, [])

  function sendEmail(e) {
    ReactGA.initialize("UA-181230328-1")
    ReactGA.event({
      category: 'User',
      action: 'Sent message',
      label: "Requested Quote"
    });

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

  function clickedContactInfo(param) {
    ReactGA.initialize("UA-181230328-1")

    if (param === "email") {
      ReactGA.event({
        category: 'User',
        action: 'User Clicked Email Link',
        label: "Email Link Clicked"
      });
    } else {
      ReactGA.event({
        category: 'User',
        action: 'User Clicked Phone Link',
        label: "Phone Link Clicked"
      });
    }

  }
  if (messageSent) {


  }

  function thankYouModalFunction() {
    setMessageSent(true)
    console.log(messageSent)
    if (messageSent !== true) {
      document.getElementById('thankYouModal').style.display = 'block'
    }

    setTimeout(() => {
      document.getElementById('thankYouModal').style.display = 'none'
      setMessageSent(false)
    }, [2000])

    console.log("clicking this now")
  }

  return (
    <div id="formScroll" className="form-div">

      <div id="thankYouModal" class="thankYouModalClass">
        <h1>Thank you, our team will be with you shortly!</h1>
      </div>

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

          <input type="submit" onClick={thankYouModalFunction} />
        </form>
        {/* <button type="submit" onClick={thankYouModalFunction}></button> TEST BUTTON*/}
      </div>

      <div div className="companyInfo">
        <h5 onClick={() => { clickedContactInfo('phone') }}>
          CALL US: <Mailto tel='310-800-1203' />
        </h5>
        <h5 onClick={() => { clickedContactInfo('email') }}>
          EMAIL US: <Mailto
            email='INFO@BEIGECASHMERE.COM'
            headers={
              { subject: 'Requesting a Quote' }
            } />
        </h5>
        <h5>24 HOURS / 7 DAYS A WEEK </h5>
        <h5>ADDRESS: 148 BLEECKER STREET #2G BROOKLYN, NY 11221</h5>
      </div>


    </div>
  );

}


