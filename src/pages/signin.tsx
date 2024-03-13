import Link from "next/link";
import React from "react";

const signin = () => {
  return (
    <main className="bg-signin flex justify-center items-center w-full h-[100vh]">
      <div className="bg-white px-[7rem] rounded-xl py-10 text-[#17212e] shadow-lg">
        <div className="text-center">
          <div className="flex justify-center items-center mb-5">
            <img className="w-[90px]" src="/logo.png" alt="Logo TokenHouse" />
          </div>
          <h2 className="text-2xl font-bold">Inicia Sesión</h2>
          <p className="font-light">
            ¿No tienes una cuenta? <span className="font-bold">Regístrate</span>
          </p>
        </div>
        <div className="flex flex-col py-10">
          <label className="font-bold">Email</label>
          <input
            type="email"
            className="mb-5 p-4 border-2 rounded-xl border-black"
          />
          <Link href="/dashboard/properties">
            <button className="w-full text-[#17212e] text-xs w-1/2 bg-[#fbc02d] py-4 rounded-lg">
              Iniciar sesión
            </button>
          </Link>
        </div>
        <div className="flex flex-col">
          <p className="mb-4">O continúa con tu cuenta de...</p>
          <button className="flex w-full items-center justify-center px-4 py-2 rounded-xl bg-gradient-to-r bg-gradient-to-r from-[#72A5FF] to-[#367BF2] hover:from-[#72A5FF] hover:to-[#72A5FF]">
            <img src="/google.svg" className="mr-4" />
            Google
          </button>
        </div>
      </div>
    </main>
  );
};

export default signin;
