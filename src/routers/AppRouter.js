import React from 'react';
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import LoginPage from '../components/LoginPage';
import ExpenseDashboard from '../components/ExpenseDashboard';
import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import NotFound from '../components/NotFound';
// import Header from '../components/Header';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      {/*<Header />*/}
      {/*<div className="container-fluid">*/}
        <Switch>
          <PublicRoute
            path="/"
            component={LoginPage}
            exact={true}
          />
          <PrivateRoute
            path="/dashboard"
            component={ExpenseDashboard}
          />
          {/* Create route */}
          <PrivateRoute
            path="/create"
            component={AddExpense}
          />
          {/* Edit route */}
          <PrivateRoute
            path="/edit/:id"
            component={EditExpense}
          />
          {/* 404 */}
          <Route
            component={NotFound}
          />
        </Switch>
      {/*</div>*/}
    </div>
  </Router>
);

export default AppRouter;