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
		  ].identifier
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

	const handleClose = (e) => {
		// const boxStyle = styles.BookModal__Box
		const modalBg = document.getElementsByClassName(styles.BookModal)[0];
		const closeBtn = document.getElementsByClassName(styles.close)[0];
		if (e.target === modalBg || e.target === closeBtn) {
			onChange();
		}
	};

	console.log("ISBN", isbn);
	console.log(styles);

	return (
		<div className={styles.BookModal} onClick={handleClose}>
			<div className={styles.BookModal__Box}>
				<span className={styles.close}>&times;</span>
				{image}

				<div className={styles.BookModal__Box_Info}>
					<p className={styles.BookModal__Box_Info_col1}>Title:</p>
					<p>{title}</p>
					<p className={styles.BookModal__Box_Info_col1}>Authors:</p>
					<p>{authors}</p>
					<p className={styles.BookModal__Box_Info_col1}>Pages:</p>
					<p>{pages}</p>
					<p className={styles.BookModal__Box_Info_col1}>
						Publish Date:
					</p>
					<p>{date}</p>
					<p className={styles.BookModal__Box_Info_col1}>ISBN:</p>
					<p>{isbn}</p>
					<p className={styles.BookModal__Box_Info_col1}>
						Publisher:
					</p>
					<p>{publisher}</p>
					<p className={styles.BookModal__Box_Info_col1}>Language:</p>
					<p>{lang}</p>
					<p className={styles.BookModal__Box_Info_col1}>Genres:</p>
					<p>{cats}</p>
					<p className={styles.BookModal__Box_Info_col1}>
						Description:
					</p>
					<p>{desc}</p>
				</div>
			</div>
		</div>
	);
};

export default BookModal;
