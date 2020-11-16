import React from 'react'
import './styleUsers.css'
import userImage from '../../images/user.jpg'



const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div className="userContainer">

        <div className="pagination">
            {
                pages.map(item => {
                    return <button
                        key={item}
                        className={props.carrentPage === item ? 'activePagination paginationItem' : 'paginationItem'}
                        onClick={() => { props.onPageChanged(item) }}>
                        {item}
                    </button>
                })
            }
        </div>

        {props.users.map(user => {
            return <div key={user.id} className="userWrapper">
                <div className="avatar">
                    <img className="userAvatar" src={!user.photos.small ? userImage : user.photos.small} alt="" />
                    {
                        user.folowed ? <button onClick={() => { props.unFollow(user.id) }} className="userBtn">folowed</button> : <button onClick={() => { props.follow(user.id) }} className="userBtn">unfolowed</button>
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

        <div className="pagination">
            {
                pages.map(item => {
                    return <button
                        key={item}
                        className={props.carrentPage === item ? 'activePagination paginationItem' : 'paginationItem'}
                        onClick={() => { props.onPageChanged(item) }}>
                        {item}
                    </button>
                })
            }
        </div>
    </div>
}

export default Users