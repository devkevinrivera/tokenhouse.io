import { properties } from "@/mocks/properties";
import React from "react";

const PropertieFilter = () => {
  return (
    <section className="flex justify-between my-4">
      <p>
        Mostrando {properties.length} de {properties.length} inmuebles
      </p>
      <div className="flex gap-4">
        <input
          className="w-[20rem] px-4 py-2 rounded-3xl text-[#17212e]"
          placeholder="Buscar"
        />
        <select className="w-[12rem] px-4 py-2 rounded-3xl text-[#17212e]">
          <option>Mostrar todos</option>
          <option>Proximamente</option>
        </select>
        <select className="w-[12rem] px-4 py-2 rounded-3xl text-[#17212e]">
          <option>Mostrar todos</option>
          <option>Proximamente</option>
        </select>
      </div>
    </section>
  );
};

export default PropertieFilter;
