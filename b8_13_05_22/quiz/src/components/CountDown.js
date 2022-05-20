import React, { useEffect, useState } from "react";

//
export default function CountDown({ maxSecond, onStop, onStart }) {
	const [current, setCurrent] = useState(null);

	const startTimer = () => {
		// run setCurrent every second (1000ms) by setInterval
		const interval = setInterval(() => setCurrent(current - 1), 1000);

		// stop when current <= 0
		if (current <= 0) {
			clearInterval(interval);
			if (onStop) {
				onStop();
			}
		}

		// recall interval variable
		return () => clearInterval(interval);
	};
	// run 01 time only when this component is rendered in the first time
	useEffect(startTimer, [current]);

	// convert seconds to min:sec
	const min = Math.floor(current / 60);
	const sec = current % 60;

	// render countdown
	return (
		<div className="count-down">
			{current ? (
				<h2>
					Time remaining: {min.toString().length === 2 ? min : "0" + min}:
					{sec.toString().length === 2 ? sec : "0" + sec}
				</h2>
			) : (
				<h2>Total Time: {maxSecond}s</h2>
			)}
			{!current && <button onClick={() => setCurrent(maxSecond)}>Start</button>}
		</div>
	);
}
