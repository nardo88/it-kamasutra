const ADD_POST = "ADD-POST"
const ADD_POST_TEXT = "ADD-POST-TEXT"

const reducerProfilePage = (state, action) => {

    switch (action.type) {
        case ADD_POST:
            let post = {
                id: 5,
                message: action.message,
                likesCount: 0
            }
            state.postsData.push(post)
            state.newPostText = ""
            return state   
        case ADD_POST_TEXT:
            state.newPostText = action.text
            return state  
        default:
            return state 
    }

}


export const addPostActionCreater = (message) => {
    return {
        type: ADD_POST,
        message: message
    }
}

export const postChangeActionCreator = (message) => {
    return {
        type: ADD_POST_TEXT,
        message: message
    }
}

export default reducerProfilePage