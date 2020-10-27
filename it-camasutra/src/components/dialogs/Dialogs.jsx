import React from 'react'
import UserItem from './UserItem/UserItem'
import MessageItem from './MessageItem/MessageItem'
import './Dialogs.css'

const Dialogs = (props) => {

  const dialogsData = props.dialogData

  const messagesData = [
    { id: 1, message: 'Hi!' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'i want to sleep' },
    { id: 4, message: 'By!' },
  ]

  const dialogs = dialogsData.map(item => <UserItem name={item.name} id={item.id} />)
  const messages = messagesData.map(item => <MessageItem message={item.message} />)

  return (
    <div className="content">
      <div className="contentWrapper">
        <div className="users">
          <ul className="users__list">
            {dialogs}
          </ul>
        </div>
        <div className="messages">
          <ul className="messages__list">
            {messages}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Dialogs