import React from "react";
import ContactJumbotron from "../components/ContactJumbotron";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <div>
      <div>
        <ContactJumbotron />
      </div>

      <div className="container">
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
