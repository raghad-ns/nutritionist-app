import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../../providers/user.provider.jsx'

/**
 * @param {{
 *  children: React.ReactNode;
 * }} props Component props
 */
const Guard = (props) => {
    const userContext = useContext(UserContext)
    if (userContext.user?.email) {
        return (props.children)
    }
    else {
        alert('please login to get access to this page :)');
        return (<Navigate to={'/login'}/>)
    }
}

export default Guard