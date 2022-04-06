import styles from "./Book.module.scss";

const Book = ({ item }) => {
	console.log(item);
	return (
		<div className={styles.Book}>
			<img
				src={item.volumeInfo.imageLinks.thumbnail}
				alt={item.volumeInfo.title}
				width="100px"
			/>
			<div>
				<h4>{item.volumeInfo.title}</h4>
				{item.volumeInfo.authors ? (
					<p>By {item.volumeInfo.authors.join(", ")}</p>
				) : (
					<></>
				)}
				<p>
					<i>{item.volumeInfo.description}</i>
				</p>
			</div>
		</div>
	);
};

export default Book;
