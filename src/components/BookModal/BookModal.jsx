import { bookProcessor, imageOrAltElement } from "../../assets/dom-utils";
import styles from "./BookModal.module.scss";

const BookModal = ({ book, onChange }) => {
	// Creating clean content variables/elements
	const bookObj = bookProcessor(book);
	const image = imageOrAltElement(
		book,
		styles.BookModal__Box_Thumb,
		styles.Book__AltThumb,
	);

	// Close modal function on clicking outside modal or "x"
	const handleClose = (e) => {
		const modalBg = document.getElementsByClassName(styles.BookModal)[0];
		const closeBtn = document.getElementsByClassName(styles.close)[0];

		if (e.target === modalBg || e.target === closeBtn) {
			onChange();
		}
	};

	return (
		<div className={styles.BookModal} onClick={handleClose}>
			<div className={styles.BookModal__Box}>
				<span className={styles.close}>&times;</span>

				{image}

				<div className={styles.BookModal__Box_Info}>
					{Object.entries(bookObj).map(([key, value], index) => {
						return (
							<>
								<p
									className={styles.BookModal__Box_Info_col1}
									key={key}>
									{key}:
								</p>
								<p key={index}>{value}</p>
							</>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default BookModal;
