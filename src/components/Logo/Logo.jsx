import styles from "./Logo.module.scss";
import { Link } from "react-router-dom";

const Logo = () => {
	return (
		<div className={styles.Logo}>
			<h1 className={styles.Logo__Heading}>
				<Link to="/">bookle</Link>
			</h1>
			<p className={styles.Logo__Subtitle}>
				a simple book search engine.
			</p>
		</div>
	);
};

export default Logo;
