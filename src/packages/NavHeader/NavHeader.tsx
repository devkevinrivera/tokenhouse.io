import React from "react";

const NavHeader = ({ location = "" }) => {
  return (
    <header className="flex bg-[#131a25] h-[10vh] items-center justify-between	">
      <h2 className="pl-10 text-xl font-bold">{location}</h2>
      <div className="flex gap-6 pr-10">
        <p className="bg-[#17212e] flex items-center  px-4 py-2 rounded-md cursor-pointer">
          <img src="/vp.svg" alt="" />{" "}
          <span className="ml-3 font-bold">100$</span>
        </p>
        <p className="bg-[#17212e] flex items-center px-4 py-2 rounded-md cursor-pointer">
          <img src="/usdt.svg" alt="" />{" "}
          <span className="ml-3 font-bold">100$</span>
        </p>
      </div>
    </header>
  );
};

export default NavHeader;
