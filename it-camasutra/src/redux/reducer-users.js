import userApi from '../api/api'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTALUSER_COUNT = 'SET_TOTALUSER_COUNT'
const CHANGE_ISFETCHING = 'CHANGE_ISFETCHING'
const CHANGE_FOLLOW_PROGRESS = 'CHANGE_FOLLOW_PROGRESS'
 
let initialState = {
    users: [],
    pageSize: 20,
    totalUsersCount: 200,
    carrentPage: 1,
    isFetching: false,
    followingInPropgress: []
}

const reduserUsers = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {
                            ...user,
                            followed: true
                        }
                    }
                    return user
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {
                            ...user,
                            followed: false
                        }
                    }
                    return user
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...action.users],
                totalUsersCount: action.totalUsersCount
            }
        }

        case SET_CURRENT_PAGE: {
            // возвращает копию state у которого свойство carrentPage
            // равно carrentPage который пришел из action
            // а там номер элемента пагинации по которому кликнули
            return {
                ...state,
                carrentPage: action.carrentPage
            }
        }
        case SET_TOTALUSER_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        }
        case CHANGE_ISFETCHING: {
            const newState = {
                ...state
            }
            newState.isFetching = action.isFetching
            return newState
        }
        case CHANGE_FOLLOW_PROGRESS: {
            return {
                ...state,
                // в массив followingInPropgress запишем: если action.inProgress вернет true
                followingInPropgress: action.inProgress
                    // добавляем копию массива и еще в массив запишем id который пришел в action
                    ?
                    [...state.followingInPropgress, action.id]
                    // иначе оставляем в массиве все ID которые не равны тому что пришел в action
                    :
                    state.followingInPropgress.filter(id => id === !action.id)
            }
        }

        default:
            return state;
    }
}


export const follow = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}

export const unFollow = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}

export const setUsers = (users, totalUsersCount) => {
    return {
        type: SET_USERS,
        users,
        totalUsersCount
    }
}

export const setCurrentPage = (carrentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        carrentPage
    }
}

export const setTotalUserCount = (totalUsersCount) => {
    return {
        type: SET_TOTALUSER_COUNT,
        totalUsersCount

    }
}

export const changeIsFetching = (isFetching) => {
    return {
        type: CHANGE_ISFETCHING,
        isFetching
    }
}

export const changeFollowProgress = (inProgress, id) => {
    return {
        type: CHANGE_FOLLOW_PROGRESS,
        inProgress,
        id

    }
}

// создание thunk-----------------------------------------------------

//  thunk для получения USER
export const getUsertThunkCreator = (carrentPage, pageSize) => {
    return (dispatch) => {
        // запускаем крутилку
        dispatch(changeIsFetching(true))
        // обращаемся к DAL и выполняем GET запрос
        userApi.getUsers(carrentPage, pageSize)
            .then(data => {
                // после того как данные с сервера получены
                // выключаем крутилку
                dispatch(changeIsFetching(false))
                // и закиываем данные в state? после того как state 
                // обновится компонента отрисуется заново
                dispatch(setUsers(data.items, data.totalCount))
            })
    }
}

// thunk для удаления подписки
export const changeFollowThunkCreator = (idUser) => {
    return (dispatch) => {
        // делаем кнопку не активной
        dispatch(changeFollowProgress(true, idUser))

        userApi.getUnFollowed(idUser)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unFollow(idUser))
                }
                dispatch(changeFollowProgress(false, idUser))
            })
    }
}

// thunk для подписки
export const changeUnFollowThunkCreator = (idUser) => {
    return (dispatch) => {
        dispatch(changeFollowProgress(true, idUser))

        userApi.getFollowed(idUser)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(follow(idUser))
                }
                dispatch(changeFollowProgress(false, idUser))
            })
    }
}

// конец создание thunk-----------------------------------------------------


export default reduserUsers