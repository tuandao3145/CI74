import React, { useState } from "react";
import "./App.css";
// components
import ArticleList from "./components/ArticleList.js";
import ArticleCreateForm from "./components/CreateArticleForm.js";
import article_list from "./data/articles_list.js";
//
export default function App() {
	//
	const [data, setData] = useState(article_list);
	//
	const addNewArticle = (newArticle) => {
		const newData = [newArticle, ...data];
		setData(newData);
	};
	//
	const editArticle = (id, newArticleData) => {
		const newData = [...data].map((article) => {
			if (article.id === id) {
				article.title = newArticleData.title;
				article.content = newArticleData.content;
			}
			return article;
		});
		setData(newData);
	};
	//
	const likeArticle = (id) => {
		const newData = [...data].map((article) => {
			if (article.id === id) {
				article.likeNumber += 1;
			}
			return article;
		});
		setData(newData);
	};
	//
	return (
		<>
			<ArticleCreateForm onAddNewArticle={addNewArticle} />
			<ArticleList
				articleList={data}
				onAddNewArticle={addNewArticle}
				onEditArticleItem={editArticle}
				onLikeArticle={likeArticle}
			/>
		</>
	);
}
