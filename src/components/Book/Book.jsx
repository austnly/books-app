import BookModal from "../BookModal/BookModal";
import styles from "./Book.module.scss";
import { useState } from "react";
import { bookProcessor, imageOrAltElement } from "../../assets/dom-utils";

const Book = ({ item }) => {
	// Creating clean content variables/elements
	const book = bookProcessor(item);
	const image = imageOrAltElement(
		item,
		styles.Book__Thumb,
		styles.Book__AltThumb,
	);

	// State vars for Modal
	const [moreInfo, setMoreInfo] = useState(false);

	// onClick functions to trigger Modal
	const showModal = () => {
		setMoreInfo(true);
	};
	const hideModal = () => {
		setMoreInfo(false);
	};

	return (
		<>
			<div className={styles.Book} onClick={showModal}>
				{image}
				<div className={styles.Book__Info}>
					<h4>{book["Title"]}</h4>
					<p>By {book["Authors"]}</p>
					<div className={styles.Book__Info_Desc}>
						<p>
							<i>{book["Description"]}</i>
						</p>
					</div>
				</div>
			</div>
			{moreInfo ? (
				<BookModal
					book={item}
					onChange={hideModal}
					moreInfo={moreInfo}
				/>
			) : (
				<></>
			)}
		</>
	);
};

export default Book;
