import React from "react";
import Input from "../Input";
import Nav from "../Nav";
import Back from "../Back";
import Title from "../Title";
import Hr from "../Hr";
import ActionBtn from "../ActionBtn";
import SignInLink from "../Pages Link/SignInLink";

function Register() {
  return (
    <div className="">
      <Nav />
      <Back />
      <Title
        head="Register"
        para="Let's get you started! Register with your social account to begin"
      />
      <Input type="text" placeholder="Email address" />
      <Input type="password" placeholder="Password" eyeImg={true} />

      <ActionBtn buttonText="Register" />
      <Hr />
      <SignInLink condition="Already have an account?" link="Sign in" />
    </div>
  );
}

export default Register;
