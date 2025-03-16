//Este archivo es para conectar con la API de moneta
import axios from "axios"

const clientAxios = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`
})

export default clientAxios