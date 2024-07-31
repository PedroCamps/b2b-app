import React from "react";
import Logo from "../assets/fotter-logo.png";
import Log from "../assets/Logo.png";
import LogoInsta from "../assets/insta.png";

function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto text-center">
        <p className="mb-4 text-[10px]">Realização</p>
        <div className="mt-4 flex justify-center items-center">
          <img src={Log} alt="Logo" className="w-40 md:w-52"/>
          <a
            href="https://www.instagram.com/b2bfraternity"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white ml-8"
          >
            <img src={LogoInsta} alt="" />
          </a>
        </div> <p className="flex justify-center ">Desenvolvido por @_pe.campos</p>
      </div>
    </footer>
  );
}

export default Footer;
