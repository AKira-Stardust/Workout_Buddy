import { useAuthContext } from "../hooks/useAuthContext"
import useWorkoutsContext from "../hooks/useWorkoutsContext"

export const useLogout = () => {
    const { dispatch } = useAuthContext()
    const { dispatch: workoutsDispatch } = useWorkoutsContext()

    const logout = () => {
        // update context
        dispatch({ type: "LOGOUT" })

        // clear localStorage
        localStorage.removeItem("user")

        // clear workouts context data
        workoutsDispatch({ type:"SET_WORKOUTS", payload:null })
    }

    return { logout }
}