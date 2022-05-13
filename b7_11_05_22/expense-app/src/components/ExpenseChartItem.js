import React, { useState } from "react";
import "../css/ExpenseChartItem.css";
//
export default function ChartItem({ income, monthExpense }) {
	const percent = Number(
		Math.round(monthExpense / income + "e+2") + "e-2"
	).toFixed(2);
	const style = {
		height: 300 - percent * 300,
	};
	return (
		<div className="chart-item">
			<div className="percent" style={style}></div>
		</div>
	);
}
