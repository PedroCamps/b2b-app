import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png";

const Header = () => {
  const [drop, setDrop] = useState(false);
  const navigate = useNavigate(); // Hook para navegação

  return (
    <header className="bg-black text-white">
      <div className="container mx-auto px-5 md:px-32 flex flex-col items-center">
        {/* Logo centralizada e clicável */}
        <div className="mb-4 cursor-pointer" onClick={() => navigate("/")}>
          <img src={Logo} alt="logo" className="w-40 md:w-52" />
        </div>

        {/*
        <button
          className="md:hidden text-white mb-4"
          onClick={() => setDrop(!drop)}
        >
          {drop ? '✖' : '☰'}
        </button>*/}

        {/* Links de navegação */}
        <nav>
          <ul className={`text-[15px] flex flex-col md:flex-row gap-4 md:gap-9 items-center justify-center mb-5 ${drop ? 'block' : 'hidden'} md:flex`}>
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? "text-white" : "text-gray-400"
                }
              >
                B2B
              </NavLink>
            </li>
            
            <li>
              <NavLink
                to={"/cadastro"}
                className={({ isActive }) =>
                  isActive ? "text-white" : "text-gray-400"
                }
              >
                RESGASTE SEU CONVITE
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
