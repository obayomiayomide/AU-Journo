import React from "react";

function PageLinks({ condition, link }) {
  return (
    <div className="">
      <p className="">
        {condition} <span className="">{link}</span>
      </p>
    </div>
  );
}

export default PageLinks;
