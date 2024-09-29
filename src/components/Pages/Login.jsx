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
      <div className="w-[1298px] centralize">
        <Title head="Log In" para="Sign in with your social account" />
        <form className="" action="">
          <Input type="text" placeholder="Email address" />
          <Input type="password" placeholder="Password" eyeImg={true} />
          <div className="w-[930px] relative centralize flex justify-between items-center">
            <div className=" relative flex gap-3 items-center">
              <img src={rememberIcon} alt="Remember me" width={26.5} />
              <p className="font-lato font-normal text-[26px] leading-[31.2px]">
                Remember me
              </p>
            </div>
            <PagesLink link="Forgot Password?" />
          </div>
          <button className="for-btn" type="submit">
            Login
          </button>
        </form>

        <Hr />
        <PagesLink
          condition="Don't have an account?"
          link="Register"
          toLink="/register"
        />
      </div>
    </div>
  );
}

export default Login;
