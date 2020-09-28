import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Lesson_02} from "./Examples/02_components/Lesson_02";

React.cloneElement('div', null, 'Just div')
React.cloneElement('input', {className: 'justInput'})

ReactDOM.render(
  <React.StrictMode>
    <Lesson_02 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
