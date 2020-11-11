const ADD_POST = "ADD-POST"
const ADD_POST_TEXT = "ADD-POST-TEXT"

let initialState = {
    // посты
    postsData: [{
            id: 1,
            message: 'Hi, how are you?',
            likesCount: 12
        },
        {
            id: 2,
            message: 'it is my first post',
            likesCount: 11
        },
        {
            id: 3,
            message: "I'm back",
            likesCount: 8
        },
              
    ],
    // переменная для изменения текста в textarea
    newPostText: '',
}

const reducerProfilePage = (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_POST:{
            let post = {
                id: 5,
                message: action.message,
                likesCount: 0
            }
            let stateCopy = {...state}
            stateCopy.postsData = [...state.postsData]
            stateCopy.postsData.push(post)
            return stateCopy  
        } 
        case ADD_POST_TEXT:{
            let stateCopy = {...state}
            stateCopy.newPostText = action.message
            return stateCopy  
        }
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