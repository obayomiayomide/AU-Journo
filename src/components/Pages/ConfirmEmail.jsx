import React from "react";
import emailConfirmationImg from "../../assets/Email-Confirmation.png";
import Hr from "../Hr";
import PageLinks from "../Pages Link/PagesLink";

function ConfirmEmail() {
  return (
    <div className="">
      <h1>Confirm your Email address</h1>
      <p>A link has been sent to the provided email account.</p>
      <div>
        <img
          src={emailConfirmationImg}
          alt="confirm your email"
          width={642.5}
        />
      </div>

      <PageLinks condition="Wrong email address?" link="Go back to Register?" />
      <Hr />
      <PageLinks condition="Already have an account?" link="Sign in" />
    </div>
  );
}

export default ConfirmEmail;
