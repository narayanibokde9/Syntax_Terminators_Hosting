import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";

import { styled, alpha } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

import comparazonLogo from "../../images/final-logo.png";

const Search = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	"&:hover": {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	width: "100%",
	[theme.breakpoints.up("sm")]: {
		marginLeft: theme.spacing(1),
		width: "auto",
	},
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "inherit",
	"& .MuiInputBase-input": {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			width: "12ch",
			"&:focus": {
				width: "20ch",
			},
		},
	},
}));

function Navbar() {
	const { logout } = useLogout();
	const { user } = useAuthContext();

	const [value, setValue] = useState();
	const navigate = useNavigate();

	const handleSearch = (event, newValue) => {
		setValue(newValue);
		window.location.reload(true);
		console.log(value); // return undefined
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		// 👇️ redirect to /contacts
		navigate(`/search?searchQuery=${value}&page=1`);
	};

	const handleClick = () => {
		logout();
	};
	return (
		<div>
			<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
				<div className="container flex flex-wrap items-center justify-between mx-auto">
					<Link to="/" className="flex items-center">
						<img
							src={comparazonLogo}
							width={150}
							height={90}
							alt="comparazon"
							className="pt-2"
						/>
					</Link>
					<div className="flex items-center md:order-2">
						{user && (
							<div className="flex space-x-4">
								<Link to="/profile">
									<span>{user.email}</span>
								</Link>
								<button onClick={handleClick}>Log out</button>
							</div>
						)}
						{!user && (
							<div className="flex space-x-4">
								<Link to="/login">Login</Link>
								<Link to="/signup">Signup</Link>
							</div>
						)}
					</div>
					<div
						className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
						id="mobile-menu-2"
					>
						<ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
							<li>
								<Link
									to="/"
									className="block py-2 pl-3 pr-4 text-white bg-red-600 rounded md:bg-transparent md:text-red-600 md:p-0 dark:text-white"
									aria-current="page"
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									to="/about"
									className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
								>
									About
								</Link>
							</li>
							<li>
								<Link
									to="/mobiles"
									className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
								>
									Mobiles
								</Link>
							</li>
						</ul>
						<form onSubmit={handleSubmit}>
							<Search>
								<StyledInputBase
									placeholder="Search…"
									inputProps={{ "aria-label": "search" }}
									onChange={(event) => {
										//adding the onChange event
										setValue(event.target.value);
									}}
								/>
								<IconButton aria-label="search" onClick={handleSearch}>
									<SearchIconWrapper>
										<SearchIcon />
									</SearchIconWrapper>
									{/* <SearchIcon /> */}
								</IconButton>
							</Search>
						</form>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
