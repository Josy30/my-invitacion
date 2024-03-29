import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

const App = () => {
	return (
		<div>
			<Routes>
				<Route
					exact
					path="/"
					element={<Home />}
				/>
			</Routes>
		</div>
	);
};

export default App;
