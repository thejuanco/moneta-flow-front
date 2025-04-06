import { useState, useEffect, createContext, useContext } from "react";

//Habilitar el context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [token, setToken] = useState(null)

    useEffect(() => {
        const loadToken = () => {
            //Valida que existe un token
            const storedToken = localStorage.getItem("token")
            if(storedToken){
                //Asigna el token
                setToken(storedToken)
                //Autentica al token y al usuario
                setIsAuthenticated(true)
            } else {
                //Si no existe el token, redirige al login
                window.location.href = "/auth/login"
            }
        }
        loadToken()
    }, [])

    //Validar el token
    const signIn = async (newToken) => {
        setToken(newToken)
        setIsAuthenticated(true)
        localStorage.setItem("token", newToken)
    }

    const singOut = () => {
        setToken(null)
        setIsAuthenticated(false)
        localStorage.removeItem("token")    
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, signIn, singOut, token}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)