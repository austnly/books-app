import SearchBar from "../../components/SearchBar/SearchBar";
import styles from "./Form.module.scss";

const Form = ({ onChange }) => {
	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		console.log(formData.get("search"));
		onChange(formData.get("search"));
	};

	return (
		<form className={styles.Form} onSubmit={handleSubmit}>
			<SearchBar onChange={onChange} />
		</form>
	);
};

export default Form;
