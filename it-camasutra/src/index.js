import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store  from './redux/state'
import reportWebVitals from './reportWebVitals';

export const renderDom = state => {
    ReactDOM.render(
      <React.StrictMode>
        <App state={store.state} addPost={store.addPost.bind(store)} addPostText={store.addPostText.bind(store)} />
      </React.StrictMode>,
      document.getElementById('root')
    );
  }

renderDom(store.state)


store.subscribe(renderDom)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

