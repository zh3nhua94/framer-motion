import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import StaggerChildren from "./pages/1";
import FadeUpDown from "./pages/2";
import KeyframeAnimation from "./pages/3";
import DragComponent from "./pages/4";
import ScrollProgression from "./pages/5";

const App = () => {
	return (
		<Routes>
			<Route
				index
				element={<Home />}
			/>
			<Route
				path="/1"
				element={<StaggerChildren />}
			/>
			<Route
				path="/2"
				element={<FadeUpDown />}
			/>
			<Route
				path="/3"
				element={<KeyframeAnimation />}
			/>
			<Route
				path="/4"
				element={<DragComponent />}
			/>
			<Route
				path="/5"
				element={<ScrollProgression />}
			/>
		</Routes>
	);
};

export default App;
