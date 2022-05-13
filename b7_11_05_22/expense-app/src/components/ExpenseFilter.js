import React from "react";

export default function ExpenseFilter({
	filteredYear,
	yearList,
	onSelectYear,
}) {
	return (
		<select
			className="expense-filter"
			value={filteredYear}
			onChange={(e) => onSelectYear(e.target.value)}
		>
			{yearList.map((year) => (
				<option key={year}>{year}</option>
			))}
		</select>
	);
}
