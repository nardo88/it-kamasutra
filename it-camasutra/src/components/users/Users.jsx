import React from 'react'
import './styleUsers.css'
import * as axios from 'axios'
import userImage from '../../images/user.jpg'

const Users = (props) => {
    // debugger
    if (props.users.length === 0){
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)
        })
    }


    return(
        <div className="userContainer">
            {props.users.map(user => {
                return <div key={user.id} className="userWrapper">
                    <div className="avatar">
                        <img className="userAvatar" src={!user.photos.small ? userImage : user.photos.small} alt=""/>
                        {
                            user.folowed ? <button onClick={() => {props.unFollow(user.id)}} className="userBtn">folowed</button> : <button onClick={() => {props.follow(user.id)}} className="userBtn">unfolowed</button>
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