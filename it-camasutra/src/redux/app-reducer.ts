import { setAuthDataThunkCreator} from './reducer-auth'

// константа для типа action
const SET_INITIALIZED = 'SET_INITIALIZED'

// type для дефолтного state
export type InitialStateType = {
    initialized: boolean
} 


// state для инициализации
const initialState: InitialStateType  = {
    initialized: false
} 

// тело reducer
const appReducer = (state = initialState, action: SetInitializedActionType): InitialStateType => {
    switch (action.type){
        case SET_INITIALIZED: {
            // возвращаем объект и меняем значение initialized на true
            return{
                ...state,
                initialized: true
            }
        }
        default:
            return state
    }
}


// type для action

type SetInitializedActionType = {
    type: typeof SET_INITIALIZED
}

// action creator
export const setInitialized = (): SetInitializedActionType =>  ({type: SET_INITIALIZED})


// создание thunk -------------------------------------------------------

// thunk creator
export const initializeApp = () => (dispatch: any) => {
    // диспатчим санку которая делает запрос на сервер
    // проверяет авторизованы ли мы и которая после этого в state 
    // диспатчит данные авторизованного пользователя (id, login и т.д.)
    // то что вернул dispatch мы записываем в переменную promise
    let promise = dispatch(setAuthDataThunkCreator())
    // после того как промис выполнится мы запускаем dispatch setInitialized()
    Promise.all([promise])
    .then(() => {
        dispatch(setInitialized())
    })
}






// создание thunk -------------------------------------------------------




export default appReducer

