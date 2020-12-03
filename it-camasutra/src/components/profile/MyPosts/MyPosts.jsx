import React from 'react'
import { Field, reduxForm } from 'redux-form'
import styles from './MyPosts.module.css'
import Post from './Post/Post'
import {requiredField, } from '../../../utils/validators'
import { Textarea } from '../../common/Textarea'


const MyPosts = React.memo(props => {

    console.log('render');
    // мапим посты которые пришли из пропсов
    const posts = props.state.postsData.map(item => <Post message={item.message} key={item.id} like={item.likesCount} />)

    // Функция которая будет вызвана по нажатии кнопки формы
    const addPost = (data) => {
            props.addPost(data.postText)
    }

    // отрисовка JSX
    return (
        <div className={styles.wrapper}>
            <AddPostTextReduxForm onSubmit={addPost} />
            <ul className={styles.list}>
                {posts.reverse()}
            </ul>
        </div>
    )
});

// создание компоненты которая отрисовывает форму
const AddPostTextForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <Field name="postText" className={styles.postText} placeholder="Введите новое сообщение" component={Textarea} validate={[requiredField]} />
            <button className={styles.addPostText}>Добавить</button>
        </form>
    )
}

// контейнерная компонента которую создали с помощью redux-form
const AddPostTextReduxForm = reduxForm({
    form: 'addPostForm'
})(AddPostTextForm)

export default MyPosts