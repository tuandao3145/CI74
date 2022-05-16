import React, { useState } from "react";

// component AddExpenseForm
export default function AddExpenseForm({ onAddExpense }) {
	// hold show form variable
	const [showForm, setShowForm] = useState(false);

	// hold new expense from form
	const [newExpense, setNewExpense] = useState({
		id: Date.now(),
		name: null,
		amount: null,
		date: null,
	});

	// handle add new expense, push event to parent
	const handleAddExpense = (e) => {
		e.preventDefault();

		onAddExpense(newExpense);

		// reset
		e.target.reset();
		setShowForm(false);
	};
	//
	const handleFormChange = (key, value) => {
		setNewExpense({ ...newExpense, [key]: value });
	};

	// render add expense form
	return (
		<div className="header">
			{showForm ? (
				<form onSubmit={handleAddExpense}>
					<input
						type="text"
						placeholder="Enter name here"
						onChange={(e) => handleFormChange("name", e.target.value)}
						name="name"
					/>
					<input
						type="number"
						placeholder="Enter amount here"
						onChange={(e) => handleFormChange("amount", e.target.value)}
						name="amount"
					/>
					<input
						type="date"
						placeholder="dd/mm/yyyy"
						onChange={(e) => handleFormChange("date", e.target.value)}
						name="date"
					/>
					<div className="btn-list">
						<button>ADD</button>
						<button onClick={() => setShowForm(false)}>CANCEL</button>
					</div>
				</form>
			) : (
				<button onClick={() => setShowForm(true)}>ADD NEW EXPENSE</button>
			)}
		</div>
	);
}
