import styles from "./Dashboard.module.scss";
import { Outlet } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import Logo from "../../components/Logo";
import Footer from "../../components/Footer/Footer";

const Dashboard = () => {
	return (
		<div className={styles.Dashboard}>
			<nav className={styles.Dashboard__Navbar}>
				<Logo />
				<SearchBar />
			</nav>
			<div className={styles.Dashboard__Content}>
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default Dashboard;
