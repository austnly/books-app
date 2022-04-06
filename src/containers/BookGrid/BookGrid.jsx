import { useEffect } from "react";
import Book from "../../components/Book";
import styles from "./BookGrid.module.scss";

const BookGrid = ({ result }) => {
	useEffect(() => {
		console.log("useEffect triggered");
	}, [result]);

	return (
		<div className={styles.BookGrid}>
			{result ? (
				result.map((book) => {
					return <Book key={book.id} item={book} />;
				})
			) : (
				<p>No books to display</p>
			)}
		</div>
	);
};

export default BookGrid;
