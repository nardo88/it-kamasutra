import React from 'react'
import { NavLink } from 'react-router-dom'
import './Dialogs.css'

const UserItem = (props) => {

  let path = '/dialogs/' + props.id
  return(
    <li className="users__item">
      <NavLink className='item' activeClassName='active-user' to={path}>{props.name}</NavLink>
    </li>
  )
}

const MessageItem = (props) => {
  return(
    <li className="messades__item">{props.message}</li>
  )
}


const Dialogs = () => {
    return (
      <div className="content">
        <div className="contentWrapper">
          <div className="users">
            <ul className="users__list">
              <UserItem name='Дмитрий' id='1' />
              <UserItem name='Ольга' id='2' />
              <UserItem name='Максим' id='3' />
              <UserItem name='Мария' id='4' />
              <UserItem name='Александр' id='5' />
              <UserItem name='Светлана' id='6' />
             </ul>
          </div>
          <div className="messages">
            <ul className="messages__list">
              <MessageItem message='Hi!' />
              <MessageItem message='How are you?' />
              <MessageItem message='By!' />
            </ul>
          </div>
        </div>


      </div>

  )
}

export default Dialogs