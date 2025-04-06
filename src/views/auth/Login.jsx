import {  useState } from 'react'
import { Link, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form'
import { connectAPI } from '../../api/connectAPI';

//Componentes
import AlertForms from '../../components/auth/AlertForms';
import NavBarForm from '../../components/auth/NavBarForm'

const Login = () => {
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState({})
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const { email, password } = data
      await connectAPI.post('/auth/login', {email, password})
        .then(response => {
          //Almacena el token y nombre en el localStorage
          const token = response.data.token
          const name = response.data.name
          localStorage.setItem('token', token)
          localStorage.setItem('name', name)
          //Almacena el token en el contexto
          setLoading(true)
        })
        .catch(error => {
          console.log(error)
        })
      navigate("/dashboard")
    } catch (error) {
      const status = error.message

      if (status === "Network Error") {
        setAlert({message: "Error de conexión, verifica tu internet"})
        return  
      }
      setAlert({message: error.message})
      console.log(error.message)
    }
  }

  return (
    <div>
      <NavBarForm />
      <div className="flex justify-center items-center pt-12">
        <div className="md:w-1/4 sm:w-1/2 sm:m-10 border border-gray-100 p-6 rounded-xl shadow">
          <h1 className="text-black font-semibold text-2xl">
            Tu dinero bajo control
          </h1>
          <h1 className="text-gray-500 text-2xl font-semibold ">
            Inicia Sesión en Moneta
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-10 mb-6">
            <div className="space-y-4 mb-2">
              <div className="space-y-2">
                <label className="font-semibold block" htmlFor="email">
                  Correo Electronico*
                </label>
                <input
                  name="email"
                  type="email"
                  className={`w-full p-2 rounded-lg border focus:outline-none focus:ring-1 ${
                    errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-200" 
                  }`}
                  placeholder="ejemplo@correo.com"
                  {...register("email", { required: true })}
                />
                {errors.email?.type === "required" && (
                  <p role="alert" className="text-red-700 text-sm text-center">El correo es obligatorio</p>
                )}
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="font-semibold" htmlFor="email">
                    Contraseña*
                  </label>
                  <Link
                    to="/auth/recovery-password"
                    className="text-gray-600 hover:underline"
                  >
                    Olvide mi contraseña
                  </Link>
                </div>
                <input
                  className={`w-full p-2 rounded-lg border focus:outline-none focus:ring-1 ${
                    errors.password ? "border-red-500 focus:ring-red-500" : "border-gray-200" 
                  }`}
                  type="password"
                  {...register("password", { required: true })}
                />
                {errors.password?.type === "required" && (
                  <p role="alert" className="text-red-700 text-sm text-center">La contraseña es obligatoria</p>
                )}
              </div>
            </div>
            <AlertForms alert={alert} />
            <button className="bg-green-700 text-white w-full mt-8 py-2 font-semibold rounded-lg hover:bg-green-600">
              Continuar
            </button>
          </form>
          <div className="flex justify-center">
            <p>¿Aún no tienes cuenta?&nbsp;</p>
            <Link to="/auth/signup" className="hover:underline">
              Registrate
            </Link>
          </div>
          {/* <div className="flex items-center justify-between mb-6 mt-4">
              <div className="border-t border-gray-300 w-1/2"></div>  
              <span className="text-gray-500 mx-3">O</span>
              <div className="border-t border-gray-300 w-1/2"></div>
            </div> */}
        </div>
      </div>
    </div>
  );
}

export default Login