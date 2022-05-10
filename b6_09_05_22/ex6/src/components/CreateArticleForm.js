import React, { useState } from "react";
import "../css/CreateArticleForm.css";

export default function ArticleCreateForm({ onAddNewArticle }) {
	const [articleData, setArticleData] = useState({
		id: null,
		title: null,
		content: null,
		createDate: new Date().toJSON().slice(0, 10).split("-").reverse().join("/"),
		likeNumber: 0,
	});

	const handleCreateArticle = (e) => {
		e.preventDefault();
		setArticleData({ ...articleData, id: Date.now() });
		onAddNewArticle(articleData);
		e.target.reset();
	};

	const handleFormChange = (key, value) => {
		setArticleData({ ...articleData, [key]: value });
	};

	return (
		<form onSubmit={handleCreateArticle}>
			<input
				type="text"
				placeholder="Article title"
				onChange={(e) => handleFormChange("title", e.target.value)}
				name="title"
			></input>
			<textarea
				type="text"
				placeholder="Article content"
				onChange={(e) => handleFormChange("content", e.target.value)}
				name="content"
			></textarea>
			<button>Post</button>
		</form>
	);
}
