import React from 'react'
import { Field, reduxForm } from 'redux-form'

const LoginForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div className="form__item">
                    <Field component={'input'} name={'login'} placeholder="Login"/>
                </div>
                <div className="form__item">
                    <Field component={'input'} name={'password'} placeholder="Password"/>
                </div>
                <div className="form__item">
                    <Field component={'input'} name={'rememberMe'} type="checkbox" />
                    Remember me
                </div>
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

const Login = () => {
    // callback для Хока
    const onSubmit = (formData) => {
        console.log(formData);
    }
    // отрисовка JSX
    return (
        <div className="wrapper">
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

export default Login