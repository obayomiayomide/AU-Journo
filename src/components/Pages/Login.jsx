import React from "react";
import Input from "../Input";
import Nav from "../Nav";
import Back from "../Back";
import Title from "../Title";
import Hr from "../Hr";
import ActionBtn from "../ActionBtn";
import PageLinks from "../Pages Link/PageLinks";

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
      <form>
        <Input type="text" placeholder="Email address" />
        <Input type="password" placeholder="Password" eyeImg={true} />
        <button type="submit">Login</button>
      </form>

      <Hr />
      <PageLinks condition="Don't have an account?" link="Register" />
    </div>
  );
}

export default Login;
