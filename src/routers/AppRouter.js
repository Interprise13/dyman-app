import React from 'react';
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import HelpPage from '../components/HelpPage';
import LoginPage from '../components/LoginPage';
import AllJobs from '../components/AllJobs';
import UserJobs from '../components/UserJobs';
import AllocateJobPage from '../components/AllocateJobPage';
import UserViewJob from '../components/UserViewJob';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();


const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
                <PrivateRoute path="/create" component={AddExpensePage} />
                <PrivateRoute path="/edit/:id" component={AllocateJobPage} />
                <PrivateRoute path="/userview/:id" component={UserViewJob} />
                <PrivateRoute path="/alljobs" component={AllJobs} />
                <PrivateRoute path="/userjobs" component={UserJobs} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>

);

export default AppRouter;
