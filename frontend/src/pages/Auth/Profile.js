import * as React from "react";
import { Link } from "react-router-dom";

import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";

import { IoPersonCircleOutline } from "react-icons/io5";

import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";

function PricingContent() {
	const { logout } = useLogout();
	const { user } = useAuthContext();
	const name = user.email.split("@")[0];
	const handleClick = () => {
		logout();
	};

	return (
		<div className="flex justify-center">
			<div class="my-16 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
				<div class="flex flex-col items-center py-10">
					<IoPersonCircleOutline size={70} />
					<h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
						{name}
					</h5>
					<span class="text-sm text-gray-500 dark:text-gray-400">
						{user.email}
					</span>
					<div class="flex mt-4 space-x-3 md:mt-6">
						<Link
							to="/favorites"
							class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>
							View Favorites
						</Link>
						<button
							onClick={handleClick}
							class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
						>
							Log Out
						</button>
					</div>
				</div>
			</div>
		</div>
		// <React.Fragment>
		// 	<GlobalStyles
		// 		styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
		// 	/>
		// 	<CssBaseline />

		// 	{/* Hero unit */}
		// 	<Container
		// 		disableGutters
		// 		maxWidth="sm"
		// 		component="main"
		// 		sx={{ pt: 8, pb: 6 }}
		// 	>
		// 		<Typography variant="h4" color="text.primary" gutterBottom>
		// 			Welcome, {name}
		// 		</Typography>
		// 		{/* <Typography
		// 			variant="h5"
		// 			align="center"
		// 			color="text.secondary"
		// 			component="p"
		// 			>

		// 		</Typography> */}
		// 	</Container>
		// 	<Container maxWidth="sm" component="main" sx={{ pb: 6 }}>
		// <Link to="/favorites">
		// 			<Typography variant="h5" color="text.primary" gutterBottom>
		// 				Your Favorites
		// 			</Typography>
		// 		</Link>
		// 	</Container>
		// 	<Container
		// 		maxWidth="md"
		// 		component="footer"
		// 		sx={{
		// 			borderTop: (theme) => `1px solid ${theme.palette.divider}`,
		// 			py: [3, 6],
		// 		}}
		// 	></Container>
		// </React.Fragment>
	);
}

export default function Profile() {
	return <PricingContent />;
}
