import React, { useState } from "react";
import "../css/ArticleList.css";
// components
import Article from "./Article.js";

//
export default function ArticleList({
	articleList,
	onAddNewArticle,
	onEditArticleItem,
	onLikeArticle,
}) {
	//
	const editArticle = (id, data) => {
		onEditArticleItem(id, data);
	};
	//
	const like = (id) => {
		onLikeArticle(id);
	};
	//
	return (
		<div className="article-list">
			{articleList.map((article) => {
				return (
					<Article
						key={article.id}
						articleData={article}
						onEditArticle={editArticle}
						onLike={like}
					/>
				);
			})}
		</div>
	);
}
