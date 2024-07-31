// src/components/Hero.js
import React from "react";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-cover bg-center  text-white">
      <div className="container mx-auto h-full flex flex-col justify-center items-center text-center py-10">
        <p className="pb-6 text-[23px] font-semibold linha phases uppercase">De todas as coisas boas que uma festa pode oferecer, a melhor é a boa companhia. <br /></p>
        <div className="shadow-md flex justify-center" >  
          <video controls muted autoPlay className="w-[80%] ">
            <source
              src="./EP.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <h1 className="text-[26px]  mt-10 linha">
            FAÇA PARTE DA FRATERNIDADE
          </h1>
          <p className="text-[#e6e6e6] text-[16px] mb-6">
            Não fazemos festas, conectamos pessoas.
          </p>
          <div className="flex flex-col justify-center items-center">
            <NavLink to="/cadastro">
              <button className="neon-button bg-white text-black block hover:bg-gray-500 hover:text-white transition font-semibold py-3 w-[200px] text-[14px] rounded-lg">
                RESGATE SEU CONVITE
              </button>
            </NavLink>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Hero;
