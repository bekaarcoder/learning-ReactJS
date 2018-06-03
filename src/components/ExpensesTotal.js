import React from 'react';
import { connect } from 'react-redux';
import getExpensesTotal from '../selectors/expenses-total.js';
import numeral from 'numeral';

const ExpensesTotal = (props) => (
	<div className="row">
		<div className="col-md-12">
			<h5>Your Total Expense : Rs.{numeral(props.expenses).format('0,0.00')}</h5>
		</div>
	</div>
);

const mapStateToProps = (state) => {
	return {
		expenses: getExpensesTotal(state.expenses)
	}
};

export default connect(mapStateToProps)(ExpensesTotal);