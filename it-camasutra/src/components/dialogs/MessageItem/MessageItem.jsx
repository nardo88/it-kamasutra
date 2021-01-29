import React from 'react'
import style from '../Dialogs.module.css';


const MessageItem = (props) => {
    return (
        <li className={style.messades__item}>{props.message}</li>
    )
}

export default MessageItem