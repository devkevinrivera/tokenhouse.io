import { Property } from "@/types/properties";
import React from "react";

const PropertieCard = ({
  propertie,
  key,
}: {
  propertie: Property;
  key: number;
}) => {
  return (
    <div
      className=" rounded-lg pb-10 height: fit-content bg-[#f1f2f3]"
      key={key}
    >
      <div>
        <img
          className="rounded-tl-lg rounded-tr-lg mb-6"
          src="/home-1.png"
          alt=""
        />
        <div className="flex justify-between px-4 mb-3">
          <p className="text-[#17212e] text-lg	">{propertie.name}</p>
          <p className="text-[#17212e] text-xl	font-extrabold">
            {propertie.propertyPrice}$
          </p>
        </div>

        <div className="flex px-4 mb-4">
          <div className="mr-4 p-3 bg-[#e6e6e9] rounded-lg shadow-2xl cursor-pointer">
            <span className="text-[#17212e] text-xs">
              {propertie.tokenCode}
            </span>
          </div>
          <div className="p-3 bg-[#deffee] rounded-lg shadow-2xl cursor-pointer">
            <span className="text-[#17212e] text-xs">Financiado</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between px-4 mb-1">
            <p className="text-[#17212e] text-md">Período de inversion</p>
            <span className="text-[#17212e] text-md font-extrabold">
              {propertie.investmentPeriod}
            </span>
          </div>
          <div className="flex justify-between px-4 mb-1">
            <p className="text-[#17212e] text-md">
              Rentabilidad total estimada
            </p>
            <span className="text-[#17212e] text-md font-extrabold">
              {propertie.estimatedTotalYield}%
            </span>
          </div>
          <div className="flex justify-between px-4 mb-1">
            <p className="text-[#17212e] text-md">
              Rentabilidad anual alquiler
            </p>
            <span className="text-[#17212e] text-md font-extrabold">
              {propertie.annualRentalYield}%
            </span>
          </div>
          <div className="flex justify-between px-4 mb-1">
            <p className="text-[#17212e] text-md">Inicio renta</p>
            <span className="text-[#17212e] text-md font-extrabold">
              {propertie.rentalStartDate}
            </span>
          </div>
        </div>

        <div className="flex gap-2 px-4 mt-10">
          <button
            className="text-[#17212e] text-xs w-1/2 bg-[#17212e] rounded-lg text-white"
            onClick={() => console.log("Go to new propertie")}
          >
            VER MÁS
          </button>
          <button
            className="text-[#17212e] text-xs w-1/2 bg-[#fbc02d] py-4 rounded-lg"
            onClick={() => console.log("Go to new propertie")}
          >
            COMPRAR TOKENS
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertieCard;
