import { useState } from "react"
import { useAuthContext } from "./useAuthContext"

export const useLogin = () => {
    const [isLoading, setIsLoading] = useState(null)
    const [error, setError] = useState(null)
    const { dispatch } = useAuthContext()
    
    const login = async (email, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/user/login', {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify({ email, password })
        })
        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }

        if (response.ok) {
            // setup token in localStorage
            localStorage.setItem("user", JSON.stringify(json))

            // update context data
            dispatch({type:"LOGIN", payload: json}) // signup and login - both use 'login' action type
            
            // update loading state
            setIsLoading(false)
        }
    }
    return { login, isLoading, error }
}