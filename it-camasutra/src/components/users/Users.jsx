import React from 'react'
import './styleUsers.css'
import userImage from '../../images/user.jpg'
import { NavLink } from 'react-router-dom'



const Users = (props) => {
    // количество страниц - получаем разделив количество пользователе разделив на
    //  размер страницы (сколько пользователей на одной страницы - 20 штук)
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    // это число количество страниц на одном участке пагинации
    let portionSize = 10;

    // создаем массив который будет содержать номера страниц
    let pages = []
    // запускаем цикл от 1 до количества страниц
    for (let i = 1; i <= pagesCount; i++) {
        // и этими цифрами заполняем массив
        // получаем массив с номерами страниц
        pages.push(i)
    }

    // получаем количество порций страниц - получаем разделив количество страниц на размер порции 
    //(например у нас 411 страниц делим на размер порции = 10 получаем 41 и округляем в большую сторону получаем 42)
    let portionCount = Math.ceil(pagesCount / portionSize)

    // с помощью хука получаем значение portionNumber - это номер текущей порции, по умолчанию = 1
    let [portionNumber, setPortionNumber] = React.useState(1)
    // номер страницы которая является левой границей порции (текущий номер порции минус 1 и умнодаем на размер порции + 1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    // номер страницы которая является правой границей порции
    let rightPortionPageNumber = portionNumber * portionSize;

    // отрисовка JSX
    return <div className="userContainer">

                {/* Блок с пагинацией вверху страницы */}
                <div className="pagination">
                {/* если номер порции больше 1 то кнопку скрываем, эта кнопка по клику увеличивает номер текущей порции с помощью хука */}
                {portionNumber > 1 ? <button onClick={() => {setPortionNumber(portionNumber - 1)}} >Назад</button> : ''}
                    {
                        // Перед отрисовкой элементов пагинации мы фильтруем значения, должен быть больше значения номера страницы левой границы
                        // и меньше значения номера страницы правой границы, эти значения мапим
                        pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map(item => {
                            return <button
                                        key={item}
                                        className={props.carrentPage === item ? 'activePagination paginationItem' : 'paginationItem'}
                                        onClick={() => { props.onPageChanged(item) }}>
                                        {item}
                                    </button>
                        })
                    }
                {/* отрисовка кнопки вперед. если номер текущей порции станет больше общего количества порци то кнопка скрывается 
                сама кнопка с помощью хука увеличивает номер текущей порции*/}
                { portionNumber < portionCount ? <button onClick={ () => {setPortionNumber(portionNumber + 1)}} >Вперед</button> : ''}
                </div>


        {props.users.map(user => {
            return <div key={user.id} className="userWrapper">
                <div className="avatar">

                    {/* получив от сервера список пользователя мы прокинули этот массив через пропсы
                    Далее мы мапим (Map) этот массив и у каждого пользователя аватарку оборачиваем в тег NavLink*/}
                    <NavLink to={`/profile/${user.id}`}>
                        <img className="userAvatar" src={!user.photos.small ? userImage : user.photos.small} alt="" />
                    </NavLink>
                    {
                        user.followed 
                        // клик по кнопка отписаться
                        ? <button disabled={props.followingInPropgress.some(id => id === user.id)} 
                            onClick={() => { props.changeFollowThunkCreator(user.id) }}
                            className="userBtn">followed</button>

                            // клик по кнопке подписаться
                            // в disabled запишется результат метода массива some который возвращает true если хотябы один элемент массива 
                            // отвечает требованием тела callback функции в нашем случае это сверка идет с user.id
                        : <button disabled={props.followingInPropgress.some(id => id === user.id)} 
                            onClick={() => { props.changeUnFollowThunkCreator(user.id) }} 
                            className="userBtn">unfollowed</button>
                    }


                </div>
                <div className="userInfo">
                    <div className="userName">{user.name}</div>
                    <div className="userStatus">{user.status}</div>
                </div>
                <div className="userLocation">
                    <div className="country">Страна: {!user.location ? 'не указана' : user.location}</div>
                    <div className="city">Город: {!user.location ? 'не указан' : user.location}</div>
                </div>
            </div>
        })}

            <div className="pagination">
                {portionNumber > 1 ? <button onClick={() => {setPortionNumber(portionNumber - 1)}} >Назад</button> : ''}
                    {
                        pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map(item => {
                            return <button
                                        key={item}
                                        className={props.carrentPage === item ? 'activePagination paginationItem' : 'paginationItem'}
                                        onClick={() => { props.onPageChanged(item) }}>
                                        {item}
                                    </button>
                        })
                    }
                { portionCount > portionNumber ? <button onClick={ () => {setPortionNumber(portionNumber + 1)}} >Вперед</button> : ''}
            </div>
    </div>
}

export default Users