import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

// объявляем функцию которая принимает компонент
export const withAuthRedirect = (Component) => {
    
    // создаем класс который будет отрисовывать компоненту которая пришла в hoc
    // но при этом будет происходить проверка.
    class RedirectComponent extends React.Component {
        render() {
            // если в пропсах классовой компоненты RedirectComponent
            // значение из state isAuth = false то мы вызываем Redirect
            if (!this.props.isAuth) return <Redirect to="/login" />
            // иначе возвращаем ту компоненту которую получил hoc 
            // и в нее прокидываем все пропсы которые пришли в слассовую
            // компоненту RedirectComponent
            return <Component {...this.props} />
        }
    }
    // создаем функцию которая сформирует пропсы для 
    // компоненты которую вернет connect
    const mapStateToProps = (state)=> {
        return {
            isAuth: state.auth.isAuth
        }
    }
    // создаем новую компоненту с помощью connect в нее прокидываем пропсы
    const RedirectComponentConnect = connect (mapStateToProps)(RedirectComponent)

    // возвращаем классовую компоненту RedirectComponent
    return RedirectComponentConnect
}



