import React from 'react'
import './header.css'
import logo from '../../../assets/logo.svg'
import { House } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate() ;
    return (
        <div className='header'>
            <div className='title'>
                <img src={logo} alt="logo" />
                <span>Nutrition Clinic Manager</span>
            </div>
            {
                window.location.pathname !== '/' &&
                <button onClick={() => navigate('/')}> <House size={45} color='white' weight='fill' /> </button>
            }
        </div>
    )
}

export default Header