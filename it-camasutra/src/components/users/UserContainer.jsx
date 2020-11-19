import { connect } from 'react-redux'
import Users from './Users'
import { follow, unFollow, setCurrentPage, setTotalUserCount, changeFollowProgress, getUsertThunkCreator, changeFollowThunkCreator, changeUnFollowThunkCreator } from '../../redux/reducer-users'
import React from 'react'
import Preloader from '../common/preloader'



class UsersAPI extends React.Component {

    componentDidMount = () => {
        this.props.getUsertThunkCreator(this.props.carrentPage, this.props.pageSize)
    }


    // callback для пагинации
    onPageChanged = (pageNumber) => {
        // записываем в state номер страницы 
        this.props.setCurrentPage(pageNumber)
        // вызываем thunk передаем ему номер страницы и размер страницы
        this.props.getUsertThunkCreator(pageNumber, this.props.pageSize)
    }

    render() {
        return (
            <div className="wrapper">
                {this.props.isFetching ? <Preloader /> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    onPageChanged={this.onPageChanged}
                    carrentPage={this.props.carrentPage}
                    users={this.props.users}
                    follow={this.props.follow}
                    // unFollow={this.props.unFollow}
                    changeFollowProgress={this.props.changeFollowProgress}
                    followingInPropgress={this.props.followingInPropgress}
                    changeFollowThunkCreator={this.props.changeFollowThunkCreator}
                    changeUnFollowThunkCreator={this.props.changeUnFollowThunkCreator}
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
        isFetching: state.usersPage.isFetching,
        followingInPropgress: state.usersPage.followingInPropgress
    }
}





const UsersContainer = connect(mapStateToProps, { follow, unFollow, setCurrentPage, setTotalUserCount, changeFollowProgress, getUsertThunkCreator, changeFollowThunkCreator, changeUnFollowThunkCreator })(UsersAPI)

export default UsersContainer


