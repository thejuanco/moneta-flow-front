import React from "react";

const NavBar = () => {
  return (
    <>
      <header className="w-full bg-gray-50 px-6 py-4 flex items-center justify-between">
        <input
          type="text"
          placeholder="Buscar transacciones..."
          className="w-1/3 px-4 py-2 rounded-md border text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <div className="flex items-center gap-4">
          {/* <div className="text-sm font-medium text-gray-700">Marzo 2025</div>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">
            Descargar
          </button> */}

          {/* Icono de notificación */}
          {/* <button className="text-gray-500 hover:text-gray-700">
          <Bell className="w-5 h-5" />
        </button> */}

          {/* Avatar de usuario
        <button className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
          <UserCircle2 className="w-7 h-7 text-gray-600" />
        </button> */}
        </div>
      </header>
    </>
  );
};

export default NavBar;
