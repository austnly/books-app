import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBook } from "../../assets/fetcher";
import styles from "./BookModal.module.scss";

const BookModal = ({ book, onChange, moreInfo }) => {
	console.log("BookModal rendering");

	const title = book.volumeInfo.title ? book.volumeInfo.title : "No Title";
	const authors = book.volumeInfo.authors
		? book.volumeInfo.authors.join(", ")
		: "Unknown Author";
	const description = book.volumeInfo.description
		? book.volumeInfo.description
		: "No description";
	const image = book.volumeInfo.imageLinks ? (
		<img
			className={styles.BookModal__Box_Thumb}
			src={book.volumeInfo.imageLinks.thumbnail}
			alt={title}
		/>
	) : (
		<p className={styles.Book__AltThumb}>{title}</p>
	);

	const pages = book.volumeInfo.pageCount ? book.volumeInfo.pageCount : 0;

	const date = book.volumeInfo.publishedDate
		? book.volumeInfo.publishedDate
		: "Unknown";

	const isbn = book.volumeInfo.industryIdentifiers
		? book.volumeInfo.industryIdentifiers[
				book.volumeInfo.industryIdentifiers.length - 1
		  ]
		: "Unknown";

	const lang = book.volumeInfo.language
		? book.volumeInfo.language
		: "Unknown";

	const cats = book.volumeInfo.categories
		? book.volumeInfo.categories.join(", ")
		: "None";

	const publisher = book.volumeInfo.publisher
		? book.volumeInfo.publisher
		: "Unknown Publisher";

	const desc = book.volumeInfo.description
		? book.volumeInfo.description
		: "No description";

	const handleClose = () => {
		onChange();
	};

	return (
		// <div>Hello</div>
		<div className={styles.BookModal} onClick={handleClose}>
			<div className={styles.BookModal__Box}>
				{/* <div className={styles.close}>&times;</div> */}
				{image}
				<div className={styles.BookModal__Box_Info}>
					<p>Title:</p>
					<p>{title}</p>
					<p>Authors:</p>
					<p>{authors}</p>
					<p>Pages:</p>
					<p>{pages}</p>
					<p>Publish Date:</p>
					<p>{date}</p>
					<p>Publisher:</p>
					<p>{publisher}</p>
					<p>Language:</p>
					<p>{lang}</p>
					<p>Genres:</p>
					<p>{cats}</p>
					<p>Description:</p>
					<p>{desc}</p>
					{/* <p>ISBN: {isbn}</p> */}
				</div>
			</div>
		</div>
	);
};

export default BookModal;
