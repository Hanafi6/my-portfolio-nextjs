import React from 'react';
import ContactPage from './ContactPage';

function Contact() {
  return (
    <div
      id='contact'
      className='absolute top-[80px] left-1/2 transform -translate-x-1/2 w-[100%] sm:w-[90%] md:w-[800px] mx-auto px-4 mt-3.5'
    >
      <ContactPage />
    </div>


  );
}

export default Contact;
