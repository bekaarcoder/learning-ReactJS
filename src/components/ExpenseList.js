import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from "../selectors/expenses";

const ExpenseList = (props) => (
  <div>
    <h3 className="text-center mb-3">Expense List</h3>
    <div className="row justify-content-center">
      <div className="col-md-6">
        {
          props.expenses.length > 0 ?
          props.expenses.map((expense) => {
            {/* Old JS way */}
            {/* return <ExpenseListItem key={expense.id} expense={expense} /> */}

            {/* ES^6 way - Spread operator */}
            return <ExpenseListItem key={expense.id} {...expense}/>
          }) : <p className="text-center">No expense to display</p>
        }
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  }
};

// HOC
export default connect(mapStateToProps)(ExpenseList);