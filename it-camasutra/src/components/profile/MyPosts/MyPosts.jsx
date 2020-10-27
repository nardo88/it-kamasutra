import React from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

    const postsData = [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'it is my first post', likesCount: 11},
        {id: 3, message: "I'm back", likesCount: 8},
      ]
    
    const posts = postsData.map(item => <Post message={item.message} like={item.likesCount} />)
    return(
        <div className="wrapper">
            <ul className={styles.list}>
                {posts}
            </ul>
        </div>
    )
}

export default MyPosts