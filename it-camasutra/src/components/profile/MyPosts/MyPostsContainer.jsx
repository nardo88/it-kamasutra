import React from 'react'
import { connect } from 'react-redux'
import { addPostActionCreater, postChangeActionCreator } from '../../../redux/reducer-profilePage'
import MyPosts from './MyPosts'


const mapStateToProps = state =>{
    return {
        state: state.profilePage
    }
}

const maoDispatchToProps = dispatch =>{
    return {
        onPostChange: (value) => {
            dispatch(postChangeActionCreator(value))
        },
        addPost: (value) => {
            dispatch(addPostActionCreater(value))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, maoDispatchToProps)(MyPosts)

export default MyPostsContainer