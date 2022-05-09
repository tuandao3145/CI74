import React, { useState } from "react";
import JAVCreateForm from "./JAVCreateForm";
import JAVItem from "./JAVItem";

export default function JAVTutorial() {
	const [data, setData] = useState([
		{ id: 1, name: "JAV001", date: "2022/05/06", watched: true },
		{ id: 2, name: "JAV002", date: "2022/05/07", watched: false },
		{ id: 3, name: "JAV003", date: "2022/05/08", watched: false },
	]);

	const addItem = (name) => {
		console.log("Tạo thêm 1 item với name là " + name);

		// tạo 1 item mới
		const newItem = {
			id: Date.now(),
			name: name,
			date: new Date().toISOString(),
			watched: false,
		};

		// data.push(newItem); // ở đây chúng tôi ko làm thế

		// tạo 1 mảng mới: gồm tất cả phần tử cũ của data + newItem
		const newData = [...data, newItem]; // newData phải là 1 mảng gồm tất cả phần tử cũ của data + newItem

		setData(newData);
	};

	const deleteItem = (itemId) => {
		const newData = [...data].filter((jav) => {
			return jav.id !== itemId;
		});
		setData(newData);
	};

	const watchItem = (itemId) => {
		const newData = [...data].map((jav) => {
			if (jav.id === itemId) {
				jav.watched = true;
			}
			return jav;
		});
		setData(newData);
	};

	const editItem = (itemId, newName) => {
		const newData = [...data].map((jav) => {
			if (jav.id === itemId) {
				jav.name = newName;
			}
			return jav;
		});
		setData(newData);
	};

	return (
		<div className="jav-tutorial">
			<h1>Japanese Anti Virus</h1>
			<JAVCreateForm onAddItem={addItem} />

			<div className="jav-list">
				{data.map((jav) => {
					return (
						<JAVItem
							key={jav.id}
							id={jav.id}
							name={jav.name}
							date={jav.date}
							watched={jav.watched}
							onDeleteItem={deleteItem}
							onWatchItem={watchItem}
							onEditItem={editItem}
						/>
					);
				})}
			</div>
		</div>
	);
}
