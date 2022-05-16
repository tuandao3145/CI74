import React from "react";

export default function ExpenseItem({ id, name, amount, date }) {
	return (
		<div className="expense-item">
			<div className="date">{date}</div>
			<div className="name">{name}</div>
			<div className="amount">$ {amount}</div>
		</div>
	);
}
