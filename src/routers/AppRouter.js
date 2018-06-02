import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import ExpenseDashboard from '../components/ExpenseDashboard';
import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import HelpPage from '../components/HelpPage';
import NotFound from '../components/NotFound';
import Header from '../components/Header';


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <div className="container-fluid">
        <Switch>
          <Route
            path="/"
            component={ExpenseDashboard}
            exact={true}
          />
          {/* Create route */}
          <Route
            path="/create"
            component={AddExpense}
          />
          {/* Edit route */}
          <Route
            path="/edit/:id"
            component={EditExpense}
          />
          {/* Help route */}
          <Route
            path="/help"
            component={HelpPage}
          />
          {/* 404 */}
          <Route
            component={NotFound}
          />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default AppRouter;