import { createContext, useContext, useEffect, useState } from "react";
import useAxios from "../api/api.axios.js"
import { useAuth } from "./AuthProvider.jsx";

const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)
    const { token, user } = useAuth()
    const instanceAPI = useAxios()

    //Endpoint de categorias
    const getCategories = async () => {
        try {
            setLoading(true)
            const response = await instanceAPI.get("/app/dashboard/categories/get_categories", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setCategories(response.data)
        } catch (error) {
            console.error("Error fetching categories:", error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (token) {
          getCategories();
        }
      }, [ token]);

    return (
        <CategoriesContext.Provider value={{categories}}>
            {children}
        </CategoriesContext.Provider>
    );
}

export const useCategories = () => useContext(CategoriesContext);