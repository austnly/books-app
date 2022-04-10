import styles from "./Book.module.scss";

const Book = ({ item }) => {
	// Checking existence of properties and setting vars
	const title = item.volumeInfo.title ? item.volumeInfo.title : "No Title";
	const authors = item.volumeInfo.authors
		? item.volumeInfo.authors.join(", ")
		: "Unknown Author";
	const description = item.volumeInfo.description
		? item.volumeInfo.description
		: "No description";

	// Return an image element, or if no image, return a paragraph element
	const image = item.volumeInfo.imageLinks ? (
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
			{image}
			<div className={styles.Book__Info}>
				<h4>{title}</h4>
				<p>By {authors}</p>
				<div className={styles.Book__Info_Desc}>
					<p>
						<i>{description}</i>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Book;
