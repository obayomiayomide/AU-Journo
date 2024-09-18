import React from "react";

function SignInLink({ condition, link }) {
  return (
    <div className="">
      <p className="">
        {condition} <span className="">{link}</span>
      </p>
    </div>
  );
}

export default SignInLink;
