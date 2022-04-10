import styles from "./Dashboard.module.scss";
import { useEffect } from "react";
import { Outlet, useOutletContext, useNavigate } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import Logo from "../../components/Logo";
import Footer from "../../components/Footer/Footer";

const Dashboard = () => {
	const [searchVal, handleSearch] = useOutletContext();
	// const navigate = useNavigate();
	// useEffect(() => {
	// 	if (searchVal) navigate(`/search/${searchVal}`);
	// }, [searchVal]);

	return (
		<div className={styles.Dashboard}>
			<nav className={styles.Dashboard__Navbar}>
				<Logo />
				<SearchBar onChange={handleSearch} />
			</nav>
			<div className={styles.Dashboard__Content}>
				<Outlet />
			</div>
			<Footer />
			{/* <div className={styles.Dashboard__Footer}>
				<p>Built by Austin.</p>
			</div> */}
		</div>
	);
};

export default Dashboard;
