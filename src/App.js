import "./App.module.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import BookGrid from "./containers/BookGrid";
import Root from "./containers/Root";
import Dashboard from "./containers/Dashboard";
import BookModal from "./components/BookModal";

function App() {
	return (
		<BrowserRouter basename="/books-app">
			<Routes>
				<Route path="/" element={<Root />}>
					<Route index element={<Home />} />
					<Route path="search" element={<Dashboard />}>
						<Route index element={<BookGrid />} />
						<Route path=":searchTerm" element={<BookGrid />}>
							{/* <Route path=":bookId" element={<BookModal />} /> */}
						</Route>
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
