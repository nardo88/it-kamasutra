import { connect } from 'react-redux'
import Users from './Users'
import { follow, unFollow, setCurrentPage, setTotalUserCount, changeFollowProgress, getUsertThunkCreator, changeFollowThunkCreator, changeUnFollowThunkCreator } from '../../redux/reducer-users'
import React from 'react'
import Preloader from '../common/preloader'
import { getUsersSelector, getPageSize, getTotalUsersCount, getCarrentPage, getIsFetching, getFollowingInPropgress} from '../../redux/users-selector'





class UsersAPI extends React.PureComponent {

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
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        carrentPage: getCarrentPage(state),
        isFetching: getIsFetching(state),
        followingInPropgress: getFollowingInPropgress(state),
    }
}





const UsersContainer = connect(mapStateToProps, { follow, unFollow, setCurrentPage, setTotalUserCount, changeFollowProgress, getUsertThunkCreator, changeFollowThunkCreator, changeUnFollowThunkCreator })(UsersAPI)

export default UsersContainer


