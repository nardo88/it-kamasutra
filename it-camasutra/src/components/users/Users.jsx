import React from 'react'
import './styleUsers.css'
import * as axios from 'axios'
import userImage from '../../images/user.jpg'

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.carrentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                // this.props.setTotalUserCount(response.data.totalCount)
            })
    }

    onPageChanged(pageNumber){
        this.props.setCurrentPage(pageNumber)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = []

        for (let i = 1; i <= pagesCount; i++){
            pages.push(i)
        }

        return (
            <div className="userContainer">

                <div className="pagination">
                    {
                        pages.map(item => {
                            return <button 
                                        key={item}
                                        className={this.props.carrentPage === item ? 'activePagination paginationItem' : 'paginationItem'}
                                        onClick={() => {this.onPageChanged(item)}}>
                                            {item}
                                  </button>
                        })
                    }
                </div>

                {this.props.users.map(user => {
                    return <div key={user.id} className="userWrapper">
                        <div className="avatar">
                            <img className="userAvatar" src={!user.photos.small ? userImage : user.photos.small} alt="" />
                            {
                                user.folowed ? <button onClick={() => { this.props.unFollow(user.id) }} className="userBtn">folowed</button> : <button onClick={() => { this.props.follow(user.id) }} className="userBtn">unfolowed</button>
                            }
                        </div>
                        <div className="userInfo">
                            <div className="userName">{user.name}</div>
                            <div className="userStatus">{user.status}</div>
                        </div>
                        <div className="userLocation">
                            <div className="country">Страна: {!user.location ? 'не указана' : user.location}</div>
                            <div className="city">Город: {!user.location ? 'не указан' : user.location}</div>
                        </div>
                    </div>
                })}
            </div>
        )
    }
}


export default Users