import React from "react";

function RegisterLink({ condition, link }) {
  return (
    <div className="">
      <p className="">
        {condition} <span className="">{link}</span>
      </p>
    </div>
  );
}

export default RegisterLink;
