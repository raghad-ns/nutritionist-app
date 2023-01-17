import React, { useEffect, useState } from 'react'
export const UserContext = React.createContext(null);

const UserProvider = (props) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user') || null));
    useEffect (()=> {
        localStorage.setItem('user' , JSON.stringify(user || null))
    } , [user])
    return (
        <UserContext.Provider value={{ user: user, setUser: setUser }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider