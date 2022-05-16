import React, { useState } from "react";
//

import ChartItem from "./ChartItem";
//
export default function ExpenseChart({ chartData }) {
	//
	return (
		<div className="expense-chart">
			<div className="chart">
				{chartData.map((data) => {
					return <ChartItem data={data} />;
				})}
			</div>
		</div>
	);
}
