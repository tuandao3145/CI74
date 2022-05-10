import React, { useState } from "react";
import "../css/Article.css";

export default function Article({ articleData, onEditArticle, onLike }) {
	//
	const [isEdit, setIsEdit] = useState(false);
	const [newArticleData, setNewArticleData] = useState({
		...articleData,
		title: "",
		content: "",
	});
	//
	const handleLike = () => {
		onLike(articleData.id);
	};
	//
	const handleEdit = (key, value) => {
		setNewArticleData({ ...newArticleData, [key]: value });
	};
	//
	const edit = () => {
		setIsEdit(true);
	};
	//
	const save = () => {
		onEditArticle(articleData.id, newArticleData);
		setIsEdit(false);
	};
	//
	return (
		<div className="article">
			<div className="title">
				{isEdit ? (
					<input
						type="text"
						placeholder="Article title"
						defaultValue={articleData.title}
						onChange={(e) => handleEdit("title", e.target.value)}
						name="title"
					/>
				) : (
					<h1>{articleData.title}</h1>
				)}
			</div>
			<div className="body">
				{isEdit ? (
					<textarea
						type="text"
						placeholder="Article content"
						defaultValue={articleData.content}
						onChange={(e) => handleEdit("content", e.target.value)}
						name="content"
						cols={100}
						rows={10}
					></textarea>
				) : (
					<p>{articleData.content}</p>
				)}
				<div className="info">
					<span>{articleData.createDate}</span>
					<span>{articleData.likeNumber}</span>
				</div>
			</div>
			<div className="btn-list">
				<button className="like-btn" onClick={handleLike}>
					Like!
				</button>
				{isEdit ? (
					<button className="save-btn" onClick={save}>
						Save
					</button>
				) : (
					<button className="edit-btn" onClick={edit}>
						Edit
					</button>
				)}
			</div>
		</div>
	);
}
