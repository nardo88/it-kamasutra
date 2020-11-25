import React from 'react'
import style from './Textarea.module.css'

export const Textarea = ({input, meta, ...props}) => {
    let err = meta.error && meta.touched ? style.error : ''
    
    return (
        <div>
            <textarea {...input} {...props} className={ `${style.textArea} ${err}`} />
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    let err = meta.error && meta.touched ? style.error : ''
    
    return (
        <div>
            <input {...input} {...props} className={ `${style.input} ${err}`} />
        </div>
    )
}