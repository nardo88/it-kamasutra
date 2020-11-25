import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../common/Textarea'
import {requiredField, maxLength} from '../../utils/validators'


const LoginForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div className="form__item">
                    <Field component={Input} name={'login'} placeholder="Login" validate={[requiredField, maxLength]}/>
                </div>
                <div className="form__item">
                    <Field component={Input} name={'password'} placeholder="Password" validate={[requiredField, maxLength]}/>
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