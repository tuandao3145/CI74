import React from "react";
import ExpenseItem from "./ExpenseItem";

// render expense list
export default function ExpenseList({ listData }) {
	return (
		<div className="expense-list">
			{listData.map((expense) => {
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
	);
}
