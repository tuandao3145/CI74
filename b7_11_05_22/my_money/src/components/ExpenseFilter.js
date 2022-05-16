import React from "react";

export default function ExpenseFilter({ displayYear, yearList, onSelectYear }) {
	return (
		<select
			className="expense-filter"
			onChange={(e) => onSelectYear(e.target.value)}
		>
			{yearList.map((year) => (
				<option value={year}>{year}</option>
			))}
		</select>
	);
}
