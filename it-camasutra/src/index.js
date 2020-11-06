import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store  from './redux/redux-store'
import reportWebVitals from './reportWebVitals';

export const renderDom = () => {
    ReactDOM.render(
      <React.StrictMode>
        
        <App state={store.getState()} dispatch={store.dispatch} store={store} />

      </React.StrictMode>,
      document.getElementById('root')
    );
  }

renderDom()

store.subscribe(renderDom)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

