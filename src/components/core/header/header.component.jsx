import React from 'react'
import './header.css'
import logo from '../../../assets/logo.svg'
import { House } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className='header'>
            <div className='title'>
                <img src={logo} alt="logo" />
                <span>Nutrition Clinic Manager </span>
                {(window.location.pathname === "/add") && <span className='pageName'>&nbsp; - new diet program</span>}
                {(window.location.pathname === "/viewPrograms") && <span className='pageName'>&nbsp; - new diet program</span>}
                {(window.location.pathname === "/foodTable") && <span className='pageName'>&nbsp; - new diet program</span>}
            </div>

            {
                window.location.pathname !== '/' &&
                <button onClick={() => navigate('/')} > <House size={45} color='white' weight='fill' className="homeButton" /> </button>
            }
        </div>
    )
}

export default Header