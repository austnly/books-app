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

	// Set page of results as 1
	const [page, setPage] = useState(1);

	// Set max results showing
	const [max, setMax] = useState(20);

	// Fetches from API and set result
	const fetchResult = async (searchTerm, page = 1, maxResults = 20) => {
		setResult(await handleFetch(searchTerm, page, maxResults));
	};

	// Trigger fetchResult if URL changes searchTerm
	useEffect(() => {
		if (searchTerm) {
			setPage(1);
			fetchResult(searchTerm);
		} else {
			setResult(undefined);
		}
	}, [searchTerm]);

	// Trigger new fetch on selecting new page or max results
	useEffect(() => {
		fetchResult(searchTerm, page, max);
	}, [page, max]);

	// Declaring Alternative Results
	const resultsPending = <p className={styles.NoBooks}>Loading...</p>;

	const resultsNotFound = (
		<p className={styles.NoBooks}>No results found for "{searchTerm}"</p>
	);

	// onClick/onChange functions
	const nextPage = () => {
		setPage(page + 1);
	};
	const backPage = () => {
		if (page > 1) {
			setPage(page - 1);
		}
	};
	const changeMax = (e) => {
		setMax(e.target.value);
	};

	return (
		<>
			{result === null ? (
				resultsPending
			) : !result ? (
				resultsNotFound
			) : (
				<>
					<div className={styles.PreText}>
						<p>Showing results for "{searchTerm}"</p>
						<div className={styles.PreText__Max}>
							<label htmlFor="maxResults">
								Results per Page:{" "}
							</label>
							<select
								name="maxResults"
								id="maxResults"
								defaultValue="20"
								onChange={changeMax}>
								<option value="10">10</option>
								<option value="20">20</option>
								<option value="30">30</option>
								<option value="40">40</option>
							</select>
						</div>
					</div>
					<div className={styles.BookGrid}>
						{result.map((book) => {
							return <Book key={book.id} item={book} />;
						})}
					</div>
					<div className={styles.PostText}>
						{page > 1 ? (
							<p
								onClick={backPage}
								className={styles.PostText__Btn}>
								Previous Page
							</p>
						) : (
							<p>No Previous Page</p>
						)}
						<p>Page {page}</p>
						<p onClick={nextPage} className={styles.PostText__Btn}>
							Next Page
						</p>
					</div>
				</>
			)}
		</>
	);
};

export default BookGrid;
