import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';
import ExpensesTotal from './ExpensesTotal';

const ExpenseDashboard = () => (
  <div>
    <h1>Expensify App</h1>
    <ExpensesTotal />
    <ExpenseListFilter />
    <ExpenseList />
  </div>
);

export default ExpenseDashboard;