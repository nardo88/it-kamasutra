import React from 'react'
import { addPostActionCreater, postChangeActionCreator } from '../../../redux/reducer-profilePage'
import MyPosts from './MyPosts'

const MyPostsContainer = (props) => {
    

   
    const addPost = (value) => {
            const action = addPostActionCreater(value)
            props.store.dispatch(action)
    }

    const onPostChange = (value) => {
        
        const action = postChangeActionCreator(value)
        
        props.store.dispatch(action)
    }


    return(
        <MyPosts state={props.store.getState().profilePage} onPostChange={onPostChange} addPost={addPost} />
    )
}

export default MyPostsContainer