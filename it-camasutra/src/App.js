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
import DialogsContainer from './components/dialogs/DialogsContainer';



function App(props) {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className="wrapper-content">

          <Route path='/profile' render={() => <Profile state={props.state.profilePage} dispatch={props.dispatch} store={props.store} /> } />

          <Route path='/dialogs' render={() => <DialogsContainer store={props.store} />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
