import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Book from "../../components/Book";
import styles from "./BookGrid.module.scss";
import { handleFetch } from "../../assets/fetcher";

const BookGrid = () => {
	// Passing URL param as searchTerm
	const { searchTerm } = useParams();

	// Initialising results state var as null
	const [result, setResult] = useState(null);

	// Fetches from API and set result
	const fetchResult = async (searchTerm) => {
		setResult(await handleFetch(searchTerm));
	};

	// Trigger fetchResult if URL changes searchTerm
	useEffect(() => {
		if (searchTerm) {
			fetchResult(searchTerm);
		} else {
			setResult(undefined);
		}
	}, [searchTerm]);

	// Declaring Alternative Results
	const resultsPending = <p className={styles.NoBooks}>Loading...</p>;

	const resultsNotFound = (
		<p className={styles.NoBooks}>No results found for "{searchTerm}"</p>
	);

	return (
		<>
			{result === null ? (
				resultsPending
			) : !result ? (
				resultsNotFound
			) : (
				<>
					<p className={styles.PreText}>
						Showing results for "{searchTerm}"
					</p>
					<div className={styles.BookGrid}>
						{result.map((book) => {
							return <Book key={book.id} item={book} />;
						})}
					</div>
				</>
			)}
		</>
	);
};

export default BookGrid;
