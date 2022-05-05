import React, { useState } from "react";
import "../css/SignUpForm.css";
import { FaAsterisk } from "react-icons/fa";

//components
import SignUpModal from "./SignUpModal.js";

const SignUpForm = () => {
	// state for opening modal
	const [openModal, setOpenModal] = useState(false);

	// state to store all info
	const [info, setInfo] = useState();

	// state for fields on form
	const [firstName, setFirstName] = useState();
	const [lastName, setLastName] = useState();
	const [gender, setGender] = useState();
	const [age, setAge] = useState();
	const [address, setAddress] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [confirmPassword, setConfirmPassword] = useState();

	// handle input action field on form
	const changeFirstName = (e) => {
		setFirstName(e.target.value);
	};

	const changeLastName = (e) => {
		setLastName(e.target.value);
	};

	const changeGender = (e) => {
		setGender(e.target.value);
	};

	const changeAge = (e) => {
		setAge(e.target.value);
	};

	const changeAddress = (e) => {
		setAddress(e.target.value);
	};

	const changeEmail = (e) => {
		setEmail(e.target.value);
	};

	const changePassword = (e) => {
		setPassword(e.target.value);
	};

	const changeConfirmPassword = (e) => {
		setConfirmPassword(e.target.value);
	};

	//
	const handleInfo = () => {
		setInfo({
			firstName: firstName,
			lastName: lastName,
			gender: gender,
			age: age,
			address: address,
			email: email,
			password: password,
		});
	};

	// handle submit signup form
	const handleSignUp = (e) => {
		e.preventDefault();
		handleInfo();
		console.log(info);
		if (
			!firstName ||
			!lastName ||
			!email ||
			!password ||
			!confirmPassword ||
			age <= 0 ||
			password.length < 6 ||
			password !== confirmPassword
		) {
			alert("All fields must be valid data");
		} else {
			handleInfo();
			setOpenModal(true);
		}
	};

	//
	const clearForm = () => {
		console.log("hello");
		document.getElementById("signUpForm").reset();
		console.log("done");
	};

	//
	const modalProps = {
		openModal: setOpenModal,
		clearForm: clearForm,
		info: info,
	};

	//render signup form
	return (
		<div className="signUpContainer">
			<form onSubmit={handleSignUp} className="center" id="signUpForm">
				<h2>Sign-up your account</h2>
				<div className="center">
					<label>
						First Name <FaAsterisk size={7} /> :
					</label>
					<input
						type="text"
						placeholder="Your first name"
						onChange={changeFirstName}
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
						onChange={changeLastName}
						name="lastName"
					/>
				</div>
				<div className="center">
					<label>Gender: </label>
					<input
						type="text"
						placeholder="Your gender"
						onChange={changeGender}
						name="gender"
					/>
				</div>
				<div className="center">
					<label>Age: </label>
					<input
						type="text"
						placeholder="Your age"
						onChange={changeAge}
						name="age"
					/>
				</div>
				<div className="center">
					<label>Address: </label>
					<input
						type="text"
						placeholder="Your address"
						onChange={changeAddress}
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
						onChange={changeEmail}
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
						onChange={changePassword}
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
						onChange={changeConfirmPassword}
						name="confirmPassword"
					/>
				</div>
				<button>Register</button>
			</form>
			{openModal && <SignUpModal {...modalProps} />}
		</div>
	);
};
// line 154, that syntax means if openModal is true, render SignUpModal
// line 154: this props has parameter is function setOpenModal
export default SignUpForm;
