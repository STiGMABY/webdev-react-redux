import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Lesson_02} from "./Examples/02_components/Lesson_02";
import {Lesson_03} from "./Examples/03_state/Lesson_03";
import {Lesson_04} from "./Examples/04_props/Lesson_04";
import {Lesson_06} from "./Examples/06_events/Lesson_06";
import {Lesson_07} from "./Examples/07_conditional_rendering/Lesson_07";
import {Lesson_08} from "./Examples/08_list_and_keys/Lesson_08";
import {Lesson_10} from "./Examples/10_form/Lesson_10";

React.cloneElement('div', null, 'Just div')
React.cloneElement('input', {className: 'justInput'})

ReactDOM.render(
  <React.StrictMode>
    <Lesson_10 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
