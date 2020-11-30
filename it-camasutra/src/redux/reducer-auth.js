import userApi from '../api/api'

import {stopSubmit} from 'redux-form'

// константа для типа action
const SET_AUTH_DATA = 'SET_AUTH_DATA'
// state для инициализации
const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
} 
// тело reducer
const reducerAuth = (state = initialState, action) => {
    switch (action.type){
        case SET_AUTH_DATA: {
            // возвращаем объект и заполняем его данными из action
            return{
                ...state,
                ...action.data,
            }
        }
        default:
            return state
    }
    
}


// action creator получаем данные от сервера ID email и login
export const setAuthData = (id, email, login, isAuth) => {
    return {
        type: SET_AUTH_DATA,
        data: {
            id,
            email,
            login,
            isAuth
        }
    }
}

// создание thunk -------------------------------------------------------

// thunk creator/ замыкаем dispatch
export const setAuthDataThunkCreator = () => {
    return (dispatch) => {
        // делаем GET запрос на сервер
        return userApi.setAuthData()
        .then(response => {
            // в ответ на запрос сервер высылает id, email и login
            // применяем диструктуризацию
            const {id, email, login} = response.data.data
            // если с сервера пришел ID
            if (id) {
                // dispatch-им actioncreator setAuthData
                dispatch(setAuthData(id, email, login, true))
            } 
        })
        
    }
}

// создаем thunk для того что бы залогинится
// передаем данные формы в качестве аргументов
export const login = (email, password, rememberMe) => (dispatch) => {
    // создаем запрос на сервер (запросу передаем данные с формы)
    userApi.login(email, password, rememberMe)
        // если ответ с сервера без ошибок
        .then(response => {
            if (response.data.resultCode === 0) {
                // диспатчим thunk который запрашивает с сервера
                // данные авторизованного пользователя
                dispatch(setAuthDataThunkCreator())
            } else{
                
                

                // Получение текста ошибки с сервера
                let message = response.data.messages.length ? response.data.messages[0] : 'some error'
                // короткая запись
                dispatch(stopSubmit('login', { _error: message}))
            }
        })
}

// thunk для вылогинизации
export const logOut = () => (dispatch) => {
    userApi.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthData(null, null, null, false))
            }
        })
}




// создание thunk -------------------------------------------------------




export default reducerAuth

