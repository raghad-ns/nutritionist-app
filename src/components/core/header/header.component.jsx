import React, { useContext } from 'react'
import './header.css'
import logo from '../../../assets/logo.svg'
import { House, UserCircle } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'
import MyDropdown from '../dropdown/dropdown.component'
import { UserContext } from '../../providers/user.provider'

const Header = () => {

    const navigate = useNavigate();
    const userContext = useContext(UserContext);

    return (
        <div className='header'>
            <div className='title'>
                <img src={logo} alt="logo" />
                <span>Nutrition Clinic Manager </span>
                {(window.location.pathname === "/add") && <span className='pageName'>&nbsp; - new diet program</span>}
                {(window.location.pathname === "/viewPrograms") && <span className='pageName'>&nbsp; - existing programs</span>}
                {(window.location.pathname === "/foodTable") && <span className='pageName'>&nbsp; - food table</span>}
            </div>
            <div className="navigationBar">
                {
                    userContext.user?.email &&
                    <div className='userDetails'>
                        <UserCircle size={40} />
                        <span className='userName'>{userContext.user.name}</span>
                    </div>
                }
                {
                    window.location.pathname !== '/' &&
                    <button
                        onClick={() => navigate('/')}
                    >
                        <House size={40} color='white' weight='fill' className="homeButton" />
                    </button>
                }
                {window.location.pathname !== '/login' && <MyDropdown />}
            </div>
        </div>
    )
}

export default Header