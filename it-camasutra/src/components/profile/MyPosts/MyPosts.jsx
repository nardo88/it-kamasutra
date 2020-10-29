import React from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
    const postsData = props.postsData
    
    const posts = postsData.map(item => <Post message={item.message} like={item.likesCount} />)

    let postText = React.createRef()

    let addPost = () => {
        props.addPost(postText.current.value)
    }


    return(
        <div className={styles.wrapper}>
            <textarea ref={postText} className={styles.postText} placeholder="Введите новое сообщение"></textarea>
            <button onClick={addPost} className={styles.addPostText}>Добавить</button>
            <ul className={styles.list}>
                {posts.reverse()}
            </ul>
        </div>
    )
}

export default MyPosts