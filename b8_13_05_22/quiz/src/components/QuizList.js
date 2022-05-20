import React, { useContext } from "react";
import QuizContext from "../contexts/QuizContext";

// components
import CountDown from "./CountDown";

// component quiz list
export default function QuizList() {
	// get data from context
	const { data, testSuite, chooseTest } = useContext(QuizContext);
	let suiteData = {};
	if (testSuite !== null) {
		for (let suite of data) {
			if (suite.id === testSuite) {
				suiteData = suite;
			}
		}
	}
	// render
	return (
		<div className="quiz-list">
			{testSuite === null ? (
				<>
					{data.map((suite) => {
						return (
							<div
								key={suite.id}
								className="test-suite"
								onClick={() => chooseTest(suite.id)}
							>
								<div>{suite.name}</div>
							</div>
						);
					})}
				</>
			) : (
				<>
					<CountDown maxSecond={30} onStop={() => console.log("Time Over")} />
					{suiteData.questions.map((question) => {
						return (
							<div>
								{question.ask}
								<br />
								<br />
								<br />
							</div>
						);
					})}
					<button onClick={() => chooseTest(null)}>Back</button>
				</>
			)}
		</div>
	);
}
