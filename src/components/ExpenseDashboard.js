import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';

const ExpenseDashboard = () => (
  <div>
    <h1>Expensify App</h1>
    <ExpenseListFilter />
    <ExpenseList />
  </div>
);

export default ExpenseDashboard;