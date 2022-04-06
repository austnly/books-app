import styles from "./Home.module.scss";
import Header from "./../../components/Header";
import BookGrid from "./../BookGrid/BookGrid";
import Book from "../../components/Book";
import Form from "./../Form";
import { useEffect, useState } from "react";

const Home = () => {
	const [searchVal, setSearchVal] = useState("");
	const [result, setResult] = useState(null);

	const handleFetch = async () => {
		const url = "https://www.googleapis.com/books/v1/volumes?q=";
		const response = await fetch(url + searchVal + "&maxResults=20");
		const json = await response.json();
		console.log("json.items", json.items);
		setResult(json.items);
	};

	const handleSearch = (term) => {
		setSearchVal(term);
	};

	useEffect(() => {
		if (searchVal) handleFetch();
	}, [searchVal]);

	return (
		<div className={styles.Home}>
			<Header />
			<Form onChange={handleSearch} />
			<BookGrid result={result} />
		</div>
	);
};

export default Home;
