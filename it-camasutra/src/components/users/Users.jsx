import React from 'react'
import './styleUsers.css'

import * as axios from 'axios'

import userImage from '../../images/user.jpg'

const Users = (props) => {

    function getUsers() {
        // если из пропсов пришел пустой state
        if (props.users.length === 0) {
            // вызываем axios и применяем метод get. На вход даем ему URL (этот 
            // адрес вернет нам список пользователей в формате JSON). Axios сам распарсит JSON 
            // и в response мы получим массив объектов
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                // затем мы вызываем callback функцию, которая пришла к нам через props
                // и передаем ей наш массив
                props.setUsers(response.data.items)
                // после этого reducer уже получит state и передаст его компоненте
            })
        }
    }



    return (
        <div className="userContainer">
            <button className="UserBtn" onClick={getUsers} >Получить пользователей</button>
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
                        <div className="country">Страна: {'user.location.country'}</div>
                        <div className="city">Город: {'user.location.city'}</div>
                    </div>
                </div>
            })}
        </div>
    )
}

export default Users