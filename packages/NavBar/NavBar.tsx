import { navigation_items } from "@/constants/navigation";
import { NavigationItem } from "@/types/common";
import React from "react";

const NavBar = () => {
  return (
    <section className="navbar w-53 h-[100vh]">
      <div className="flex justify-center mb-[4.5rem]">
        <img src="logo.png" className="w-[90px] h-[95px] mt-10" alt="" />
      </div>
      <div className="flex pl-4 py-2 pr-2 mb-[4.5rem] bg-[#17212e] mx-2 rounded-lg cursor-pointer">
        <div className="mr-2 w-[40px] flex justify-center items-center rounded-full bg-slate-500">
          KR
        </div>
        <div>
          <p className="text-xs">Kevin Rivera Ramirez</p>
          <span className="text-xs">Member App</span>
        </div>
      </div>
      <div className="pl-4">
        <nav>
          {navigation_items.map((item: NavigationItem, key: number) => (
            <div className="flex items-center mb-4">
              <img src={item.icon} alt={item.icon} className="mr-3" />
              <p className=" hover:text-[#fbc02d] cursor-pointer font-bold">
                {item.title}
              </p>
            </div>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default NavBar;
