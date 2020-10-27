import React from 'react'
import '../Dialogs.css'

const MessageItem = (props) => {
    return (
        <li className="messades__item">{props.message}</li>
    )
}

export default MessageItem