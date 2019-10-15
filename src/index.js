import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import MyComponent from './MyComponent';
import MyButton from './MyButton';
import * as serviceWorker from './serviceWorker';

// var element = React.createElement('h1', { className: 'greeting' }, 'Hello, world!');
ReactDOM.render(
   <MyComponent>
       <MyButton>This is button</MyButton>
       </MyComponent>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
