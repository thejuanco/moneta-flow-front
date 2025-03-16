import React from 'react'
import { Link } from 'react-router'
import { useForm } from 'react-hook-form'
import NavBarForm from '../../components/auth/NavBarForm'

const Register = () => {

  const {
      register,
      handleSubmit,
      formState: { errors }
    } = useForm();
  
    const onSubmit = (data) => {console.log(data)}

  return (
    <>
      <NavBarForm />
      <div className="flex justify-center items-center pt-12">
        <div className="md:w-1/4 sm:w-1/2 sm:m-10 border border-gray-100 p-6 rounded-xl shadow">
          <h1 className="text-black font-semibold text-2xl">
            Ahorra como nunca antes
          </h1>
          <h1 className="text-gray-500 text-2xl font-semibold ">
            Crea tu cuenta en Moneta
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-10 mb-6">
            <div className="space-y-4">
            <div className="space-y-2">
                <label className="font-semibold block" htmlFor="name">
                  Nombre*
                </label>
                <input
                  className="w-full p-2 rounded-lg border border-gray-200"
                  placeholder="tu nombre"
                  {...register("nombre", { required: true })}
                />
              </div>
              <div className="space-y-2">
                <label className="font-semibold block" htmlFor="lastName">
                  Apellido*
                </label>
                <input
                  className="w-full p-2 rounded-lg border border-gray-200"
                  placeholder="ejemplo@correo.com"
                  {...register("lastName", { required: true })}
                />
              </div>
              <div className="space-y-2">
                <label className="font-semibold block" htmlFor="email">
                  Correo Electronico*
                </label>
                <input
                  className="w-full p-2 rounded-lg border border-gray-200"
                  placeholder="ejemplo@correo.com"
                  {...register("email", { required: true })}
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="font-semibold" htmlFor="email">
                    Contraseña*
                  </label>
                </div>
                <input
                  className="w-full p-2 rounded-lg border border-gray-200"
                  type="password"
                  {...register("password", { required: true })}
                />
              </div>
            </div>
            <button className="bg-purple-800 text-white w-full mt-8 py-2 font-semibold rounded-lg hover:bg-purple-700">
              Continuar
            </button>
          </form>
          <div className="flex justify-center">
            <p>¿Ya tienes una cuenta?&nbsp;</p>
            <Link to="/auth/signin" className="hover:underline">
              Inicia sesión
            </Link>
          </div>
          {/* <div className="flex items-center justify-between mb-6 mt-4">
                      <div className="border-t border-gray-300 w-1/2"></div>  
                      <span className="text-gray-500 mx-3">O</span>
                      <div className="border-t border-gray-300 w-1/2"></div>
                    </div> */}
        </div>
      </div>
    </>
  );
}

export default Register