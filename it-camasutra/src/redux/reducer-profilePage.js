import userApi from '../api/api'


const ADD_POST = "ADD-POST"
const ADD_POST_TEXT = "ADD-POST-TEXT"
const GET_PROFILE_PAGE = "GET_PROFILE_PAGE"
const GET_STATUS = "GET_STATUS"
const UPDATE_STATUS = "GET_STATUS"
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS"

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
    profile: null,
    status: ''
}

const reducerProfilePage = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:{
            let post = {
                id: state.postsData.length + 1,
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
        case GET_STATUS: {
            return {...state, status: action.status}
        }
        case UPDATE_STATUS: {
            return {...state, status: action.status}
        }
        // reducer для 
        case SAVE_PHOTO_SUCCESS: {
            return {...state, profile: {...state.profile, photos: action.photos}}
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
// получение статуса
export const getProfileStatus = (status) => {
    return {
        type: GET_STATUS,
        status
    }
}
// обновление статуса
export const updateProfileStatus = (status) => {
    return {
        type: UPDATE_STATUS,
        status
    }
}
// action для загрузки фотографии
export const savePhotoSuccess = (photos) => {
    return {
        type: SAVE_PHOTO_SUCCESS,
        photos
        
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

// thunk для загрузки изображения =====================================================
export const savePhoto = (file) => async (dispatch) => {
    // делаем запрос на сервер в ответ получаем promise 
    let response = await userApi.savePhoto(file);
    // если серв ответил без ошибок
    if (response.data.resultCode === 0){
        // диспатчим action creator. на вход даем то
        // что вернул сервер, а именно раздел photos
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

// получение статуса пользователя

export const getProfileStatusThunk = (idUser) => {
    return (dispatch) => {
        userApi.getStatus(idUser)
        .then(response => {
            dispatch(getProfileStatus(response.data))
        })
    }
}

// обновление статуса пользователя
export const updateProfileStatusThunk = (status) => {
    return (dispatch) => {
        // мы создаем запрос на сервер
        userApi.updateStatus(status)
        .then(response => {
            // если сервер вернул нам ответ без ошибок
            if(response.data.resultCode === 0){
                // тогда записываем в state текст который мы передали на сервер
                dispatch(updateProfileStatus(status))
            }
        })
    }
}














// конец создание thunk-----------------------------------------------------------

export default reducerProfilePage