import React from "react";

export const Header = () => {
  return (
    <div>
      <header className="px-5 py- flex justify-between h-[96px]">
        <img
          src="../src/assets/icons/logo.svg"
          className="w-[131px] h-[101px] cursor-pointer"
          alt="logo"
        />
        <img
          src="../src/assets/icons/menuIcon.svg"
          className="w-[57px] h-[85px] cursor-pointer"
          alt="menu"
        />
      </header>
    </div>
  );
};
