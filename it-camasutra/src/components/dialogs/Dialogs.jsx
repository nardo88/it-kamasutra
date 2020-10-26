import React from 'react'
import { NavLink } from 'react-router-dom'
import './Dialogs.css'


const Dialogs = () => {
    return (
      <div className="content">
        <div className="contentWrapper">
          <div className="users">
            <ul className="users__list">
              <li className="users__item">
                <NavLink className='item' activeClassName='active-user' to='/dialogs/1'>Дмитрий</NavLink>
              </li>
              <li className="users__item">
                <NavLink className='item' activeClassName='active-user' to='/dialogs/2'>Ольга</NavLink>
              </li>
              <li className="users__item">
                <NavLink className='item' activeClassName='active-user' to='/dialogs/3'>Максим</NavLink>
              </li>
              <li className="users__item">
                <NavLink className='item' activeClassName='active-user' to='/dialogs/4'>Мария</NavLink>
              </li>
              <li className="users__item">
                <NavLink className='item' activeClassName='active-user' to='/dialogs/5'>Александр</NavLink>
              </li>
              <li className="users__item">
                <NavLink className='item' activeClassName='active-user' to='/dialogs/6'>Светлана</NavLink>
              </li>
            </ul>
          </div>
          <div className="messages">
            <ul className="messages__list">
              <li className="messades__item">Hi!</li>
              <li className="messades__item">How are you?</li>
              <li className="messades__item">By!</li>
            </ul>
          </div>
        </div>


      </div>

  )
}

export default Dialogs