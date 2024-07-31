import React from "react";
import { NavLink } from "react-router-dom";
function Phases() {
  return (
    <section className=" flex flex-col  justify-center md:justify-end">
      <div className="backphases  flex flex-col items-center text-center pb-12 pt-12">
        <p className="text-white text-center phases"> 
          <h1 className="text-[28px]  mb-8 linha">SISTEMA DE INDICAÇÕES</h1>
          
          <p className="text-[#e6e6e6] text-[18px] mb-6">
          Desenvolvemos uma festa que seja totalmente restrita para pessoas como nós.
          Mas como fazer isso sem ser parcial?<br />
          Criamos um rigoroso sistema de indicações, onde só pode comprar o ingresso quem
          receber o código de convite.<br />
          <b>O sistema decide quem vai.</b><br />
          Quem receber o convite, tem direito a indicar somente um amigo, que poderá indicar mais um
          e assim por diante.
          </p>
           
        </p>
        <div className="indicacao flex flex-col items-center justify-center">
          <img
            src={"./Fluxograma.png"}
            alt="Indicação Desktop"
            className="fluxograma-desktop"
            width={700}
          />
          <img
            src={"./Fluxocel.png"}
            alt="Indicação Mobile"
            className="fluxograma-mobile"
            width={250}
          />
        </div>
        <div className="text-white text-center mb-2 phases">
          <p className="text-[26px] mt-5">RECEBEU UM CÓDIGO DE CONVITE?</p>
          <div className="text-[#e6e6e6] text-[18px] mb-6 mt-2">
            Aperte no botão abaixo e faça seu cadastro com o código recebido, <br />
            assim receberá outro código para indicar um amigo e o link de compra.
          </div>
        </div>

        <NavLink to="/cadastro">
              <button className="neon-button bg-white text-black block hover:bg-gray-500 hover:text-white transition font-semibold py-3 w-[200px] text-[14px] rounded-lg">
                RESGATE SEU CONVITE
              </button>
        </NavLink>

      </div>
    </section>
  );
}

export default Phases;
