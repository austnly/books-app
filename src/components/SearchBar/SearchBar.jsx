import styles from "./SearchBar.module.scss";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ onChange }) => {
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		navigate(`/search/${formData.get("search")}`);
		// console.log(formData.get("search"));
		// onChange(formData.get("search"));
	};

	return (
		<form className={styles.SearchBar} onSubmit={handleSubmit}>
			<input
				type="text"
				name="search"
				placeholder="look up a book."
				className={styles.SearchBar__Input}
			/>
			{/* <span className={styles.SearchBar__Button} onClick={onChange}>
				&#8617;
			</span> */}
			<input
				type="submit"
				className={styles.SearchBar__Button}
				value="&#8617;"
			/>
		</form>
	);
};

export default SearchBar;
