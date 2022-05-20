import React from "react";
import { Container, Nav, Button, Navbar as BSNavBar } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
// components

// component App
export default function NavBar() {
	// handle navigate to somewhere
	const navigate = useNavigate();

	// handle active link
	const navLinkClassName = ({ isActive }) =>
		isActive ? "nav-link text-primary" : "nav-link";

	// render App
	return (
		<BSNavBar expand="lg" bg="light">
			<Container>
				<BSNavBar.Brand>Routing App</BSNavBar.Brand>
				<Nav className="ms-auto">
					{/* <Nav.Link href="/">Home</Nav.Link> */}
					{/* <Nav.Link href="#">Product</Nav.Link> */}
					{/* <Nav.Link href="#">About</Nav.Link> */}
					{/* <Nav.Link href="/welcome">Welcome</Nav.Link> */}

					{/* <Link className="nav-link" to="/">
						Home
					</Link>
					<Link className="nav-link" to="/welcome">
						Welcome Link
					</Link>
					<Link className="nav-link" to="/product">
						Product
					</Link> */}

					<NavLink className={navLinkClassName} to="/">
						Home
					</NavLink>
					<NavLink className={navLinkClassName} to="/welcome">
						Welcome
					</NavLink>
					<NavLink className={navLinkClassName} to="/product">
						Product
					</NavLink>
					<Button
						variant="outline-secondary"
						className="login-btn"
						onClick={() => navigate("/login")}
					>
						Login
					</Button>
					<Button variant="primary" className="register-btn">
						Register
					</Button>
				</Nav>
			</Container>
		</BSNavBar>
	);
}
