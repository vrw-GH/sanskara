import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const EmailContactForm = () => {
  const form = useRef();
  const [sent, setSent] = useState('');
  const [btnTxt, setBtnTxt] = useState('Submit');

  const sendEmail = async (e) => {
    e.preventDefault();
    setBtnTxt('Sending...');

    const templateData = {
      name_first: form.current.name_first.value,
      name_last: form.current.name_last.value,
      email_address: form.current.email_address.value,
      contact_number: form.current.contact_number.value,
      reply_to: form.current.email_address.value
    };

    await emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SVC,
        process.env.REACT_APP_EMAILJS_TMP,
        templateData,
        process.env.REACT_APP_EMAILJS_KEY
      )
      .then(
        (result) => {
          setSent(JSON.stringify(result));
          // alert('Registration Successful!'); //* using button "status" !!
        },
        (error) => {
          console.log(error);
          setSent(JSON.stringify(error));
          alert('Registration NOT successful!\n- please try later -\n', sent);
        }
      );
    setBtnTxt('Sent');
  };

  return (
    <form ref={form} id="contact1" onSubmit={sendEmail}>
      <p>
        <input
          name="name_first"
          id="name_first"
          // label="name_first"
          placeholder="First Name"
          type="text"
          required={true}
          disabled={btnTxt === 'Submit' ? false : true}
        ></input>
      </p>
      <p>
        <input
          name="name_last"
          id="name_last"
          // label="name_last"
          placeholder="Last Name"
          type="text"
          disabled={btnTxt === 'Submit' ? false : true}
        ></input>
      </p>
      <p>
        <input
          name="email_address"
          id="email_address"
          // label="email_address"
          placeholder="Email Address"
          type="email"
          required={true}
          disabled={btnTxt === 'Submit' ? false : true}
        ></input>
      </p>
      <p>
        <input
          name="contact_number"
          id="contact_number"
          // label="contact_number"
          placeholder="Contact Number"
          type="text"
          required={true}
          disabled={btnTxt === 'Submit' ? false : true}
        ></input>
      </p>
      <div className="buttons_div">
        <button
          type="submit"
          className="buttons primary"
          disabled={btnTxt === 'Submit' ? false : true}
        >
          {btnTxt}
        </button>
        <button
          type="reset"
          className="buttons secondary"
          onClick={() => setBtnTxt('Submit')}
        >
          Reset
        </button>
      </div>
      {/* <i>{sent}</i> */}
    </form>
  );
};

export default EmailContactForm;
