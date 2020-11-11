const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

let initialState ={
    users:  [
        {id: 1, photoUrl: 'https://pbs.twimg.com/profile_images/913861131005022209/iaBdZZn1.jpg', folowed: true, fullName: 'Dmitriy', status: 'I am a boss', location: { country: 'Russia', city: 'Moscow' }},
        {id: 2, photoUrl: 'https://www.cossa.ru/upload/main/a07/b758a5110a809c48845502fcd7e8100f_unnamed-_1_.jpg', folowed: true, fullName: 'Maxim', status: 'I am a super boss', location: { country: 'Belarus', city: 'Minsk' }},
        {id: 3, photoUrl: 'https://yt3.ggpht.com/a/AATXAJyDytRa1iX2xd3CLMo0H-moBlkNskqv5vqIAnzRsw=s900-c-k-c0xffffffff-no-rj-mo', folowed: false, fullName: 'Alexander', status: 'I am the best boss', location: { country: 'Ukraine', city: 'Kiev' }},
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
            return {...state, users: [ ...state.users, ...action.users] }
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