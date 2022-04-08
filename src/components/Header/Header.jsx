import { useState } from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
	const [showSub, setShowSub] = useState(false);

	const showSubtitle = () => {
		setShowSub(true);
	};

	const hideSubtitle = () => {
		setShowSub(false);
	};

	const subtitle = "powered by the google books api.";
	const desc = "a simple book search engine.";

	return (
		<div className={styles.Header}>
			<h1
				className={styles.Header__Heading}
				onMouseEnter={showSubtitle}
				onMouseLeave={hideSubtitle}>
				<Link to="/">bookle</Link>
			</h1>
			<p className={styles.Header__Subtitle}>
				{showSub ? subtitle : desc}
			</p>
		</div>
	);
};

export default Header;
