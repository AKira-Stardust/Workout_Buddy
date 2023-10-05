import { useAuthContext } from "../hooks/useAuthContext"

export const useLogout = () => {
    const { dispatch } = useAuthContext()
    
    const logout = () => {
        // update context
        dispatch({ type: "LOGOUT" })

        // clear localStorage
        localStorage.removeItem("user")
    }

    return { logout }
}