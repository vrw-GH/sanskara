import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const EmailContactForm = () => {
  const form = useRef();
  const [sent, setSent] = useState('');

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs
      .sendForm(
        'service_pnqx0gj',
        'template_du62frx',
        form.current,
        '2sW_ZdBKWAIh3RaRA'
      )
      .then(
        (result) => {
          console.log(result);
          setSent(result);
        },
        (error) => {
          console.log(error);
          setSent(JSON.stringify(error));
          alert(sent);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <p>
        <input
          name="name-first"
          label="name-first"
          placeholder="First Name"
          type="text"
        ></input>
      </p>
      <p>
        <input
          name="name-last"
          label="name-last"
          placeholder="Last Name"
          type="text"
        ></input>
      </p>
      <p>
        <input
          name="email-address"
          label="email-address"
          placeholder="Email Address"
          type="email"
        ></input>
      </p>
      <p>
        <input
          name="contact-number"
          label="contact-number"
          placeholder="Contact Number"
          type="text"
        ></input>
      </p>
      <button className="buttons secondary">Reset</button>
      <button type="submit" className="buttons primary">
        Submit
      </button>
      <p>{sent}</p>
    </form>
  );
};

export default EmailContactForm;
