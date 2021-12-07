import React from 'react'
import { NavLink } from 'react-router-dom'

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    color: 'white',
    background: 'blue'
}
const Navbar = (props) => {

    if (props.loggedIn) {
        return (
            <div>
                <h1>Hello {props.user.name} !</h1>
                <br/>
                <NavLink
                    to="/"
                    exact
                    style={link}
                    activeStyle={{
                        background: 'darkblue'
                    }}>Home
                </NavLink>
               
                <NavLink
                to="/accounts"
               exact
                style={link}
                activeStyle={{
                    background: 'darkblue'
                }}>Accounts
                </NavLink> 

                <NavLink
                to={`/accounts/` + props.user.id}
                exact
                style={link}
                activeStyle={{
                    background: 'darkblue'
                }}>Profile
            </NavLink>
            </div>
        )
    } 
    else { 
    return (
        <div>
            <NavLink
            to="/"
            exact
            style={link}
            activeStyle={{
                background: 'darkblue'
            }}>Home
            </NavLink>

            <NavLink
            to="/login"
            exact
            style={link}
            activeStyle={{
                background: 'darkblue'
            }}>Login
            </NavLink>

            <NavLink
            to="/signup"
            exact
            style={link}
            activeStyle={{
                background: 'darkblue'
            }}>Sign Up
            </NavLink> 
        </div>
        )
    }
}

export default Navbar