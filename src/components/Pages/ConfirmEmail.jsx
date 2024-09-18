import React from "react";
import emailConfirmationImg from "../../assets/Email-Confirmation.png";
import Hr from "../Hr";
import SignInLink from "../Pages Link/SignInLink";
import RegisterLink from "../Pages Link/RegisterLink";

function ConfirmEmail() {
  return (
    <div className="">
      <h1>Confirm your Email address</h1>
      <p>A link has been sent to the provided email account.</p>
      <img src={emailConfirmationImg} alt="confirm your email" />
      <RegisterLink
        condition="Wrong email address?"
        link="Go back to Register?"
      />
      <Hr />
      <SignInLink condition="Already have an account?" link="Sign in" />
    </div>
  );
}

export default ConfirmEmail;
