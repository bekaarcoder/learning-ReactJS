import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense } from '../actions/expenses';

const EditExpense = (props) => {
	console.log(props);
	return (
		<div className="container">
			<h3>Edit your Expense</h3>
			<ExpenseForm
				expense={props.expense}
				onSubmit={(expense) => {
					props.dispatch(editExpense(props.expense.id, expense));
					props.history.push('/');
				}}
			/>
		</div>
	);
};

const mapStateToProps = (state, props) => {
	return {
		expense: state.expenses.find((expense) => {
			return expense.id === props.match.params.id
		})
	};
};

export default connect(mapStateToProps)(EditExpense);