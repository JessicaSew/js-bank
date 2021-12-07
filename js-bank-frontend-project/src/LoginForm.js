import React, { useState } from 'react'

function LoginForm ({ onLogin }) {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setError] = useState("");

    function handleSubmit(e) {
      e.preventDefault();
      fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ name, password })
      })
        .then((r) => {
        if (r.ok) {
            //r.json().then((user) => onLogin(user))
        }
        else {
          r.json().then(err => setError(err))
        }
      }    
    )}

    return (
      <form onSubmit={handleSubmit}>
        <br/>
        <label>Username: </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br/>
        <label>Password: </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
     <input type="submit"/>
      </form>
    );
  } 

  export default LoginForm