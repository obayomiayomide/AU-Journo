import React from "react";

function SignInOption({ condition, option }) {
  return (
    <div className="">
      <p className="">
        {condition} <span className="">{option}</span>
      </p>
    </div>
  );
}

export default SignInOption;
