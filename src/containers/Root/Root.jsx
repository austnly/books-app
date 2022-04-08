import styles from "./Root.module.scss";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

const Root = () => {
	// State hooks for Search and Results
	const [searchVal, setSearchVal] = useState("");

	// Search term setter which is passed to search Form
	const handleSearch = (term) => {
		setSearchVal(term);
	};

	return (
		<div className={styles.Root}>
			<Outlet context={[searchVal, handleSearch]} />
		</div>
	);
};

export default Root;
