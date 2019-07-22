import React from 'react'
import { addContact } from '../Config/Contacts';

const Output = (last, first, email, phone, pass, confirm, login) => {
    if (login === "register") {
      if (pass === confirm) {
        addContact(last, first, email, phone, pass);
       } else {
        alert("Passwords do not match");
      }
    }
    else {
      alert("Please Submit");
    }
  };

  export default Output;