import { properties } from "@/mocks/properties";
import { Property } from "@/types/properties";
import React from "react";
import PropertieCard from "./PropertieCard";

const PropertiesGrid = () => {
  return (
    <section className="px-[3rem] lg:px-[3rem] xl:px-[6rem] mt-10 h-[75vh] fit-content scroll-container overflow-y-scroll scrollbar-none">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-3 gap-4">
        {properties.map((propertie: Property, key: number) => (
          <PropertieCard propertie={propertie} key={key} />
        ))}
      </div>
    </section>
  );
};

export default PropertiesGrid;
