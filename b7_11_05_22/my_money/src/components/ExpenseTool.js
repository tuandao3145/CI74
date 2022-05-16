import React, { useState } from "react";

// import data
import expenseList from "../data/expenseData";

// components
import AddExpenseForm from "./AddExpenseForm";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";
import ExpenseItem from "./ExpenseItem";

// component ExpenseTool
export default function ExpenseTool() {
	// hold data
	const [data, setData] = useState(expenseList);

	// hold filtered year
	const [filteredYear, setFilteredYear] = useState(new Date().getFullYear());

	// get year list from data
	const getYearList = () => {
		let yearList = [];
		for (let expense of data) {
			let year = new Date(expense.date).getFullYear();
			if (!yearList.includes(year) && !isNaN(year)) {
				yearList.push(year);
			}
		}
		return yearList.sort();
	};

	// hold list of year
	const [yearList, setYearList] = useState(getYearList());

	// filter data by year
	const filterData = (year) => {
		return [...data].filter((expense) => {
			let date = new Date(expense.date);
			return date.getFullYear() === year;
		});
	};

	// hold filtered data by year
	const [filteredData, setFilteredData] = useState(filterData(filteredYear));

	// hold chart data
	const chartData = [];

	// handle add new expense
	const addExpense = (newExpense) => {
		setData([...data, newExpense]);
	};

	// handle select year from filter
	const selectYear = (year) => {
		setFilteredYear(year);
		console.log("hi", filteredYear);
		setFilteredData(filterData(filteredYear));
		console.log("he", filteredData);
	};

	// render expense tool
	return (
		<div className="expense-tool">
			<AddExpenseForm onAddExpense={addExpense} />
			<div className="expense-filter">
				<span>Filter by year</span>
				<ExpenseFilter
					displayYear={filteredYear}
					yearList={yearList}
					onSelectYear={selectYear}
				/>
			</div>
			<div className="expense-chart">
				<ExpenseChart chartData={chartData} />
			</div>
			<div className="expense-list">
				{filteredData.map((expense) => {
					return (
						<ExpenseItem
							key={expense.id}
							id={expense.id}
							name={expense.name}
							amount={expense.amount}
							date={expense.date}
						/>
					);
				})}
			</div>
		</div>
	);
}
