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
                isAuth: true
            }
        }
        default:
            return state
    }
    
}


// action creator получаем данные от сервера ID email и login
export const setAuthData = (id, email, login) => {
    return {
        type: SET_AUTH_DATA,
        data: {
            id,
            email,
            login
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
                dispatch(setAuthData(id, email, login))
            } 
        })
    }
}








// создание thunk -------------------------------------------------------




export default reducerAuth

