import React from "react";

const SearchBar = (onChange) => {
	return (
		<>
			<input
				type="text"
				name="search"
				placeholder="Enter search term(s) here"
			/>
			<input type="submit" value="Submit" />
		</>
	);
};

export default SearchBar;
