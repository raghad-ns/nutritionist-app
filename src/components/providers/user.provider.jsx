import React, { useEffect, useState } from 'react'
export const UserContext = React.createContext(null);

/**
 * @param {{
*  children: React.ReactNode;
* }} props Component props
*/
const UserProvider = (props) => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user') || '{}'));
    useEffect(() => {
        console.log('user provider');
        localStorage.setItem('user', JSON.stringify(user || {}))
    }, [user])

    return (
        <UserContext.Provider value={{ user: user, setUser: setUser }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider