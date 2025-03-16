import React, {useState} from 'react'
import { Navigate, Link } from 'react-router'
import { useForm } from 'react-hook-form'
import clientAxios from '../../api/api.axios'
import NavBarForm from '../../components/auth/NavBarForm'
import AlertForms from '../../components/auth/AlertForms'

const RecoveryPassword = () => {
    const [alert, setAlert] = useState({})

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
      } = useForm();
    
      const onSubmit = async (data) => {
        try{
            const { email } = data
            const result = await clientAxios.post("/auth/recovery-password", { email })
            console.log(result)
        }
        catch (error) {
            setAlert({message: error.response.data.message})
            console.log(error)
        }
      };

  return (
    <>
        <NavBarForm/>
        <div className="flex justify-center items-center pt-16">
            <div className="mt-16 md:w-1/4 sm:w-1/2 sm:m-10 p-6 border border-gray-200 rounded-xl shadow">
                <h1 className="text-black font-semibold text-2xl">
                    Tu dinero bajo control    
                </h1>
                <h1 className="text-gray-500 text-2xl font-semibold ">
                    Recupera tu contraseña
                </h1>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-12 mb-4">
                    <div className="space-y-2 mb-12 ">
                    <label className="font-semibold" htmlFor="email">
                        Correo electronico*
                    </label>
                    <input
                        type="email"
                        name="email"
                        className={`w-full p-2 rounded-lg border mt-2 focus:outline-none focus:ring-1 ${
                            errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-200"
                          }`}
                        placeholder="Ingresa tu correo electrónico"
                        {...register('email', {required: true})}
                    />
                    {errors.email?.type === "required" && (
                        <p role="alert" className="text-red-700 text-sm text-center">El correo es obligatorio</p>
                    )}
                    <AlertForms alert={alert}/>
                    </div>
                    <button className="bg-purple-800 mb-2 text-white w-full py-2 font-semibold rounded-lg hover:bg-purple-700">
                    Continuar
                    </button>
                </form>
                <p className="text-sm m-2 mb-4 text-gray-500">
                    Te enviaremos un correo a tu cuenta de correo para 
                    restablecer tu contraseña.
                    </p>
                <div className="flex flex-row justify-center hover:underline">
                    <Link to="/">Volver a inicio</Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default RecoveryPassword