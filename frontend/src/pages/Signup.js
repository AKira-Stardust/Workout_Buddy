import { useState } from "react"

const Signup = () => {
    const [ email, setEmail ] = useState(null)
    const [ password, setPassword ] = useState(null)
 
    const handleSignup = (e) => {
        e.preventDefault()

        console.log(email, password)
    }

    return(
        <form className="signup" onSubmit={handleSignup}>
            <h3>Signup</h3>

            <label>Email:</label>
            <input
                type="email"
                onChange = {(e) => {setEmail(e.target.value)}}
                value={ email }
            />

            <label>Password:</label>
            <input
                type="password"
                onChange = {(e) => {setPassword(e.target.value)}}
                value={ password }
            />
            <button>Signup</button>
        </form>
    )
}

export default Signup