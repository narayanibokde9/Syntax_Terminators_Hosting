import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Products/Home";
import Login from "./pages/Auth/Login";
import Product from "./pages/Products/Product";
import Signup from "./pages/Auth/Signup";
import Profile from "./pages/Auth/Profile";
import Favorites from "./pages/Auth/Favorites";
import Mobiles from "./pages/Search/Mobiles";

import WithNav1 from "./components/Navbar/WithNav1";
import WithNav2 from "./components/Navbar/WithNav2";
import Footer from "./components/Navbar/Footer";
import Search from "./pages/Search/Search";
import { useAuthContext } from "./hooks/useAuthContext";
import FilterResult from "./pages/Search/FilterResult";
import About from "./pages/About";

function App() {
	const { user } = useAuthContext();
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<WithNav1 />}>
					<Route path="/" element={<Home />} />
					<Route path="/mobiles" element={<Mobiles />} />
					<Route path="/filter" element={<FilterResult />} />
					<Route path="/product/:_id" element={<Product />} />
					<Route
						path="/profile"
						element={user ? <Profile /> : <Navigate to="/login" />}
					/>
					<Route
						path="/favorites"
						element={<Favorites />}
					/>
					<Route path="/search" element={<Search />} />
					<Route path="/about" element={<About />} />
				</Route>
				<Route element={<WithNav2 />}>
					<Route
						path="/login"
						element={!user ? <Login /> : <Navigate to="/" />}
					/>
					<Route
						path="/signup"
						element={!user ? <Signup /> : <Navigate to="/" />}
					/>
				</Route>
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
