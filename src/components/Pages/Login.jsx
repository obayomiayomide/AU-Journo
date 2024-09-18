import React from "react";
import Input from "../Input";
import Nav from "../Nav";
import Back from "../Back";
import Title from "../Title";
import RegisterLink from "../Pages Link/RegisterLink";
import Hr from "../Hr";
import ActionBtn from "../ActionBtn";

function Login() {
  return (
    <div className="">
      <Nav />
      <Back />
      <Title head="Log in" para="Sign in with your social account" />
      <div className="">
        <p className="">Or</p>
        <Hr />
      </div>
      <Input type="text" placeholder="Email address" />
      <Input type="password" placeholder="Password" eyeImg={true} />
      <ActionBtn buttonText="Log in" />
      <Hr />
      <RegisterLink condition="Don't have an account?" link="Register" />
    </div>
  );
}

export default Login;
