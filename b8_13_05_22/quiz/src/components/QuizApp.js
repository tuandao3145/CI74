import React, { useState } from "react";

// context
import QuizContext from "../contexts/QuizContext";
import data from "../data/test_and_questions";

// components
import QuizList from "./QuizList";
import SearchBox from "./SearchBox";

// quiz app component
export default function QuizApp() {
	// current test suite
	const [testSuite, setTestSuite] = useState(null);

	// choose a test by click on it
	const chooseTest = (suiteID) => {
		setTestSuite(suiteID);
	};

	// make store for context
	const store = {
		data: data,
		testSuite: testSuite,
		chooseTest: chooseTest,
	};

	// render quiz app
	return (
		<QuizContext.Provider value={store}>
			<div className="quiz-app">
				<h1>Quiz App</h1>
				<SearchBox />
				<QuizList />
			</div>
		</QuizContext.Provider>
	);
}
