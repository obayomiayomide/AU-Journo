import React from "react";
import Input from "../Input";
import Nav from "../Nav";
import Back from "../Back";
import Title from "../Title";
import Hr from "../Hr";
import ActionBtn from "../ActionBtn";
import PageLinks from "../Pages Link/PageLinks";

function Register() {
  return (
    <div className="">
      <Nav />
      <Back />
      <Title
        head="Register"
        para="Let's get you started! Register with your social account to begin"
      />
      <form>
        <Input type="text" placeholder="Email address" />
        <Input type="password" placeholder="Password" eyeImg={true} />
        <button type="submit">Register</button>
      </form>

      <Hr />
      <PageLinks condition="Already have an account?" link="Sign in" />
    </div>
  );
}

export default Register;
