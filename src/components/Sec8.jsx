import React from "react";
import { NavLink } from "react-router-dom";

function Sec8() {
  return (
    <div className="flex flex-col justify-center items-center py-10 px-10 text-white">
      <h1 className="text-[#FFFFFF] font-semibold media">APERTE NO BOTÃO ABAIXO E CADASTRE-SE</h1>
      <p className="font-semibold mt-3">
      </p>
      <NavLink to="/cadastro">
              <button className="neon-button bg-white text-black block hover:bg-gray-500 hover:text-white transition font-semibold py-3 w-[200px] text-[14px] rounded-lg">
                CADASTRO
              </button>
            </NavLink>
    </div>
  );
}

export default Sec8;
