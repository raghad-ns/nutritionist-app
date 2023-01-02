import React from 'react'
import './header.css'
import logo from '../../../assets/logo.svg'

const Header = () => {
    return (
        <div className='header'>
            <div className='title'>
                <img src={logo} alt="logo" />
                <span>Nutrition Clinic Manager</span>
            </div>
        </div>
    )
}

export default Header