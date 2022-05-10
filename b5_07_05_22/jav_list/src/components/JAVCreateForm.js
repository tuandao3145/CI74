import React, { useState } from "react";

export default function JAVCreateForm({ onAddItem }) {
	const [name, setName] = useState();

	const handleCreateItem = (event) => {
		event.preventDefault();

		if (!name) {
			alert("Nhập vào tên");
			return;
		}

		onAddItem(name); // addItem(name)
	};

	return (
		<form onSubmit={handleCreateItem}>
			<input type="text" onChange={(event) => setName(event.target.value)} />
			<button>Thêm</button>
		</form>
	);
}
