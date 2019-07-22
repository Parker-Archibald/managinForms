import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Register from "./pages/RegisterPage";
import Home from "./pages/Home";
import Nav from './Config/Nav'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Routes from "./Config/Routing";
import {getContacts, addContact, getLoggedIn} from './Config/Contacts'

function App() {
  return (
    <Router>
      <Nav/>
      <Routes
      getContacts={getContacts}
      getLoggedIn={getLoggedIn}
      />
    </Router>
  );
}

export default App;
