import NavBar from "@/packages/NavBar/NavBar";
import NavHeader from "@/packages/NavHeader/NavHeader";
import React from "react";

const Marketplace = () => {
  return (
    <div className="app-container flex w-full h-[100vh]">
      <aside className="app-navigation">
        <NavBar />
      </aside>
      <div className="app-content w-full">
        <NavHeader location="Marketplace" />
      </div>
    </div>
  );
};

export default Marketplace;
