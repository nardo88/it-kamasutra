import React from 'react'
import styles from './Header.module.css'

const Header = (props) => {
   
    let authValue
    if (props.auth.isAuth){
        authValue = props.auth.login
    } else {
        authValue = 'Не авторизован'
    }
 
    return(
        <header className={styles.header}>
            <img src="https://i.exclipart.com/images/abstract-design-png-5.png" alt="" className={styles.img}/>
            <div className={styles.logWrapper}>
                <span className={styles.login}>{authValue}</span>
            </div>
        </header>
    )
}

export default Header