import React from "react";
import Input from "../Input";
import Nav from "../Nav";
import Back from "../Back";
import Title from "../Title";
import Hr from "../Hr";
import ActionBtn from "../ActionBtn";
import PagesLink from "../Pages Link/PagesLink";

function Register() {
  return (
    <div className="text-center">
      <Nav />
      <Back />
      <div className="w-[1298px] centralize">
        <Title
          head="Register"
          para="Let's get you started! Register with your social account to begin"
        />
        <form action="">
          <Input type="text" placeholder="First name" />
          <Input type="text" placeholder="Last name" />
          <Input type="text" placeholder="Email address" />
          <Input type="password" placeholder="Password" eyeImg={true} />
          <button className="for-btn " type="submit">
            Register
          </button>
          <div>
            <PagesLink
              condition="By Clicking Register you agree to our"
              link="Terms and Condition"
            />
          </div>
        </form>
        <Hr />
        <PagesLink
          condition="Already have an account?"
          link="Sign in"
          toLink="/login"
        />
      </div>
    </div>
  );
}

export default Register;
