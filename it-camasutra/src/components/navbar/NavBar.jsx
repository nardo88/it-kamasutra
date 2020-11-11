import React from 'react'
import styles from './NavBar.module.css'
import { NavLink } from 'react-router-dom'


const NavBar = () => {
    return (
        <nav className="nav">
          <ul>
            <li>
              <NavLink className={styles.link} to="/profile" activeClassName={styles.active}>Profile</NavLink>
            </li>
            <li>
              <NavLink className={styles.link} to="/dialogs" activeClassName={styles.active}>Messages</NavLink>
            </li>
            <li>
              <NavLink className={styles.link} to="/users" activeClassName={styles.active}>Users</NavLink>
            </li>
            <li>
              <NavLink className={styles.link} to="/news" activeClassName={styles.active}>News</NavLink>
            </li>
            <li>
              <NavLink className={styles.link} to="/music" activeClassName={styles.active}>Music</NavLink>
            </li>
            <li>
              <NavLink className={styles.link} to="/settings" activeClassName={styles.active}>Settings</NavLink>
            </li>
          </ul>
        </nav>
    )
}

export default NavBar