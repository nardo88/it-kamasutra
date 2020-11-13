import { connect } from 'react-redux'
import Users from './Users'
import {foloowEC, unFoloowEC, setUsersAC, setCurrentPageAC, setTotalUserCountAC} from '../../redux/reducer-users'

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        carrentPage: state.usersPage.carrentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    
    return {
        follow: (userId) => {
            dispatch(foloowEC(userId))
        },
        unFollow: (userId) => {
            dispatch(unFoloowEC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage(pageNumber){
            dispatch(setCurrentPageAC(pageNumber))
        },
        // setTotalUserCount(num){
        //     dispatch(setTotalUserCountAC(num))
        // }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer


