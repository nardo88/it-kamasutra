import React from 'react'
import styles from './Header.module.css'

const Header = (props) => {
    return(
        <header className={styles.header}>
            <img src="https://i.exclipart.com/images/abstract-design-png-5.png" alt="" className={styles.img}/>
            <div className={styles.logWrapper}>
                {/* Здесь получаем через пропсы данные из state куда мы до этого записали данные пришедшие с сервера и отрисовываем */}
                {props.auth.isAuth ? <span className={styles.login}>{props.auth.login}</span> : <span className={styles.login}>Log In</span>  }
            </div>
        </header>
    )
}

export default Header