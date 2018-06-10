import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense } from '../actions/expenses';

/*export class EditExpense extends React.Component {
	onSubmit = (expense) => {
		this.props.
	}
	render() {
		return (
			<div className="container">
				<h3>Edit your Expense</h3>
				<ExpenseForm
					expense={this.props.expense}
					onSubmit={this.onSubmit}
				/>
			</div>
		);
	}
}*/

const EditExpense = (props) => {
	console.log(props);
	return (
		<div className="container">
			<h3>Edit your Expense</h3>
			<ExpenseForm
				expense={props.expense}
				onSubmit={(expense) => {
					props.startEditExpense(props.expense.id, expense);
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

const mapDispatchToProps = (dispatch, props) => ({
	startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);