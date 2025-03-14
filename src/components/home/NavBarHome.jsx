import React, { useState } from "react";
import { Link } from "react-router";

const NavBarHome = () => {
  //Activa y desactiva el menu
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <nav className="bg-gray-100 w-full flex justify-between items-center px-6 py-4 relative">
        <h1 className="font-bold text-2xl">Moneta flow</h1>
        <button
          onClick={toggleMenu}
          className="block md:hidden text-gray-800 text-3xl focus:outline-none"
        >
          <span className="material-symbols-rounded ml-2">menu</span>
        </button>
        <div
          className={`md:flex md:space-x-4 ${
            menuOpen ? "block" : "hidden"
          } absolute md:static top-16 right-6 md:top-0 bg-gray-100 md:bg-transparent rounded-lg p-4 md:p-0 shadow-lg md:shadow-none`}
        >
          <Link
            to="/auth/signin"
            className="text-gray-800 font-semibold py-2 px-4 block md:inline-block rounded-md hover:bg-gray-200 transition-colors duration-300"
          >
            Iniciar Sesión
          </Link>
          <Link
            to="/auth/signup"
            className="bg-gray-900 text-white font-semibold py-2 px-4 block md:inline-block rounded-md hover:bg-gray-700 transition-transform duration-300 transform hover:scale-105"
          >
            Crear una cuenta
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavBarHome;
