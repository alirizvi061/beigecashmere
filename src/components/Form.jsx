import React, {useState}from "react";
import emailjs from 'emailjs-com'

export default function Form() {



  const [messageSent, setMessageSent] = useState(false)
  const [formState, setFormState] = useState(false)

  function sendEmail(e) {
    console.log(e.target, "new new")
    e.preventDefault();
    if(e.target === null){
      setFormState(true)
    } else {
    emailjs.sendForm('service_13bnb3e', 'template_kh5fogk', e.target, 'user_9EF7CbKJH32e0KnAqQOLa')
      .then((result) => {
        setMessageSent(true)
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
    }
    
  }

  if(messageSent){
    setTimeout(() => {
      setMessageSent(false)
    }, [3000])
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

        <br />

        <input type='text' placeholder='EMAIL' name='Email' />

        <br />

        <input type='text' placeholder='PHONE' name='Phone' />

        <br />

        <textarea type='text'
          placeholder='TELL US ABOUT YOUR PROJECT'
          name='Message' ></textarea>

        <input type="submit" value="Send" />
      </form>
      {messageSent && <p>Your Message Has Been Sent!</p>}
      {formState && <p>Please Complete All Fields Before Submitting!</p>}

    </div>
  );

}


