import { useState, useEffect, createContext, useContext } from "react";

//Habilitar el context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({})
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [token, setToken] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadToken = async () => {
            //Valida que existe un token
            const storedToken = await localStorage.getItem("token")
            if(storedToken){
                //Asigna el token
                setToken(storedToken)
                //Autentica al token y al usuario
                setIsAuthenticated(true)
            }
            setLoading(false)
        }
        loadToken()
    }, [])

    //Validar el token
    const signIn = async (newToken) => {
        setToken(newToken)
        setIsAuthenticated(true)
        await localStorage.setItem("token", newToken)
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