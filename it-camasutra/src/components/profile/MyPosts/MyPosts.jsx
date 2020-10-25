import React from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

    

    return(
        <div className="wrapper">
            <ul className={styles.list}>

                <Post message="Hi! How are you?" />
                <Post message="It is my first post" />
              
            </ul>
        </div>
    )
}

export default MyPosts