import { navigation_items } from "@/constants/navigation";
import { NavigationItem } from "@/types/common";
import Link from "next/link";
import React, { useState } from "react";

const NavBar = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <section className="navbar w-53 h-[100vh] relative">
      <div className="flex justify-center mb-[4.5rem]">
        <img
          src="/logo.png"
          onClick={() => console.log("clickk")}
          className={
            expanded ? "w-[90px] h-[95px] mt-10" : "w-[50px] h-[55px] mt-10"
          }
          alt=""
        />
      </div>
      <div className="flex pl-4 py-2 pr-2 mb-[2rem] bg-[#17212e] mx-2 rounded-lg cursor-pointer">
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
              className={
                expanded ? `flex items-center mb-4` : `flex justify-center mb-4`
              }
            >
              <img
                src={"/" + item.icon}
                alt={item.icon}
                className="mr-3 cursor-pointer"
              />
              {expanded && (
                <Link
                  className=" hover:text-[#fbc02d] cursor-pointer font-bold"
                  href={item.url}
                >
                  <p>{item.title}</p>
                </Link>
              )}
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
