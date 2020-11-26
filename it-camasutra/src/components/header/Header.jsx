import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

const Header = (props) => {
   
    return(
        <header className={styles.header}>
            <img src="https://i.exclipart.com/images/abstract-design-png-5.png" alt="" className={styles.img}/>
            <div className={styles.logWrapper}>
                {
                    props.auth.isAuth ?  <div><span>{props.auth.login}</span> <button onClick={props.logOut} >logout</button> </div> : <NavLink className={styles.login} to="/login">Login</NavLink>
                }
                {/* <span className={styles.login}> {}</span> */}
            </div>
        </header>
    )
}

export default Header