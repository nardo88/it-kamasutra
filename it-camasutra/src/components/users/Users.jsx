import React from 'react'
import './styleUsers.css'
import userImage from '../../images/user.jpg'
import { NavLink } from 'react-router-dom'
import userApi from '../../api/api'



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

                    {/* получив от сервера список пользователя мы прокинули этот массив через пропсы
                    Далее мы мапим (Map) этот массив и у каждого пользователя аватарку оборачиваем в тег NavLink*/}
                    <NavLink to={`/profile/${user.id}`}>
                        <img className="userAvatar" src={!user.photos.small ? userImage : user.photos.small} alt="" />
                    </NavLink>


                    {

                        // клик по кнопка отписаться
                        user.followed ? <button onClick={() => { 
                            userApi.getUnFollowed(user.id)
                            .then(data => {
                                if(data.resultCode === 0){
                                    props.unFollow(user.id) 
                                }
                            })


                            
                        }} className="userBtn">followed</button> 
                        // клик по кнопке подписаться
                        : <button onClick={() => { 
                            
                            userApi.getFollowed(user.id)
                            .then(data => {
                                if(data.resultCode === 0){
                                    props.follow(user.id) 
                                }
                            })

                            
                        }} className="userBtn">unfollowed</button>
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