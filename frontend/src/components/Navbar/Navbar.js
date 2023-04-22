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
		// <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
		// 	<div class="container flex flex-wrap items-center justify-between mx-auto">
		// 		<a href="https://flowbite.com/" class="flex items-center">
		// 			<img
		// 				src="https://flowbite.com/docs/images/logo.svg"
		// 				class="h-6 mr-3 sm:h-9"
		// 				alt="Flowbite Logo"
		// 			/>
		// 			<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
		// 				Flowbite
		// 			</span>
		// 		</a>
		// 		<div class="flex md:order-2">
		// 			<button
		// 				type="button"
		// 				data-collapse-toggle="navbar-search"
		// 				aria-controls="navbar-search"
		// 				aria-expanded="false"
		// 				class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
		// 			>
		// 				<svg
		// 					class="w-5 h-5"
		// 					aria-hidden="true"
		// 					fill="currentColor"
		// 					viewBox="0 0 20 20"
		// 					xmlns="http://www.w3.org/2000/svg"
		// 				>
		// 					<path
		// 						fill-rule="evenodd"
		// 						d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
		// 						clip-rule="evenodd"
		// 					></path>
		// 				</svg>
		// 				<span class="sr-only">Search</span>
		// 			</button>

		// 			<button
		// 				data-collapse-toggle="navbar-search"
		// 				type="button"
		// 				class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
		// 				aria-controls="navbar-search"
		// 				aria-expanded="false"
		// 			>
		// 				<span class="sr-only">Open menu</span>
		// 				<svg
		// 					class="w-6 h-6"
		// 					aria-hidden="true"
		// 					fill="currentColor"
		// 					viewBox="0 0 20 20"
		// 					xmlns="http://www.w3.org/2000/svg"
		// 				>
		// 					<path
		// 						fill-rule="evenodd"
		// 						d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
		// 						clip-rule="evenodd"
		// 					></path>
		// 				</svg>
		// 			</button>
		// 		</div>
		// 		<div
		// 			class="items-center space-x-4 hidden w-full md:flex md:w-auto md:order-1"
		// 			id="navbar-search"
		// 		>
		// 			<ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
		// 				<li className="mb-4">
		// 					<form onSubmit={handleSubmit}>
		// 						<Search>
		// 							<StyledInputBase
		// 								id="navbar-search"
		// 								placeholder="Search…"
		// 								inputProps={{ "aria-label": "search" }}
		// 								onChange={(event) => {
		// 									//adding the onChange event
		// 									setValue(event.target.value);
		// 								}}
		// 							/>
		// 							<IconButton aria-label="search" onClick={handleSearch}>
		// 								<SearchIconWrapper>
		// 									<SearchIcon />
		// 								</SearchIconWrapper>
		// 								{/* <SearchIcon /> */}
		// 							</IconButton>
		// 						</Search>
		// 					</form>
		// 				</li>
		// 				<li>
		// 					<a
		// 						href="#"
		// 						class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
		// 						aria-current="page"
		// 					>
		// 						Home
		// 					</a>
		// 				</li>
		// 				<li>
		// 					<a
		// 						href="#"
		// 						class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
		// 					>
		// 						About
		// 					</a>
		// 				</li>
		// 				<li>
		// 					<a
		// 						href="#"
		// 						class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
		// 					>
		// 						Services
		// 					</a>
		// 				</li>

		// 				{user && (
		// 					<div className="flex space-x-4">
		// 						<li>
		// 							<Link to="/profile">
		// 								<span>{user.email}</span>
		// 							</Link>
		// 						</li>
		// 						<li>
		// 							<button onClick={handleClick}>Log out</button>
		// 						</li>
		// 					</div>
		// 				)}
		// 				{!user && (
		// 					<div className="flex space-x-4">
		// 						<Link to="/login">Login</Link>
		// 						<Link to="/signup">Signup</Link>
		// 					</div>
		// 				)}
		// 			</ul>
		// 		</div>
		// 	</div>
		// </nav>

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
						className="items-center justify-between w-full md:flex md:w-auto md:order-1"
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

// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";
// import { ThemeProvider, createTheme } from "@mui/material/styles";

// const theme = createTheme({
// 	components: {
// 		MuiAppBar: {
// 			styleOverrides: {
// 				colorPrimary: {
// 					backgroundColor: "white",
// 				},
// 			},
// 		},
// 	},
// });

// const pages = [
// 	{ title: "Home", url: "/" },
// 	{ title: "Mobiles", url: "/mobiles" },
// 	{ title: "About", url: "/about" },
// ];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

// function ResponsiveAppBar() {
// 	const [anchorElNav, setAnchorElNav] = React.useState(null);
// 	const [anchorElUser, setAnchorElUser] = React.useState(null);

// 	const handleOpenNavMenu = (event) => {
// 		setAnchorElNav(event.currentTarget);
// 	};
// 	const handleOpenUserMenu = (event) => {
// 		setAnchorElUser(event.currentTarget);
// 	};

// 	const handleCloseNavMenu = () => {
// 		setAnchorElNav(null);
// 	};

// 	const handleCloseUserMenu = () => {
// 		setAnchorElUser(null);
// 	};

// 	return (
// 		<ThemeProvider theme={theme}>
// 			<AppBar position="static">
// 				<Container maxWidth="xl">
// 					<Toolbar disableGutters>
// 						<Link to="/">
// 							<img
// 								src={comparazonLogo}
// 								width={150}
// 								height={90}
// 								alt="comparazon"
// 								className="pt-2"
// 							/>
// 						</Link>
// 						{/* <Typography
// 						variant="h6"
// 						noWrap
// 						component="a"
// 						href="/"
// 						sx={{
// 							mr: 2,
// 							display: { xs: "none", md: "flex" },
// 							fontFamily: "monospace",
// 							fontWeight: 700,
// 							letterSpacing: ".3rem",
// 							color: "inherit",
// 							textDecoration: "none",
// 						}}
// 					>
// 						LOGO
// 					</Typography> */}

// 						<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
// 							<IconButton
// 								size="large"
// 								aria-label="account of current user"
// 								aria-controls="menu-appbar"
// 								aria-haspopup="true"
// 								onClick={handleOpenNavMenu}
// 								color="inherit"
// 							>
// 								<MenuIcon />
// 							</IconButton>
// 							<Menu
// 								id="menu-appbar"
// 								anchorEl={anchorElNav}
// 								anchorOrigin={{
// 									vertical: "bottom",
// 									horizontal: "left",
// 								}}
// 								keepMounted
// 								transformOrigin={{
// 									vertical: "top",
// 									horizontal: "left",
// 								}}
// 								open={Boolean(anchorElNav)}
// 								onClose={handleCloseNavMenu}
// 								sx={{
// 									display: { xs: "block", md: "none" },
// 								}}
// 							>
// 								{pages.map((page) => (
// 									<MenuItem key={page} onClick={handleCloseNavMenu}>
// 										<Link to={page.url}>
// 											<Typography textAlign="center">{page.title}</Typography>
// 										</Link>
// 									</MenuItem>
// 								))}
// 							</Menu>
// 						</Box>
// 						<AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
// 						<Typography
// 							variant="h5"
// 							noWrap
// 							component="a"
// 							href=""
// 							sx={{
// 								mr: 2,
// 								display: { xs: "flex", md: "none" },
// 								flexGrow: 1,
// 								fontFamily: "monospace",
// 								fontWeight: 700,
// 								letterSpacing: ".3rem",
// 								color: "inherit",
// 								textDecoration: "none",
// 							}}
// 						>
// 							LOGO
// 						</Typography>
// 						<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
// 							{pages.map((page) => (
// 								<Link to={page.url}>
// 									<Button
// 										key={page.title}
// 										onClick={handleCloseNavMenu}
// 										sx={{ my: 2, color: "black", display: "block" }}
// 									>
// 										{page.title}
// 									</Button>
// 								</Link>
// 							))}
// 						</Box>

// 						<Box sx={{ flexGrow: 0 }}>
// 							<Tooltip title="Open settings">
// 								<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
// 									{/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
// 								</IconButton>
// 							</Tooltip>
// 							<Menu
// 								sx={{ mt: "45px" }}
// 								id="menu-appbar"
// 								anchorEl={anchorElUser}
// 								anchorOrigin={{
// 									vertical: "top",
// 									horizontal: "right",
// 								}}
// 								keepMounted
// 								transformOrigin={{
// 									vertical: "top",
// 									horizontal: "right",
// 								}}
// 								open={Boolean(anchorElUser)}
// 								onClose={handleCloseUserMenu}
// 							>
// 								{settings.map((setting) => (
// 									<MenuItem key={setting} onClick={handleCloseUserMenu}>
// 										<Typography textAlign="center">{setting}</Typography>
// 									</MenuItem>
// 								))}
// 							</Menu>
// 						</Box>
// 					</Toolbar>
// 				</Container>
// 			</AppBar>
// 		</ThemeProvider>
// 	);
// }
// export default ResponsiveAppBar;

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import SwipeableDrawer from '@mui/material/SwipeableDrawer';
// import Button from '@mui/material/Button';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

// export default function SwipeableTemporaryDrawer() {
//   const [state, setState] = React.useState({
//     top: false,
//     left: false,
//     bottom: false,
//     right: false,
//   });

//   const toggleDrawer = (anchor, open) => (event) => {
//     if (
//       event &&
//       event.type === 'keydown' &&
//       (event.key === 'Tab' || event.key === 'Shift')
//     ) {
//       return;
//     }

//     setState({ ...state, [anchor]: open });
//   };

//   const list = (anchor) => (
//     <Box
//       sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
//       role="presentation"
//       onClick={toggleDrawer(anchor, false)}
//       onKeyDown={toggleDrawer(anchor, false)}
//     >
//       <List>
//         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         {['All mail', 'Trash', 'Spam'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <div>
//       {['left', 'right', 'top', 'bottom'].map((anchor) => (
//         <React.Fragment key={anchor}>
//           <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
//           <SwipeableDrawer
//             anchor={anchor}
//             open={state[anchor]}
//             onClose={toggleDrawer(anchor, false)}
//             onOpen={toggleDrawer(anchor, true)}
//           >
//             {list(anchor)}
//           </SwipeableDrawer>
//         </React.Fragment>
//       ))}
//     </div>
//   );
// }
