import React from 'react'
import { NavLink } from 'react-router-dom'
import style from '../Dialogs.module.css';



const UserItem = (props) => {

    let path = '/dialogs/' + props.id
    return (
        <li className={style.users__item}>
            <NavLink className={style.item} activeClassName={style.active_user} to={path}>{props.name}</NavLink>
        </li>
    )
}


export default UserItem