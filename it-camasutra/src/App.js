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



function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className="wrapper-content">
          <Route path='/profile' component={Profile}/>
          <Route path='/dialogs' component={Dialogs}/>
          <Route path='/news' component={News}/>
          <Route path='/music' component={Music}/>
          <Route path='/settings' component={Settings}/>
          
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
