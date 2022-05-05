import React from "react";
import "../css/SignUpModal.css";

const SignUpModal = (props) => {
	// this {openModal} is a function to access setOpenModal function from the parent

	// handle close button
	const closeModal = () => {
		props.openModal(false);
		props.clearForm();
	};

	const displayInfo = {
		...props.info,
		fullName: props.info.firstName + " " + props.info.lastName,
	};

	return (
		<div className="modalBackground center">
			<div className="modalContainer center">
				<button onClick={closeModal} className="titleCloseBtn">
					X
				</button>
				<div className="modalTitle">
					<h1>You signed up with this info:</h1>
				</div>
				<div className="modalBody center">
					<div className="fullName center">
						<label>Full Name:</label>
						<span>{displayInfo.fullName}</span>
					</div>
					{displayInfo.gender && (
						<div className="gender center">
							<label>Gender:</label>
							<span>{displayInfo.gender}</span>
						</div>
					)}
					{displayInfo.age && (
						<div className="age center">
							<label>Age:</label>
							<span>{displayInfo.age}</span>
						</div>
					)}
					{displayInfo.address && (
						<div className="address center">
							<label>Address:</label>
							<span>{displayInfo.address}</span>
						</div>
					)}
					<div className="email center">
						<label>Email:</label>
						<span>{displayInfo.email}</span>
					</div>
				</div>
				<div className="modalFooter">
					<button onClick={closeModal} className="footerCloseBtn">
						OK
					</button>
				</div>
			</div>
		</div>
	);
};

export default SignUpModal;
