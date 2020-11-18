import { connect } from 'react-redux'
import Users from './Users'
import { follow, unFollow, setUsers, setCurrentPage, setTotalUserCount, changeIsFetching } from '../../redux/reducer-users'
import React from 'react'
import Preloader from '../common/preloader'
import userApi from '../../api/api'



class UsersAPI extends React.Component {

    componentDidMount = () => {
        this.props.changeIsFetching(true)
        // обращаемся к импортированному объекту и вызываем его метод
        // на вход передаем необходимы параметры, которые будут формировать 
        // GET запрос  
        userApi.getUsers(this.props.carrentPage, this.props.pageSize)
        // метод then принимает данные, эти данные передаем в callback
        .then(data => {
                this.props.changeIsFetching(false)
                this.props.setUsers(data.items)
                // this.props.setTotalUserCount(data.totalCount)
            })
    }
    // callback для пагинации
    onPageChanged = (pageNumber) => {
        // записываем в state номер страницы 
        this.props.setCurrentPage(pageNumber)
        // отображаем loader
        this.props.changeIsFetching(true)
        // делаем запрос на сервер
       
        userApi.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.changeIsFetching(false)
                this.props.setUsers(data.items)
            })
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





const UsersContainer = connect(mapStateToProps, { follow, unFollow, setUsers, setCurrentPage, setTotalUserCount, changeIsFetching })(UsersAPI)

export default UsersContainer


