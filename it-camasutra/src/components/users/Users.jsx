import React from 'react'
import './styleUsers.css'

const Users = (props) => {
    return(
        <div className="userContainer">
            {props.users.map(user => {
                return <div key={user.id} className="userWrapper">
                    <div className="avatar">
                        <img className="userAvatar" src={user.photoUrl} alt=""/>
                        {
                            user.folowed ? <button onClick={() => {props.unFollow(user.id)}} className="userBtn">folowed</button> : <button onClick={() => {props.follow(user.id)}} className="userBtn">unfolowed</button>
                        }
                    </div>
                    <div className="userInfo">
                        <div className="userName">{user.fullName}</div>
                        <div className="userStatus">{user.status}</div>
                    </div>
                    <div className="userLocation">
                    <div className="country">Страна: {user.location.country}</div>
                    <div className="city">Город: {user.location.city}</div>
                    </div>
                </div>
            })}
        </div>
    )
}

export default Users