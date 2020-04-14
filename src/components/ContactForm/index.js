import React from "react";
import "./style.css"

function ContactForm() {
  return (
    <div>
      <form
        id="fs-frm"
        name="simple-contact-form"
        acceptCharset="utf-8"
        // action="https://formspree.io/--EMAILHERE--"
        method="post"
      >
        <fieldset id="fs-frm-inputs">
          <label htmlFor="full-name">Full Name</label>
          <input
            type="text"
            name="name"
            id="full-name"
            placeholder="First and Last please"
            required=""
          ></input>
          <label htmlFor="email-address">Email Address</label>
          <input
            type="email"
            name="_replyto"
            id="email-address"
            placeholder="email@email.com"
            required=""
          ></input>
          <label htmlFor="message">Message</label>
          <textarea
            rows="5"
            name="message"
            id="message"
            placeholder="Go ahead and write your message here, we will reach back to you as soon as we can."
            required=""
          ></textarea>
          <input
            type="hidden"
            name="_subject"
            id="email-subject"
            value="Contact Form Submission"
          ></input>
        </fieldset>
        <div>
          <input  className="contact-button" type="submit" value="Send Message"></input>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
