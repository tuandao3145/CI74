import React, { useContext } from "react";

// component search box
export default function SearchBox() {
	// render search box
	return (
		<form className="search-box">
			<input type="text" placeholder="Search test by name or category" />
			<button>Search</button>
		</form>
	);
}
