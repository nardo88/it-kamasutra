import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css'
import Settings from './components/settings/Settings';
import News from './components/News/News';
import HeaderContainer from './components/header/HeaderContainer';
import NavBar from './components/navbar/NavBar';
import Music from './components/music/Music';
import DialogsContainer from './components/dialogs/DialogsContainer';
import UsersContainer from './components/users/UserContainer';
import ProfileContainer from './components/profile/ProfileContainer';
import Login from './components/login/Login';
import { connect } from 'react-redux';

import {initializeApp} from './redux/app-reducer'
import Preloader from './components/common/preloader';


class App extends React.Component {
  // после монтажа делаем запрос на сервер
  componentDidMount(){
    // вызываем thunk для получения данных
    // авторизованы ли мы 
    this.props.initializeApp()

  }

  render(){

    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <HeaderContainer />
          <NavBar />
          <div className="wrapper-content">
            <Route path='/profile/:userId?' render={() => <ProfileContainer /> } />
            <Route path='/dialogs' render={() => <DialogsContainer />} />
            <Route path='/news' render={() => <News />} />
            <Route path='/music' render={() => <Music />} />
            <Route path='/settings' render={() => <Settings />} />
            <Route path='/users' render={() => <UsersContainer />} />
            <Route path='/login' render={() => <Login /> } />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToPropt = state => {
  return {
    initialized: state.app.initialized
  }
}

export default connect(mapStateToPropt, { initializeApp })(App)
