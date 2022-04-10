import styles from "./SearchBar.module.scss";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
	// Instantiating navigate func
	const navigate = useNavigate();

	// Trigger navigate to search page if searchVal is set by submitting SearchBar form
	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const searchTerm = formData.get("search");
		navigate(`/search/${searchTerm}`);
	};

	return (
		<form className={styles.SearchBar} onSubmit={handleSubmit}>
			<input
				type="text"
				name="search"
				placeholder="look up a book."
				className={styles.SearchBar__Input}
			/>

			<button type="submit" className={styles.SearchBar__Button}>
				<FontAwesomeIcon icon={faMagnifyingGlass} />
			</button>
		</form>
	);
};

export default SearchBar;
