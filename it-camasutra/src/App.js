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



function App(props) {

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
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
