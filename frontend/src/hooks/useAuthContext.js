import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

export const useAuthContext = () => {
    const context = useContext(AuthContext)

    if(!context) {
        console.log("AuthContext is only available within the AuthContextProvider")
    }

    return context
}
