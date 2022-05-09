import React, { useState } from "react";
import "../css/JAVItem.css";

export default function JAVItem({
	name,
	date,
	watched,
	id,
	onDeleteItem,
	onWatchItem,
	onEditItem,
}) {
	const [isEdit, setIsEdit] = useState(false);
	const [newName, setNewName] = useState("");

	const remove = () => {
		onDeleteItem(id);
	};

	const watch = () => {
		onWatchItem(id);
	};

	const edit = () => {
		onEditItem(id, newName);
		setIsEdit(false);
		setNewName("");
	};

	const enableEdit = () => {
		setIsEdit(true);
	};

	return (
		<div className="jav-item">
			<div className="item-info">
				{isEdit ? (
					<div>
						<input
							type="text"
							defaultValue={name}
							onChange={(e) => {
								setNewName(e.target.value);
							}}
						/>
					</div>
				) : (
					<b className="item-name">{name}</b>
				)}
				<i className="item-date">{date}</i>
				&nbsp;&nbsp;&nbsp;&nbsp;
				<code>{watched ? "watched" : ""}</code>
			</div>

			<div className="item-action">
				{!watched && <button onClick={watch}>Watch</button>}
				&nbsp;&nbsp;&nbsp;&nbsp;
				{isEdit ? (
					<button onClick={edit}>Save</button>
				) : (
					<button onClick={enableEdit}>Edit</button>
				)}
				&nbsp;&nbsp;&nbsp;&nbsp;
				<button onClick={remove}>Delete</button>
			</div>
		</div>
	);
}
