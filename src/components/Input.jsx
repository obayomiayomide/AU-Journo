import React from "react";
import eye from "../assets/Show-icon.png";

function Input({ type, value, whenChanged, placeholder, eyeImg }) {
  return (
    <div className="border">
      <input
        type={type}
        value={value}
        onChange={whenChanged}
        placeholder={placeholder}
      />
      {eyeImg ? <img src={eye} alt="show password" /> : ""}
    </div>
  );
}

export default Input;
