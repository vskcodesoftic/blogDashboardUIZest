import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import {
    Router,
    Route,
    Switch
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
/*import 'font-awesome/css/font-awesome.min.css';*/
import 'assets/scss/zest-admin.css';
import 'assets/fonts/simple-line-icons.css';

import { store } from './store/_helpers';


import  App  from './App';
import { Provider } from 'react-redux';


import * as serviceWorker from './serviceWorker';

// setup fake backend

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
