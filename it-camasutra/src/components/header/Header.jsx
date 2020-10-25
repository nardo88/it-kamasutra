import React from 'react'
import styles from './Header.module.css'

const Header = () => {
    return(
        <header className={styles.header}>
            <img src="https://i.exclipart.com/images/abstract-design-png-5.png" alt="" className={styles.img}/>
        </header>
    )
}

export default Header