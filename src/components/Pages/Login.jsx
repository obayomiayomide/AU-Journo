import React from "react";
import Input from "../Input";
import Nav from "../Nav";
import Back from "../Back";
import Title from "../Title";
import Hr from "../Hr";
import ActionBtn from "../ActionBtn";
import PagesLink from "../Pages Link/PagesLink";
import rememberIcon from "../../../src/assets/Remember-icon.png";

function Login() {
  return (
    <div className="text-center">
      <Nav />
      <Back />
      <div className="w-[1298px] my-0 mx-auto">
        <Title head="Log In" para="Sign in with your social account" />
        <form className="" action="">
          <Input type="text" placeholder="Email address" />
          <Input type="password" placeholder="Password" eyeImg={true} />
          <div className="w-[930px] relative my-0 mx-auto flex justify-between items-center">
            <div className=" relative flex gap-3 items-center">
              <img src={rememberIcon} alt="Remember me" width={26.5} />
              <p>Remember me</p>
            </div>
            <PagesLink link="Forgot Password?" />
          </div>
          <button type="submit">Login</button>
        </form>

        <Hr />
        <PagesLink condition="Don't have an account?" link="Register" />
      </div>
    </div>
  );
}

export default Login;
