import React, { useEffect } from "react";

const NavBar = () => {
  //Obtener el nombre del usuario desde el localStorage
  const name_user = localStorage.getItem("name")

  //TODO: Obtener todos los datos del usuario desde el backend
  // useEffect(() => {
  //   const getUser = async () => {
  //     console.log(name_user)
  //   }
  //   getUser()
  // }, []);

  return (
    <div className="flex flex-row bg-gray-50">
      <div className="mx-8 my-2">
        <h1 className="text-gray-600">Bienvenido,</h1>
        <p className="text-lg text-gray-800 font-semibold">{name_user}</p>
      </div>
      <header className="w-full  px-6 py-4 flex items-center justify-between">
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
    </div>
  );
};

export default NavBar;
