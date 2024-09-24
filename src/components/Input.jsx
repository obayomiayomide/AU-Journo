import React from "react";
import eye from "../assets/Show-icon.png";

function Input({ type, value, whenChanged, placeholder, eyeImg }) {
  const between = eye ? "justify-between" : "justify-start";
  return (
    <div
      className={`w-[930px] h-[100px] my-0 mx-auto my-[20px] px-[35px] border flex gap-2 ${between} rounded-[30px] items-center`}
    >
      <input
        className="outline-none relative w-full font-lato font-normal text-[26px] leading-[31.2px] italics"
        type={type}
        value={value}
        onChange={whenChanged}
        placeholder={placeholder}
      />
      {eyeImg ? (
        <div className="w-30px] h-[24px] object-contain">
          <img src={eye} alt="show password" width={30} height={24} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Input;
