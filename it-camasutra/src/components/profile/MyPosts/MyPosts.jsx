import React from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post'
import { addPostActionCreater, postChangeActionCreator } from '../../../redux/reducer-profilePage'

const MyPosts = (props) => {
    const postsData = props.postsData
    
    const posts = postsData.map(item => <Post message={item.message} like={item.likesCount} />)

    const postText = React.createRef()

    // Функция которая будет вызвана по нажатии кнопки
    const addPost = () => {
        if (postText.current.value){
            const action = addPostActionCreater(postText.current.value)
            props.dispatch(action)
        } else alert('введите текст')
        
    }

    const onPostChange = () => {
        
        const action = postChangeActionCreator(postText.current.value)
        
        props.dispatch(action)
    }


    return(
        <div className={styles.wrapper}>
            <textarea ref={postText} className={styles.postText} placeholder="Введите новое сообщение" value={props.newPostText} onChange={onPostChange}></textarea>
            <button onClick={addPost} className={styles.addPostText}>Добавить</button>
            <ul className={styles.list}>
                {posts.reverse()}
            </ul>
        </div>
    )
}

export default MyPosts