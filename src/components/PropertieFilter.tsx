import { basicFilters, statusPropertiesOptions } from "@/constants/properties";
import { properties } from "@/mocks/properties";
import React from "react";
import Select from "react-select";

const PropertieFilter = () => {
  return (
    <section className="flex justify-between my-4">
      <p>
        Mostrando {properties.length} de {properties.length} inmuebles
      </p>
      <div className="flex gap-4">
        <input
          className="w-[20rem] px-4 py-2 rounded-md text-[#17212e]"
          placeholder="Buscar"
        />
        <Select placeholder="Mostrar todos" options={statusPropertiesOptions} />
        <Select placeholder="Fecha" options={basicFilters} />
      </div>
    </section>
  );
};

export default PropertieFilter;
