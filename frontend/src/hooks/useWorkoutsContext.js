import { useContext } from "react";

// import components
import { WorkoutsContext } from "../context/WorkoutsContext";

const useWorkoutsContext = () => {    
    const context = useContext(WorkoutsContext)
    
    if(!context){
        throw Error("WorkoutsContext can be only used inside a WorkoutsContextProvider")
    }

    return context
}

export default useWorkoutsContext