import BookModal from "../BookModal/BookModal";
import styles from "./Book.module.scss";
import BMstyles from "./../BookModal/BookModal.module.scss";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

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

	// const navigate = useNavigate();

	const [moreInfo, setMoreInfo] = useState(false);

	const showModal = () => {
		setMoreInfo(true);
	};

	const hideModal = () => {
		setMoreInfo(false);
	};

	// let modal = <></>;
	// console.log(moreInfo);

	// useEffect(() => {
	// 	console.log("useEffect triggered");
	// 	modal = moreInfo ? (
	// 		<BookModal book={item} onChange={setMoreInfo} moreInfo={moreInfo} />
	// 	) : (
	// 		modal
	// 	);
	// }, [moreInfo]);

	return (
		<>
			<div className={styles.Book} onClick={showModal}>
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
