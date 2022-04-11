export const handleFetch = async (searchVal, page = 1, maxResults = 20) => {
	const startIndex = (page - 1) * maxResults;

	const url = `https://www.googleapis.com/books/v1/volumes?q=${searchVal}&startIndex=${startIndex}&maxResults=${maxResults}`;

	const response = await fetch(url);
	const json = await response.json();
	return json.items;
};

export const getBook = async (bookId) => {
	const url = "https://www.googleapis.com/books/v1/volumes/";
	const response = await fetch(url + bookId);
	const json = await response.json();
	return json;
};
