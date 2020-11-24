import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

const Header = (props) => {
   
    return(
        <header className={styles.header}>
            <img src="https://i.exclipart.com/images/abstract-design-png-5.png" alt="" className={styles.img}/>
            <div className={styles.logWrapper}>
                <span className={styles.login}>{props.auth.isAuth ? props.auth.login : <NavLink className={styles.login} to="/login">Login</NavLink>}</span>
            </div>
        </header>
    )
}

export default Header