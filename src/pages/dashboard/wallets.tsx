import NavBar from "@/packages/NavBar/NavBar";
import React from "react";

const Wallets = () => {
  return (
    <div className="app-container flex w-full h-[100vh]">
      <aside className="app-navigation">
        <NavBar />
      </aside>
      <div className="app-content">CONTENT</div>
    </div>
  );
};

export default Wallets;
