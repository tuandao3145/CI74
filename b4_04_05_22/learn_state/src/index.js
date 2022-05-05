import React from "react";
import { createRoot } from "react-dom/client";
import "./App.css";

//component file
import App from "./components/App.js";
import LoginForm from "./components/LoginForm.js";

//
const element = (
	<>
		<App />
		<LoginForm />
	</>
);

// render root
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(element);
