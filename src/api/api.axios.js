//Este archivo es para conectar con la API de moneta
import axios from "axios"
import { useAuth } from "../context/AuthProvider"

const useAxios = () => {
    //Crea la instancia de axios
    const instanceAPI = axios.create({
        baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`,
        timeout: 10000,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        }
    })

    //Desestructura el token del contexto
    const { token } = useAuth()

    //Agrega el token al header
    instanceAPI.interceptors.request.use(
        (config) => {
            if(token){
                config.headers.Accept = `Bearer ${token}`
            }
            return config
        },
        //Retorna el error en la peticion
        error => Promise.reject(error)
    )
    return instanceAPI
}

export default useAxios