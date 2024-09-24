import React from "react";

function PagesLink({ condition, link }) {
  return (
    <div className="">
      <p className="">
        {condition} <span className="text-[#2E7B3F]">{link}</span>
      </p>
    </div>
  );
}

export default PagesLink;
