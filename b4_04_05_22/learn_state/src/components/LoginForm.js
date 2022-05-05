import React, { useState } from "react";

const LoginForm = () => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	const changeEmail = (e) => {
		setEmail(e.target.value);
		console.log(email);
	};

	const changePassword = (e) => {
		setPassword(e.target.value);
		console.log(password);
	};

	const handleLogin = (e) => {
		e.preventDefault();
		if (!email || !password) {
			alert("Vui lòng nhập đầy đủ thông tin");
		} else {
			alert("Login successfully with email");
		}
	};

	return (
		<form onSubmit={handleLogin}>
			<h2>Login yoru account</h2>
			<div>
				Email:{" "}
				<input
					type="text"
					placeholder="Your email"
					onChange={changeEmail}
					name="email"
				/>
			</div>
			<div>
				Password:{" "}
				<input
					type="password"
					placeholder="Your password"
					onChange={changePassword}
					name="password"
				/>
			</div>
			<button>Login</button>
		</form>
	);
};

export default LoginForm;
