import NavBar from "@/packages/NavBar/NavBar";
import NavHeader from "@/packages/NavHeader/NavHeader";
import React from "react";

const Dapp = () => {
  return (
    <div className="app-container flex w-full h-[100vh]">
      <aside className="app-navigation">
        <NavBar />
      </aside>
      <div className="app-content w-full">
        <NavHeader location="Dapps" />
      </div>
    </div>
  );
};

export default Dapp;
