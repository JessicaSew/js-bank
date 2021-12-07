import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUp from "./SignUp";


function Login({ onLogin }) {
    const [showLogin, setShowLogin] = useState("");
  
    return (
      <div>
       <h1>Welcome!</h1>
        {showLogin ? (
          <>
            <LoginForm onLogin={onLogin} />
            <p>
              <button onClick={() => setShowLogin(false)}>
                Sign Up
              </button>
            </p>
          </>
        ) : (
          <>
            <SignUp onLogin={onLogin} />
          </>
        )}
      </div>
    );  
  }
  
  export default Login;
  