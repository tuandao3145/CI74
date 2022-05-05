import React from "react";
import "../css/MangaContainer.css";
import { FaRegEye, FaRegComment } from "react-icons/fa";

// MangaContainer component
const MangaContainer = (props) => {
	return (
		<div className="manga-card center">
			<div className="thumnail-container">
				<div
					className="img-container"
					style={{ backgroundImage: `url(${props["photo"]})` }}
				></div>
				<div className="count-container center">
					<span className=" count-item center">
						<span>{props["view_count"]}</span>
						<FaRegEye />
					</span>
					<span className="count-item center">
						<span>{props["view_count"]}</span>
						<FaRegComment />
					</span>
				</div>
			</div>
			<div className="manga-name">{props["name"]}</div>
			<div className="update-info center">
				<span className="chapter-number">
					Chapter {props["lastest_chapter"]}
				</span>
				<span className="update-date">{props["date_modified"]}</span>
			</div>
		</div>
	);
};

export default MangaContainer;
