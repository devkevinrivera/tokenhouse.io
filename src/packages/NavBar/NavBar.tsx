import { navigation_items } from "@/constants/navigation";
import { NavigationItem } from "@/types/common";
import Link from "next/link";
import React, { useState } from "react";

const NavBar = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <section className="navbar w-55 h-[100vh] relative">
      <div className="flex justify-center mb-[4.5rem]">
        <img
          src="/logo.png"
          className={
            expanded ? "w-[90px] h-[95px] mt-10" : "w-[50px] h-[55px] mt-10"
          }
          alt="Logo TokenHouse"
        />
      </div>
      <div
        className={`flex pl-4 py-2 pr-2 mb-[2rem] bg-[#17212e] mx-2 rounded-lg cursor-pointer ${
          !expanded && "h-[3.5rem]"
        }`}
      >
        <div className="mr-2 w-[40px] flex justify-center items-center rounded-full bg-slate-500">
          KR
        </div>
        {expanded && (
          <div>
            <p className="text-xs">Kevin Rivera Ramirez</p>
            <span className="text-xs">Member App</span>
          </div>
        )}
      </div>
      <div className="pl-4">
        <nav>
          {navigation_items.map((item: NavigationItem, key: number) => (
            <div
              key={key}
              className={
                expanded ? `flex items-center mb-4` : `flex justify-center mb-4`
              }
            >
              <Link
                className=" hover:text-[#fbc02d] cursor-pointer font-bold flex"
                href={item.url}
              >
                <img
                  alt={item.title}
                  src={"/" + item.icon}
                  className="mr-3 cursor-pointer"
                />
                {expanded && <p>{item.title}</p>}
              </Link>
            </div>
          ))}
        </nav>
      </div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="cursor-pointer absolute top-[100px] right-[-20px] w-10 h-10 bg-gray-300 text-black font-bold rounded-full flex items-center justify-center"
      >
        {!expanded ? ">" : "<"}
      </button>
    </section>
  );
};

export default NavBar;
