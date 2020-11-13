const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTALUSER_COUNT = 'SET_TOTALUSER_COUNT'

let initialState ={
    users:  [],
    pageSize: 20,
    totalUsersCount: 200,
    carrentPage: 1
}

const reduserUsers = (state = initialState, action) => {
    switch (action.type){
        case FOLLOW: {
            return {
                ...state, 
                users: state.users.map(user => {
                    if (user.id === action.userId){
                        return {...user, folowed: true}
                    }
                    return user
                })
            }
        }
        case UNFOLLOW:{
            return {
                ...state, 
                users: state.users.map(user => {
                    if (user.id === action.userId){
                        return {...user, folowed: false}
                    }
                    return user
                })
            }
        }
        case SET_USERS: {
            return {...state, users: [ ...action.users] }
        }

        case SET_CURRENT_PAGE: {
            // возвращает копию state у которого свойство carrentPage
            // равно carrentPage который пришел из action
            // а там номер элемента пагинации по которому кликнули
            return {...state, carrentPage: action.carrentPage}
        }
        case SET_TOTALUSER_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }

        default:
            return state;
    }
}


export const foloowEC = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}

export const unFoloowEC = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}

export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

export const setCurrentPageAC = (carrentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        carrentPage
    }
}

export const setTotalUserCountAC = (totalUsersCount)=> {
    return {
        type: SET_TOTALUSER_COUNT,
        totalUsersCount

    }
}


export default reduserUsers