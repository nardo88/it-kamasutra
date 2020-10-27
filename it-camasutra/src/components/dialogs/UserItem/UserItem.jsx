import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Dialogs.css'


const UserItem = (props) => {

    let path = '/dialogs/' + props.id
    return (
        <li className="users__item">
            <NavLink className='item' activeClassName='active-user' to={path}>{props.name}</NavLink>
        </li>
    )
}


export default UserItem