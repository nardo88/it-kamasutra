import React from 'react'
import styles from './Post.module.css'

const Post = props => {
    return (
        <li className={styles.listItem}>
            <div className={styles.wrapper}>
                <img className={styles.avatar} src="https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg" alt="" />
                <span>{props.message}</span>
            </div>

            <div>Like: {props.like}</div>
        </li>
    )
}

export default Post



