import userApi from '../api/api'


const ADD_POST = "ADD-POST"
const ADD_POST_TEXT = "ADD-POST-TEXT"
const GET_PROFILE_PAGE = "GET_PROFILE_PAGE"

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
    profile: null
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
        case GET_PROFILE_PAGE:{
            return {...state, profile: action.profile}
        }
        default:
            return state 
    }
}


export const addPostActionCreater = (message) => {
    return {
        type: ADD_POST,
        message
    }
}

export const postChangeActionCreator = (message) => {
    return {
        type: ADD_POST_TEXT,
        message
    }
}

export const getProfilePage = (profile) => {
    return {
        type: GET_PROFILE_PAGE,
        profile
    }
}

// создание thunk-----------------------------------------------------------

export const getProfileThunkCreator = (idUser) => {
    return (dispatch) => {
        userApi.getProfile(idUser)
        .then(response => {
            dispatch(getProfilePage(response.data))
        })
    }
}














// конец создание thunk-----------------------------------------------------------

export default reducerProfilePage