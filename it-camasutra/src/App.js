import React from 'react'


import { Route, BrowserRouter } from 'react-router-dom';

import './App.css'
import Dialogs from './components/dialogs/Dialogs';
import Settings from './components/settings/Settings';
import News from './components/News/News';
import Header from './components/header/Header';
import NavBar from './components/navbar/NavBar';
import Profile from './components/profile/Profile';
import Music from './components/music/Music';



function App(props) {

  


  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className="wrapper-content">

          <Route path='/profile' render={() => <Profile state={props.state.profilePage} addPost={props.addPost} /> } />

          <Route path='/dialogs' render={() => <Dialogs state={props.state.messagesPage} />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
