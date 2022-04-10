import styles from "./Book.module.scss";

const Book = ({ item }) => {
	const title = item.volumeInfo.title ? item.volumeInfo.title : "No Title";
	const authors = item.volumeInfo.authors
		? item.volumeInfo.authors.join(", ")
		: "Unknown Author";
	const description = item.volumeInfo.description
		? item.volumeInfo.description
		: "No description";

	const img = item.volumeInfo.imageLinks ? (
		<img
			className={styles.Book__Thumb}
			src={item.volumeInfo.imageLinks.thumbnail}
			alt={title}
		/>
	) : (
		<p className={styles.Book__AltThumb}>{title}</p>
	);

	return (
		<div className={styles.Book}>
			{img}
			{/* <div className={styles.Book__Label}>
				<p>
					{title} - {authors}
				</p>
			</div> */}
			<div className={styles.Book__Info}>
				<h4>{title}</h4>
				<p>By {authors}</p>
				<p>
					<i>{description}</i>
				</p>
			</div>
		</div>
	);
};

export default Book;
