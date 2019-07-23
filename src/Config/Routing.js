import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../pages/Home";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import ForgotPassPage from '../pages/ForgotPassPage';
import DeleteUser from '../pages/DeleteUser';

const Routes = ({getContacts, addContact, LoginNow, getLoggedIn}) => {
  return (
    <>
      <Route exact path="/" component={() => <Home getContacts={getContacts} getLoggedIn={getLoggedIn}/>} />
      <Route path="/auth" component={() => <LoginPage LoginNow={LoginNow}/>} />
      <Route path="/Reg" component={() => <RegisterPage addContact={addContact}/>} />
      <Route path="/forgotPass" component={() => <ForgotPassPage ForgotPassPage={ForgotPassPage}/>}/>
      <Route path="/delete" component={() => <DeleteUser DeleteUser={DeleteUser}/>}/>
    </>
  );
};
export default Routes;
