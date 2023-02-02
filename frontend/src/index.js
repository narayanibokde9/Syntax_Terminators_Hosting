import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
// import "tw-elements";
import "flowbite";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Index = () => {
	return (
		<AuthContextProvider>
			<App />
		</AuthContextProvider>
	);
};

ReactDOM.render(<Index />, document.getElementById("root"));
