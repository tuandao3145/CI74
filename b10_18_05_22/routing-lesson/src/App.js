import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import WelcomePage from "./components/WelcomePage";
import ProductPage from "./components/ProductPage";
import LoginPage from "./components/LoginPage";

// components
import NavBar from "./components/NavBar";

// component App
export default function App() {
	// render App
	return (
		<BrowserRouter>
			<div className="App">
				<NavBar />
				<Container className="content">
					<h1>This is page content</h1>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/welcome" element={<WelcomePage />} />
						<Route path="/product" element={<ProductPage />} />
						<Route path="/login" element={<LoginPage />} />
					</Routes>
				</Container>
			</div>
		</BrowserRouter>
	);
}
