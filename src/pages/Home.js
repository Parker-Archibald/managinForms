import React from "react";
import "../Styles/Style.css";
import "../App.css";

const Home = ({ getContacts, getLoggedIn }) => {
  const contacts = getContacts().map(contact => (
    <div>
      {contact.firstName} {contact.lastName}
    </div>
  ));

  const logIn = getLoggedIn().map(contact => (
    <div>
      {contact.firstName} {contact.lastName}
    </div>
  ));

  return (
    <div>
      <div id="cntList">
        Contact List:
        {contacts}
      </div>
      <div id="loglist">
        Logged In:
        {logIn}
      </div>
    </div>
  );
};
export default Home;
