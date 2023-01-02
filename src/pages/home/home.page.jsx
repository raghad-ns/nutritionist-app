import React from 'react'
import { useNavigate } from 'react-router-dom'
import './home.css'

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className='home'>
            <div className="intro">
                <button className="homePageButtons"
                    onClick={() => navigate('/viewPrograms')}>
                    view existing programs
                </button>
                <button className="homePageButtons"
                    onClick={() => navigate("/add")}>
                    New diet program
                </button>
                <button className="homePageButtons"
                    onClick={() => navigate("/foodTable")}>
                    manage food table
                </button>
            </div>
        </div>
    )
}

export default Home