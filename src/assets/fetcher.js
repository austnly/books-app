export const handleFetch = async (searchVal) => {
	const url = "https://www.googleapis.com/books/v1/volumes?q=";
	const response = await fetch(url + searchVal + "&maxResults=20");
	const json = await response.json();
	return json.items;
};

export const getBook = async (bookId) => {
	const url = "https://www.googleapis.com/books/v1/volumes/";
	const response = await fetch(url + bookId);
	const json = await response.json();
	return json;
};
