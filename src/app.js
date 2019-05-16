import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import configureStore from './store/configureStore';
import { startSetJobs } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleJobs from './selectors/expenses';
import './styles/styles.scss';
import './firebase/firebase';


const store = configureStore();
console.log('testing');


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);


ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetJobs()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
})


ReactDOM.render(jsx, document.getElementById('app'));
