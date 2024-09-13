import React, { Children } from "react";
import ActionBtn from "./ActionBtn";
import Hr from "./Hr";
import SignInOption from "./SignInOption";

function Bottom({ children, buttonText, condition, option }) {
  return (
    <div className="">
      {children}
      <ActionBtn buttonText={buttonText} />
      <Hr />
      <SignInOption condition={condition} option={option} />
    </div>
  );
}

export default Bottom;
