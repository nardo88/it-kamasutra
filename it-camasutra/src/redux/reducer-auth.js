import userApi from '../api/api'

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

export const setAuthDataThunkCreator = () => {
    return (dispatch) => {
        userApi.setAuthData()
        .then(response => {
            // применяем диструктуризацию
            const {id, email, login} = response.data.data
            // вызываем callBack из контейнерной компоненты
            if (id) {
                dispatch(setAuthData(id, email, login, true))
            } 
        })
    }
}

// создаем thunk для того что бы залогинится
// передаем данные формы в качестве аргументов
export const login = (email, password, rememberMe) => (dispatch) => {
    // создаем запрос на сервер
    userApi.login(email, password, rememberMe)
        // 
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthDataThunkCreator())
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

