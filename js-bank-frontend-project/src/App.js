import './App.css';
import React, { useState, useEffect} from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import AccountList from './AccountList'
import Navbar from './Navbar'
import Bank from './Bank'
import AccountProfile from './AccountProfile'
import SignUp from './SignUp'
import LoginForm from './LoginForm'

const App = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  const navigate = useNavigate();
 
  useEffect(() => {
    fetch("http://localhost:3001/me").then(r => {
      if (r.ok) {
        r.json()
        .then( (user) =>
         setLoggedIn(true),
        setUser(user))
    }
    })
  }, []);

  const loginUser = (u) => {
    setLoggedIn(true)
    setUser(u)
    navigate("/account/" + u.id)
  
}

const logoutUser = () => {
  fetch('/logout', {
    method: 'DELETE'
  })
  .then(() => {
    console.log("logged out")
    setLoggedIn(false)
    setUser({})
    navigate('/')
  })
}

return (
  <div className="App">
    <Navbar user={user} loggedIn={loggedIn} logoutUser={logoutUser} />
    <Routes>
      <Route index path="/" element={<Bank/>} />
      <Route index path="/accounts/:id" element={<AccountProfile/>} />
      <Route index path="/login" element={<LoginForm loginUser={loginUser} user={user}/>} />
      <Route index path="/signup" element={<SignUp loginUser={loginUser} user={user}/>} />
      {/* <Route path="/commands/:id" component={Command} /> */}
    </Routes>
  </div> 
);
}

export default App;
