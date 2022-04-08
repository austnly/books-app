import "./App.module.scss";
import Home from "./containers/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookGrid from "./containers/BookGrid";
import Root from "./containers/Root";
import Dashboard from "./containers/Dashboard";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Root />}>
					<Route index element={<Home />} />
					<Route path="search" element={<Dashboard />}>
						<Route path=":searchTerm" element={<BookGrid />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
