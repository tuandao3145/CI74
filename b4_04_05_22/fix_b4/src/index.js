import React from "react";
import { createRoot } from "react-dom/client";
import "./App.css";

//components
import SignUpForm from "./components/SignUpForm.js";

//
const element = (
	<>
		<SignUpForm />
	</>
);

// render root
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(element);
