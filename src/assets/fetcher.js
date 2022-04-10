export const handleFetch = async (searchVal) => {
	const url = "https://www.googleapis.com/books/v1/volumes?q=";
	const response = await fetch(url + searchVal + "&maxResults=20");
	const json = await response.json();
	return json.items;
};
