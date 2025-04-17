import React from "react";
import { useAuth } from "../../../context/AuthProvider";

const Profile = () => {
  const { singOut } = useAuth();

  return (
    <>
      <div className="space-y-4">
        <div className="mb-4">
          <h1 className="text-3xl font-bold">Mi Perfil</h1>
          <p className="text-gray-500">
            Administra tu información personal y preferencias de la aplicación
          </p>
        </div>

        <div className="w-full border border-gray-300 rounded-lg p-5">
          <h2 className="font-semibold text-xl">Foto de Perfil</h2>
          <span className="text-gray-500">
            Esta imagen se mostrará en tu perfil y en tus comentarios
          </span>

          <div className="flex ">
            <div className="w-22 h-22 rounded-full bg-gray-200 flex items-center justify-center mt-4 mr-4">
              {/* TODO: agregar la lógica para mostrar la imagen de perfil del usuario */}
            </div>

            <div className="flex flex-col justify-center space-y-2">
              <button className="border border-gray-300 py-1 px-2 rounded-lg hover:bg-gray-100">
                Cambiar Foto
              </button>
              <button className=" py-1 px-2 text-red-600 hover:bg-red-200 rounded-lg">
                Eliminar Foto
              </button>
            </div>
          </div>
        </div>

        <div className="w-full border border-gray-300 rounded-lg p-5">
          <h2 className="font-semibold text-xl">Información Personal</h2>
          <span className="text-gray-500">
            Actualiza tu información personal y de contacto
          </span>

          <form className="mt-4">
            <div className="grid grid-cols-2 space-x-4">
              <div>
                <label>Nombre</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded-lg w-full p-2 mt-2 mb-4"
                  placeholder="Tu Nombre"
                />
              </div>
              <div>
                <label>Apellido</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded-lg w-full p-2 mt-2 mb-4"
                  placeholder="Tu Apellido"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 space-x-4">
              <div>
                <label>Correo Electrónico</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded-lg w-full p-2 mt-2 mb-4"
                  placeholder="Tu Correo"
                />
              </div>
              <div>
                <label>Telefono</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded-lg w-full p-2 mt-2 mb-4"
                  placeholder="Tu Número"
                />
              </div>
            </div>
            <button className="bg-green-700 px-3 py-2 text-white rounded-lg hover:bg-green-600">
              Guardar Cambios
            </button>
          </form>
        </div>

        <div className="w-full border border-gray-300 rounded-lg p-5">
          <h2 className="font-semibold text-xl">Cambiar Contraseña</h2>
          <span className="text-gray-500">
            Esta imagen se mostrará en tu perfil y en tus comentarios
          </span>

          <form className="mt-6">
            <label>Contraseña Actual</label>
            <input
              type="text"
              className="border border-gray-300 rounded-lg w-full p-2 mt-2 mb-4"
            />

            <div className="mb-4">
              <label>Nueva Contraseña</label>
              <input
                type="text"
                className="border border-gray-300 rounded-lg w-full p-2 mt-2"
              />
              <span className="text-sm text-gray-400">
                La contraseña debe tener al menos 8 caracteres, incluyendo una
                letra mayúscula y un número.
              </span>
            </div>

            <label>Comfirmar Nueva Contraseña</label>
            <input
              type="text"
              className="border border-gray-300 rounded-lg w-full p-2 mt-2 mb-4"
            />

            <button className="bg-green-700 px-3 py-2 text-white rounded-lg hover:bg-green-600">
              Actualizar Contraseña
            </button>
          </form>
        </div>

        <div className="w-full border border-gray-300 rounded-lg p-5 flex flex-col">
          <h2 className="font-semibold text-xl">Sesión Activa</h2>
          <span className="text-gray-500">Gestiona y cierra tu sesión</span>
          <button
            className="border border-gray-200 px-3 py-2 w-full text-gray-900 rounded-lg hover:bg-gray-300 mt-4"
            onClick={singOut}
          >
            Cerrar Sesión
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
