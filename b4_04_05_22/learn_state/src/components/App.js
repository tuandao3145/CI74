import React, { useState } from "react";

const App = () => {
	const [iq, setIQ] = useState(112); // "iq" is a value, setIQ is a function to update "iq"
	const [person, setPerrson] = useState({
		name: "TuanDao",
		age: 25,
		job: "QA engineer",
	});

	const showIQ = () => {
		setIQ(Math.floor(Math.random() * (200 - 50 + 2) + 50));
	};

	const changeJob = () => {
		console.log(person.job);
		setPerrson((prev) => {
			if (prev.job === "Dev") {
				prev.job = "QA engineer";
			} else {
				prev.job = "Dev";
			}
			console.log(prev.job);
			return {
				...prev,
				job: prev.job,
			};
		});
	};

	return (
		<div id="app">
			<div className="iq-test">
				<h3>
					Your IQ is: <span>{iq}</span>
				</h3>
				<button onClick={showIQ}>Test IQ</button>
			</div>
			<div className="person">
				<h3>Person</h3>
				<div>Name: {person.name}</div>
				<div>Age: {person.age}</div>
				<div>Job: {person.job}</div>
				<button onClick={changeJob}>Change job!</button>
			</div>
		</div>
	);
};

export default App;
