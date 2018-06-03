const getTotalExpenses = (expenses) => {
	console.log(expenses);
	const expense = expenses.length > 0;
	if(expense) {
		return expenses.map((expense) => {
			return parseInt(expense.amount);
		}).reduce((expenseTotal, expense) => {
			return expenseTotal + expense;
		});
	} else {
		return 0;
	}
}

export default getTotalExpenses;