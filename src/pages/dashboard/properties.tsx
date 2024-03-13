import PropertiesGrid from "@/components/PropertiesGrid";
import NavBar from "@/packages/NavBar/NavBar";
import NavHeader from "@/packages/NavHeader/NavHeader";
import React from "react";

const Properties = () => {
  return (
    <div className="app-container flex w-full h-[100vh]">
      <aside className="app-navigation">
        <NavBar />
      </aside>
      <div className="app-content w-full">
        <NavHeader location="Propiedades" />
        <PropertiesGrid />
        <div className="pt-2 w-full text-right pr-[4rem]">
          <p className="text-white text-xs">
            © 2024 TokenHouse with❤️from SPAIN
          </p>
        </div>
      </div>
    </div>
  );
};

export default Properties;
