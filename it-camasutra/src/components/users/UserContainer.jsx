import { connect } from 'react-redux'
import Users from './Users'
import { foloowEC, unFoloowEC, setUsersAC, setCurrentPageAC, setTotalUserCountAC, changeIsFetchingAC } from '../../redux/reducer-users'
import * as axios from 'axios'
import React from 'react'
import Preloader from '../common/preloader'



class UsersAPI extends React.Component {

    componentDidMount = () => {
        this.props.changeIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.carrentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.changeIsFetching(false)
                this.props.setUsers(response.data.items)
                // this.props.setTotalUserCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.changeIsFetching(true)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.changeIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <div className="wrapper">
                {this.props.isFetching ? <Preloader /> : null }
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    onPageChanged={this.onPageChanged}
                    carrentPage={this.props.carrentPage}
                    users={this.props.users}
                    follow={this.props.follow}
                    unFollow={this.props.unFollow}
                />
            </div>

        )
    }
}



let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        carrentPage: state.usersPage.carrentPage,
        isFetching: state.usersPage.isFetching
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
        setCurrentPage(pageNumber) {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUserCount(num) {
            dispatch(setTotalUserCountAC(num))
        },
        changeIsFetching(isFetching){
            dispatch(changeIsFetchingAC(isFetching))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI)

export default UsersContainer


