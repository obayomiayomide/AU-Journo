import React from "react";
import emailConfirmationImg from "../../assets/Email-Confirmation.png";
import Hr from "../Hr";
import PageLinks from "../Pages Link/PagesLink";

function ConfirmEmail() {
  return (
    <div className="w-full text-center">
      <h1 className="font-poppins font-bold text-[64px] leading-[96px]">
        Confirm your Email address
      </h1>
      <p className="font-lato font-normal text-[28px] leading-[33.6px]">
        A link has been sent to the provided email address.
      </p>
      <div className="w-[775px] my-0 mx-auto object-contain">
        <img src={emailConfirmationImg} alt="confirm your email" width={770} />
      </div>

      <PageLinks condition="Wrong email address?" link="Go back to Register?" />
      <Hr />
      <PageLinks condition="Already have an account?" link="Sign in" />
    </div>
  );
}

export default ConfirmEmail;
