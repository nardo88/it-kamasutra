import { connect } from 'react-redux'
import Users from './UsersС'
import {foloowEC, unFoloowEC, setUsersAC} from '../../redux/reducer-users'

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
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
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer


