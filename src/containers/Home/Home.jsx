import styles from "./Home.module.scss";
import Header from "./../../components/Header";
import SearchBar from "../../components/SearchBar";
import Footer from "../../components/Footer";

const Home = () => {
	return (
		<>
			<div className={styles.Home}>
				<Header />
				<SearchBar />
			</div>
			<Footer />
		</>
	);
};

export default Home;
