import React from "react";
import AchieverLogo from "./AchieverLogo";
import NavLinks from "./Pages Link/NavLinks";

function Nav({ navlinks, signedIn }) {
  const between = navlinks || signedIn ? "justify-between" : "justify-start";
  return (
    <header
      className={`w-full bg-gradient-to-br from-[#e0e0e0] to-white px-[100px] py-[40px] flex ${between} shadow-[0_0_42px_-21px_rgba(0,0,0,0.5)]`}
    >
      <nav className={`w-full flex ${between} relative items-center`}>
        <AchieverLogo />
        {navlinks ? <NavLinks /> : ""}
      </nav>
    </header>
  );
}

export default Nav;
