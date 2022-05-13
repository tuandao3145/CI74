import React, { useState } from "react";
import moment from "moment";
// import data
import expenseList from "../data/expenseData";

// components
import AddExpenseForm from "./ExpenseCreateForm";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";
import ExpenseList from "./ExpenseList";

// component ExpenseTool
export default function ExpenseApp() {
	// hold data
	const [data, setData] = useState(expenseList);
	// hold selected year
	const [filteredYear, setFilteredYear] = useState(2022);

	// income per month
	const income = 3000;

	// get year category in expense list
	const yearList = [
		...new Set(
			data.map((expense) => moment(expense.date, "dd/mm/yyyy").year())
		),
	].sort();

	// filter data
	const filteredData = data.filter(
		(expense) =>
			Number(moment(expense.date, "dd/mm/yyyy").year()) === Number(filteredYear)
	);

	// handle add new expense
	const addExpense = (newExpense) => {
		setData([...data, newExpense]);
		setFilteredYear(moment(newExpense.date, "dd/mm/yyyy").year());
	};

	// render expense tool
	return (
		<div className="expense-app">
			<AddExpenseForm onAddExpense={addExpense} />
			<div className="expense-filter-container">
				<span>Filter by year</span>
				<ExpenseFilter
					filteredYear={filteredYear}
					yearList={yearList}
					onSelectYear={setFilteredYear}
				/>
			</div>
			<ExpenseChart income={income} chartData={filteredData} />
			<ExpenseList listData={filteredData} />
		</div>
	);
}
