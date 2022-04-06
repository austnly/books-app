import styles from "./Book.module.scss";

const Book = ({ item }) => {
	const img = item.volumeInfo.imageLinks
		? item.volumeInfo.imageLinks.thumbnail
		: "";
	const title = item.volumeInfo.title ? item.volumeInfo.title : "No Title";
	const authors = item.volumeInfo.authors
		? item.volumeInfo.authors.join(", ")
		: "Unknown Author";
	const description = item.volumeInfo.description
		? item.volumeInfo.description
		: "No description";

	return (
		<div className={styles.Book}>
			<img src={img} alt={title} width="100px" />
			<div>
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
