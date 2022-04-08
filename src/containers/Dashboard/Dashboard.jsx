import styles from "./Dashboard.module.scss";
import { useEffect } from "react";
import { Outlet, useOutletContext, useNavigate } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import Header from "../../components/Header";

const Dashboard = () => {
	const [searchVal, handleSearch] = useOutletContext();
	// const navigate = useNavigate();
	// useEffect(() => {
	// 	if (searchVal) navigate(`/search/${searchVal}`);
	// }, [searchVal]);

	return (
		<div className={styles.Dashboard}>
			<nav className={styles.Dashboard__Navbar}>
				<Header />
				<SearchBar onChange={handleSearch} />
			</nav>
			<Outlet />
		</div>
	);
};

export default Dashboard;
