import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Demo from './Demo';
import {Provider} from 'react-redux'
import store from './store'

ReactDOM.render(
<Provider store={store}>

  <Demo />
</Provider>,
    
  document.getElementById('root')
);

