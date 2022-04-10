import styles from "./Home.module.scss";
import Header from "./../../components/Header";
import BookGrid from "./../BookGrid/BookGrid";
import SearchBar from "../../components/SearchBar/SearchBar";
import Form from "./../Form";
import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const Home = () => {
	const [searchVal, handleSearch] = useOutletContext();
	// // State hooks for Search and Results
	// const [searchVal, setSearchVal] = useState("");
	// const [result, setResult] = useState(null);

	// // API interaction
	// const handleFetch = async () => {
	// 	const url = "https://www.googleapis.com/books/v1/volumes?q=";
	// 	const response = await fetch(url + searchVal + "&maxResults=20");
	// 	const json = await response.json();
	// 	console.log("json.items", json.items);
	// 	setResult(json.items);
	// };

	// // Fetch data from API if there is a search term
	// useEffect(() => {
	// 	if (searchVal) {
	// 		handleFetch();
	// 	}
	// }, [searchVal]);

	const navigate = useNavigate();

	// Search term setter which is passed to search Form
	// const handleSearch = (term) => {
	// 	setSearchVal(term);
	// };

	useEffect(() => {
		if (searchVal) navigate(`/search/${searchVal}`);
	}, [searchVal]);

	return (
		<>
			<div className={styles.Home}>
				<Header />
				<SearchBar onChange={handleSearch} />
				{/* {result ? <BookGrid searchTerm={searchVal} /> : <></>} */}
			</div>
			<Footer />
		</>
	);
};

export default Home;
