import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

const Header = (props) => {
    const [logOutItem, setLogOutItem] = useState(false);

    const showLogOut = () => {
        setLogOutItem(!logOutItem)
    }


    return(
        <header className={styles.header} >
            <div className={styles.logo}> <span className={styles.logoFirst}>S</span>ocial NetWork</div>
            <div className={styles.logWrapper}>
                {
                    props.auth.isAuth ? 
                        <div className={styles.authWrapper} onClick={showLogOut}>
                            <span className={styles.user_name} >{props.auth.login}</span>
                            { props.profile ? <img className={styles.avatar} src={props.profile.photos.small} alt=""/> : ''}
                            <div className={`${styles.logOut} ${logOutItem ? styles.show : ''}` }>
                                <button className={styles.logOutBtn} onClick={props.logOut} >Выйти</button>
                            </div>
                        </div> 
                        : <NavLink className={styles.login} to="/login">Login</NavLink>
                }
                {/* <span className={styles.login}> {}</span> */}
            </div>
        </header>
    )
}


export default Header