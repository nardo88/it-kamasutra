import React from 'react'
import styles from './NavBar.module.css'
import { NavLink } from 'react-router-dom'


const NavBar = () => {
    return (
        <nav className="nav">
          <ul>
            <li className={styles.nav__item}>
              <NavLink className={styles.link} to="/profile" activeClassName={styles.active}>Profile</NavLink>
            </li>
            <li className={styles.nav__item}>
              <NavLink className={styles.link} to="/dialogs" activeClassName={styles.active}>Messages</NavLink>
            </li>
            <li className={styles.nav__item}>
              <NavLink className={styles.link} to="/users" activeClassName={styles.active}>Users</NavLink>
            </li>
          </ul>
        </nav>
    )
}

export default NavBar