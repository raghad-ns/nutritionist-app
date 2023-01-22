import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../components/providers/user.provider';
import { USERS } from '../../data/users';
import './login.css'
const Login = () => {

    const navigate = useNavigate();
    const userContext = useContext(UserContext);

    /**
    * @param {React.ChangeEvent<HTMLInputElement>} e 
    */
    const login = (e) => {
        e.preventDefault();
        const user = { email: e.target.email.value, password: e.target.password.value };
        const currentUser = USERS.find(someUser => (someUser.email === user.email && someUser.password === user.password))
        if (currentUser) {
            userContext.setUser(currentUser)
            navigate('/');
        }
        else {
            alert('incorrect email or password , please check it out !')
        }
    }

    return (
        <div className="login">
            <div className="form">
                <p>welcome</p>
                <form className="login-form" onSubmit={login}>
                    <input
                        type="text"
                        name='email'
                        placeholder="email"
                        required
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    />
                    <input type="password" name='password' placeholder="password" required />
                    <button type='submit'>login</button>
                </form>
            </div>
        </div>
    )
}

export default Login