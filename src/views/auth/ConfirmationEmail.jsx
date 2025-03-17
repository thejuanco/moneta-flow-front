import React from "react";
import { Link } from "react-router";

const ConfirmationEmail = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center pt-20">
        <Link
          to="/"
          className="absolute left-8 top-8 flex items-center gap-2 text-lg font-semibold text-primary md:left-12 md:top-12"
        >
          <span>Moneta-Flow</span>
        </Link>
        <div className="w-full max-w-md border border-gray-100 p-6 rounded-xl shadow">
          <h1 className="text-black text-center font-bold text-2xl pt-8">
            Verifica tu correo electronico
          </h1>
          <p className="text-gray-500 text-center mx-8 mt-2">
            Hemos enviado un enlace de verificación a tu correo electrónico
          </p>
          <div className="border border-gray-200 p-4 rounded-lg mt-8">
            <p className="text-gray-600 text-center">
              Hemos enviado un correo a:
            </p>
            <p className=""></p>
          </div>
          <div className="space-y-2 mt-2 text-center">
            <p className="text-sm text-gray-500">
              Por favor, revisa tu bandeja de entrada y haz clic en el enlace de
              verificación para activar tu cuenta.
            </p>
            <p className="text-sm text-gray-500">
              Si no encuentras el correo, revisa tu carpeta de spam o correo no
              deseado.
            </p>
          </div>
          <button className="border border-gray-200 p-2 rounded-lg mt-8 w-full font-semibold hover:bg-gray-100 hover:cursor-pointer">
            Reenviar correo de verificación
          </button>
          <div className="text-center mt-4">
            ¿Ya verificaste tu correo?{" "}
            <Link to="/auth/signin" className="text-green-600 hover:underline">
              Iniciar sesión
            </Link>
          </div>
          <div className="text-center text-sm text-gray-500 my-2">
            ¿Necesitas ayuda?{" "}
            <Link to="/contact" className="text-green-500 hover:underline">
              Contacta con soporte
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmationEmail;
