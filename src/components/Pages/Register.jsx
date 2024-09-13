import React from "react";
import Input from "../Input";
import Nav from "../Nav";
import Back from "../Back";
import Title from "../Title";
import Bottom from "../Bottom";

function Register() {
  return (
    <div>
      <Nav />
      <Back />
      <Title
        head="Register"
        para="Let's get you started! Register with your social account to begin"
      />
      <Input type="text" placeholder="Email address" />
      <Input type="password" placeholder="Password" eyeImg={true} />
      <Bottom
        condition="Already have an account?"
        option="Sign in"
        buttonText="Log in"
      ></Bottom>
    </div>
  );
}

export default Register;
