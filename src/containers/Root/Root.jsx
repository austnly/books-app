import styles from "./Root.module.scss";
import { Outlet } from "react-router-dom";

const Root = () => {
	return (
		<div className={styles.Root}>
			<Outlet />
		</div>
	);
};

export default Root;
