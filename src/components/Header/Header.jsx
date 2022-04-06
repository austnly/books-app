import styles from "./Header.module.scss";

const Header = () => {
	return (
		<div className={styles.Header}>
			<h1>Bookle</h1>
			<h4>Search for a book in the Google Books database.</h4>
		</div>
	);
};

export default Header;
