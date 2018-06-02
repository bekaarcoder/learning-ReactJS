import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';

// Old Way
/* const ExpenseListItem = (props) => (
  <div>
    <h3>{props.expense.description}</h3>
    <p>{props.expense.amount} - {props.expense.createdAt}</p>
  </div>
); */

// ES6 way
const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => (
  <div>
    <h3>{description}</h3>
    <p>{amount} - {createdAt}</p>
    <button onClick={() => {
      dispatch(removeExpense({id}));
    }}>Remove</button>
    <Link className="btn btn-primary ml-2" to={`/edit/${id}`}>Edit</Link>
  </div>
);

export default connect()(ExpenseListItem);