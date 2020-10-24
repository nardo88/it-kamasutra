import React from 'react'
import './App.css'
function App() {
  return (
    <div className="app-wrapper">
        <header className="header">
          <img className="img" src="https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg" alt=""/>
        </header>
        <nav className="nav">
          <ul>
            <li><a href="#!">Profile</a></li>
            <li><a href="#!">Messages</a></li>
            <li><a href="#!">News</a></li>
            <li><a href="#!">Music</a></li>
          </ul>
          <a href="#!">Settings</a>
        </nav>
        <div className="content">
          <img src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg" alt=""/>
        </div>
    </div>
  );
}

export default App;
