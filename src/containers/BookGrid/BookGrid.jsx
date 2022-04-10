import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Book from "../../components/Book";
import styles from "./BookGrid.module.scss";

const BookGrid = () => {
	const { searchTerm } = useParams();

	console.log("Bookgrid render, searchTerm is", searchTerm);

	const [searchVal, setSearchVal] = useState(searchTerm);
	const [result, setResult] = useState(null);

	// API interaction
	const handleFetch = async () => {
		const url = "https://www.googleapis.com/books/v1/volumes?q=";
		const response = await fetch(url + searchVal + "&maxResults=20");
		const json = await response.json();
		console.log("json.items", json.items);
		setResult(json.items);
	};

	// Fetch data from API if there is a search term
	useEffect(() => {
		setSearchVal(searchTerm);
	}, [searchTerm]);

	useEffect(() => {
		handleFetch();
	}, [searchVal]);

	// let content =
	// useEffect(() => {

	// }, [])

	console.log("searchVal is", searchVal);
	console.log("result is", result);

	return (
		<>
			{result ? (
				<div className={styles.BookGrid}>
					{result.map((book) => {
						return <Book key={book.id} item={book} />;
					})}
				</div>
			) : result === null ? (
				<p className={styles.NoBooks}>Loading...</p>
			) : (
				<p className={styles.NoBooks}>
					No results found for {searchVal}
				</p>
			)}
		</>
	);
};

export default BookGrid;

// Need to fix clearing search term on load
