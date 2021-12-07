import React, { useState } from 'react'

function SignUp({ onLogin }) {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
   
    // let params = useParams();
    // const [loggedIn, setLoggedIn] = useState(false)
    // const [user, setUser] = useState(null)

//   const signUpUser = (u) => {
//     setLoggedIn(true)
//     setUser(u)
    // navigate('/')
//   }

    function handleSubmit(e) { 
        e.preventDefault()
        fetch("/signup", { 
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ 
                name,
                password,
                password_confirmation: passwordConfirmation,
            }),
        })
        .then(response => response.json())
        .then(user => {
            if(!user.errors) {
                onLogin(user)
            } else {
                setPassword("")
                setPasswordConfirmation("")
            }
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <br/>
            <label>Name: </label>
            <input 
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            /> <br/>

            <label>Password: </label>
            <input 
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            /> <br/>
            <label>Confirm Password: </label>
            <input 
            type="password"
            id="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            /> <br/>
            <input type="submit"/>
        </form>
    )
}

export default SignUp