import React from "react";
import "../css/MangaList.css";
import mangaList from "../data.js";
import MangaContainer from "./MangaContainer";

// MangaList component
const MangaList = () => {
	return (
		<div className="manga-list center">
			{mangaList.map((manga) => {
				return <MangaContainer {...manga} />;
			})}
		</div>
	);
};

export default MangaList;
