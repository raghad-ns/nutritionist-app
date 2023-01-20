/* eslint-disable jsx-a11y/anchor-is-valid */
import { List } from 'phosphor-react';
import { Dropdown, Space } from 'antd';
import { useContext } from 'react';
import { UserContext } from '../../providers/user.provider';
import { useNavigate, Link } from 'react-router-dom';


const MyDropDown = () => {
    const userContext = useContext(UserContext);
    const navigate = useNavigate();
    const logout = () => {
        userContext.setUser({});
        navigate('/login')
    }
    const items = [
        {
            key: '1',
            label: (
                <Link to='/viewPrograms'>View existing programs</Link>
            ),
        },
        {
            key: '2',
            label: (
                <Link to='/add'>New diet program</Link>
            ),
            disabled: false,
        },
        {
            key: '3',
            label: (
                <Link to='/foodTable'>Manage food table</Link>
            ),
            disabled: false,
        },
        {
            key: '4',
            danger: userContext.user?.email,
            label: (
                userContext.user?.email 
                ? <button onClick={logout} style={{ background: 'none', border: 'none' }}>Logout</button>
                : <Link to={'/login'}> Login</Link>
            ),
        },
    ];

    return (
        <Dropdown
            menu={{
                items,
            }}
        >
            <a onClick={(e) => e.preventDefault()}>
                <Space>
                    <List size={40} />
                </Space>
            </a>
        </Dropdown>
    )
}
    ;
export default MyDropDown;