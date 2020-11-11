import React from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
    
    const posts = props.state.postsData.map(item => <Post message={item.message} key={item.id} like={item.likesCount} />)

    const postText = React.createRef()

    // Функция которая будет вызвана по нажатии кнопки
    const addPost = () => {
        if (postText.current.value){
            props.addPost(postText.current.value)
            props.onPostChange('')
        } else alert('введите текст')
        
    }

    const onPostChange = () => {
        props.onPostChange(postText.current.value)
    }


    return(
        <div className={styles.wrapper}>
            <textarea ref={postText} className={styles.postText} placeholder="Введите новое сообщение" value={props.state.newPostText} onChange={onPostChange}></textarea>
            <button onClick={addPost} className={styles.addPostText}>Добавить</button>
            <ul className={styles.list}>
                {posts.reverse()}
            </ul>
        </div>
    )
}

export default MyPosts