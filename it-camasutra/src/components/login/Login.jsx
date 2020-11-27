import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../common/Textarea'
import {requiredField, maxLength} from '../../utils/validators'
import { connect } from 'react-redux'
import {login} from '../../redux/reducer-auth'
import { Redirect } from 'react-router-dom'
import style from '../../components/common/Textarea.module.css'

const LoginForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div className="form__item">
                    <Field component={Input} name={'email'} placeholder="Email" validate={[requiredField, maxLength]}/>
                </div>
                <div className="form__item">
                    <Field component={Input} name={'password'} placeholder="Password" type="password" validate={[requiredField, maxLength]}/>
                </div>
                <div className="form__item">
                    <Field component={'input'} name={'rememberMe'} type="checkbox" />
                    Remember me
                </div>
                {
                    props.error && <div className={style.somthingWrong}>{props.error}</div> 
                }
                
                <div className="form__item">
                    <button>OK</button>
                </div>
            </form>
    )
}

const LoginReduxForm = reduxForm({
    // здесь задаем уникальное имя формы по которому
    // мы в дальнейшем будем обращаться к форме
    form: 'login'
})(LoginForm)

const Login = (props) => {
    // callback для Хока

    
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    // отрисовка JSX

    // есть в state значение isAuth
    // true тогда проводим редирект на страницу с профилем
    if (props.isAuth){
        return <Redirect to={'/profile'}/>
    }
    return (

        <div className="wrapper">
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, { login })(Login)