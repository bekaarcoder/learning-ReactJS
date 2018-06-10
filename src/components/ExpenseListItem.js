import React from 'react';
import { connect } from 'react-redux';
import { startRemoveExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

// Old Way
/* const ExpenseListItem = (props) => (
  <div>
    <h3>{props.expense.description}</h3>
    <p>{props.expense.amount} - {props.expense.createdAt}</p>
  </div>
); */

// ES6 way
const ExpenseListItem = ({dispatch, id, description, amount, createdAt, startRemoveExpense}) => (
  <div className="card mb-3">
    <div className="card-body">
      <h5 className="card-title">{description}</h5>
      <h6 className="card-subtitle text-muted mb-2">{moment(createdAt).format('MMMM Do, YYYY')}</h6>
      <h6>Amount Spent - Rs.{numeral(amount).format('0,0.00')}</h6>
      <button className="btn btn-danger" onClick={() => {
        // dispatch(removeExpense({id}));
        startRemoveExpense({id});
      }}>Remove</button>
      <Link className="btn btn-primary ml-2" to={`/edit/${id}`}>Edit</Link>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
});

export default connect(undefined, mapDispatchToProps)(ExpenseListItem);