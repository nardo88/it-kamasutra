import React from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    return(
        <div className="wrapper">
            <ul className={styles.list}>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </ul>
        </div>
    )
}

export default MyPosts