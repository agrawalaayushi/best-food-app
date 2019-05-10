import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { Provider } from 'react-redux'
import configureStore from './store';
import * as serviceWorker from './serviceWorker';


const target = document.getElementById('root');

ReactDOM.render(
  <Provider store={configureStore()}>
   <App />
  </Provider>,
  target
 );
serviceWorker.unregister();
