

// импортируем useState
import React, {useState, useEffect} from 'react'
// наша компонента
const ProfileStatusWithHooks = (props) => {

    // показатель активности input
    let [editMode, setEditMode] = useState(false);
    // текст статуса
    let [status, setStatus] = useState(props.status);
    
    // активация поля input
    const activateEditMode = () => {
        setEditMode(true)
    }
    // диактивация input после потери фокуса
    const deActivateEditMode = () => {
        setEditMode(false)
        // в пропсах к нам пришел колбэк который будет 
        // на сервер отправлять наш конечный статус
        props.changeStatus(status)
    }
    // обеспечение flux круговорота
    const statusOnChange = (e) =>{
        setStatus(e.currentTarget.value)
        
    }

    useEffect(() => {
        // мы записываем в локальный state значение status из пропсов
        setStatus(props.status)
        // если это значение было изменено
    }, [props.status])


    return (
        <div className="wrapper">
            {
                // если editMode содержит true
                editMode
                // то отрисовываем input
                ? <input onChange={statusOnChange} onBlur={deActivateEditMode} autoFocus value={status} type="text"/> 
                // иначе отрисовываем span
                : <span onDoubleClick={activateEditMode} className="statusText">{ !props.status ? 'статуса нет' : props.status}</span>
            }
        </div>
    )
}


export default ProfileStatusWithHooks