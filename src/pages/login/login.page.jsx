import React from 'react'
import { useNavigate } from 'react-router-dom'
import './login.css'
const Login = () => {
    const navigate = useNavigate();
    const login = (e) => {
        e.preventDefault() ;
        navigate('/');
    }
    return (
        <div className="login">
            <div className="form">
                <p>welcome</p>
                <form className="login-form" onSubmit={login}>
                    <input type="text" placeholder="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
                    <input type="password" placeholder="password" required />
                    <button type='submit'>login</button>
                </form>
            </div>
        </div>
    )
}

export default Login