import React from "react";
import Input from "../Input";
import Nav from "../Nav";
import Back from "../Back";
import Title from "../Title";
import Bottom from "../Bottom";

function Login() {
  return (
    <div>
      <Nav />
      <Back />
      <Title head="Log in" para="Sign in with your social account" />
      <Input type="text" placeholder="Email address" />
      <Input type="password" placeholder="Password" eyeImg={true} />
      <Bottom
        condition="Don't have an account?"
        option="Register"
        buttonText="Log in"
      ></Bottom>
    </div>
  );
}

export default Login;
