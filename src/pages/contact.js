import React from 'react';
import Link from 'gatsby-link';
import ReactContactForm from 'react-mail-form';
//email? phone? maybe a contact form too

const ContactPage = () => (
  <div>
    Sup
    <br />
    <ReactContactForm to="gloeband@gmail.com" />
  </div>
)

export default ContactPage;

