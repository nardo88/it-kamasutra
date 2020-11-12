const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

let initialState ={
    users:  [
        
    ]
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


export default reduserUsers