import React, { useState } from "react";
import "../css/SignUpForm.css";
import { FaAsterisk } from "react-icons/fa";

//components
import SignUpModal from "./SignUpModal.js";

export default function SignUpForm() {
	// state for opening sign-up form
	const [showForm, setShowForm] = useState(true);

	// state for opening modal
	const [showModal, setShowModal] = useState(false);

	// state to store all sign-upform fields
	const [user, setUser] = useState({
		firstName: null,
		lastName: null,
		gender: null,
		age: null,
		address: null,
		email: null,
		password: null,
		confirmPassword: null,
	});

	// handle on change of the whole form
	const handleFormChange = (key, value) => {
		setUser({ ...user, [key]: value });
	};

	// handle submit signup form
	const handleSignUp = (e) => {
		e.preventDefault();
		const {
			firstName,
			lastName,
			gender,
			age,
			address,
			email,
			password,
			confirmPassword,
		} = {
			...user,
		};
		console.log(user);
		//
		if (!firstName || !lastName || !email || !password || !confirmPassword) {
			alert("All fields must be valid data");
			return;
		} else if (age < 0) {
			alert("Age must be greater than 1 yrs!");
			return;
		} else if (password.length < 6) {
			alert("Password length must greater than 6 characters");
			return;
		} else {
			setShowForm(false);
			setShowModal(true);
		}
	};

	// clear sign up form
	const clearForm = () => {
		document.getElementById("signUpForm").reset();
	};

	// obj holds props to pass to SignUpModal component
	const info = {
		showModal: setShowModal,
		clearForm: clearForm,
		user: user,
	};

	//render signup form
	return (
		<div className="signUpContainer">
			<form
				onSubmit={handleSignUp}
				className="center"
				id="signUpForm"
				hidden={!showForm}
			>
				<h2>Sign-up your account</h2>
				<div className="center">
					<label>
						First Name <FaAsterisk size={7} /> :
					</label>
					<input
						type="text"
						placeholder="Your first name"
						onChange={(e) => handleFormChange("firstName", e.target.value)}
						name="firstName"
					/>
				</div>
				<div className="center">
					<label>
						Last Name <FaAsterisk size={7} /> :
					</label>
					<input
						type="text"
						placeholder="Your last name"
						onChange={(e) => handleFormChange("lastName", e.target.value)}
						name="lastName"
					/>
				</div>
				<div className="center">
					<label>Gender: </label>
					<select onChange={(e) => handleFormChange("gender", e.target.value)}>
						<option value="">-- --</option>
						<option value="Male">Male</option>
						<option value="Female">Female</option>
					</select>
				</div>
				<div className="center">
					<label>Age: </label>
					<input
						type="text"
						placeholder="Your age"
						onChange={(e) => handleFormChange("age", e.target.value)}
						name="age"
					/>
				</div>
				<div className="center">
					<label>Address: </label>
					<input
						type="text"
						placeholder="Your address"
						onChange={(e) => handleFormChange("address", e.target.value)}
						name="address"
					/>
				</div>
				<div className="center">
					<label>
						Email <FaAsterisk size={7} /> :
					</label>
					<input
						type="text"
						placeholder="Your email"
						onChange={(e) => handleFormChange("email", e.target.value)}
						name="email"
					/>
				</div>
				<div className="center">
					<label>
						Password <FaAsterisk size={7} /> :
					</label>
					<input
						type="password"
						placeholder="Your password"
						onChange={(e) => handleFormChange("password", e.target.value)}
						name="password"
					/>
				</div>
				<div className="center">
					<label>
						Confirm Password <FaAsterisk size={7} /> :
					</label>
					<input
						type="password"
						placeholder="Confirm entered password"
						onChange={(e) =>
							handleFormChange("confirmPassword", e.target.value)
						}
						name="confirmPassword"
					/>
				</div>
				<button>Register</button>
			</form>
			{showModal && <SignUpModal {...info} />}
		</div>
	);
}
