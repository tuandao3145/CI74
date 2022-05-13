import React, { useState } from "react";
import moment from "moment";
import "../css/ExpenseChart.css";
//

import ChartItem from "./ExpenseChartItem";
//
export default function ExpenseChart({ income, chartData }) {
	//
	const yearExpense = [
		{ id: 1, amount: 0 },
		{ id: 2, amount: 0 },
		{ id: 3, amount: 0 },
		{ id: 4, amount: 0 },
		{ id: 5, amount: 0 },
		{ id: 6, amount: 0 },
		{ id: 7, amount: 0 },
		{ id: 8, amount: 0 },
		{ id: 9, amount: 0 },
		{ id: 10, amount: 0 },
		{ id: 11, amount: 0 },
		{ id: 12, amount: 0 },
	];

	//
	for (let expense of chartData) {
		for (let month of yearExpense) {
			if (
				Number(moment(expense.date, "dd/mm/yyyy").format("mm")) === month.id
			) {
				month.amount += expense.amount;
			}
		}
	}

	//
	return (
		<div className="expense-chart">
			{yearExpense.map((monthExpense) => {
				return (
					<ChartItem
						key={monthExpense.id}
						income={income}
						monthExpense={monthExpense.amount}
					/>
				);
			})}
		</div>
	);
}
