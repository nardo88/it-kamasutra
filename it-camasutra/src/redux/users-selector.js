
import {createSelector} from 'reselect'


export const getUsers = (state) => {
    return state.usersPage.users
}

export const getUsersSelector = createSelector(getUsers, (users) => {

    return users.filter(item => true)

})














export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}

export const getCarrentPage = (state) => {
    return state.usersPage.carrentPage
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}

export const getFollowingInPropgress = (state) => {
    return state.usersPage.followingInPropgress
}

