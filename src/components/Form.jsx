import React, { useState } from "react";
import emailjs from 'emailjs-com'
import Mailto from "react-protected-mailto"
import ReactGA from "react-ga"

export default function Form() {

  const [messageSent, setMessageSent] = useState(false)


  function sendEmail(e) {
    ReactGA.initialize("UA-181230328-1")
    ReactGA.event({
      category: 'User',
      action: 'Sent message',
      label: "Requested Quote"
    });

    // console.log(e.target, "new new")
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

    // console.log(param)
    if (param === "email") {
      ReactGA.event({
        category: 'User',
        action: 'User Clicked Email Link',
        label: "Email Link Clicked"
      });
      // console.log("User Clicked On email")
    } else {
      ReactGA.event({
        category: 'User',
        action: 'User Clicked Phone Link',
        label: "Phone Link Clicked"
      });
      // console.log("User Clicked On Phone")
    }

  }
  if (messageSent) {
    setTimeout(() => {
      setMessageSent(false)
    }, [2000])
  }

  // function testClick() {
  //   ReactGA.initialize("UA-181230328-1")
  //   ReactGA.event({
  //     category: 'User',
  //     action: 'Sent message',
  //     label: "Requested Quote"
  //   });
  //   console.log("Test Button Clicked")
  // }


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

        {/* <button onClick={testClick}>Test</button> */}
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
        <h5>ADDRESS: 2411 WEST OLYMPIC BLVD. STE 5 LOS ANGELES, CA 90006 </h5>
      </div>


    </div>
  );

}


