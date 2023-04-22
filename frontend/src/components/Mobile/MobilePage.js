import { React, useState, useEffect } from "react";

import MobileCard from "./MobileCardTemp";
import Backdrop from "@mui/material/Backdrop";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import url_proxy from "../../api/api";
import LoadingCard from "../LoadingCard";
import { CircularProgress } from "@mui/material";

// const url_proxy = "https://syntax-terminators-hosting-api.vercel.app/";

export default function MobilePage() {
	const [isLoading, setIsLoading] = useState(true);
	const [product, setProduct] = useState([]);
	const [open, setOpen] = useState(true);

	useEffect(() => {
		fetch(`${url_proxy}products/showdb`)
			.then((res) => res.json())
			.then((jsonRes) => {
				setProduct(jsonRes);
				setIsLoading(false);
				setOpen(!open);
			});
	}, []);

	return (
		<div className="">
			<Box sx={{ flexGrow: 1 }}>
				{isLoading ? (
					// <Grid container spacing={1} className="flex justify-center">
					// 	<LoadingCard/>
					// </Grid>
					<Backdrop
						sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
						open={open}
						// onClick={handleClose}
					>
						<CircularProgress color="inherit" />
						<div className="px-5">
							<h5 class="truncate capitalize text-xl font-semibold tracking-tight text-white dark:text-white hover:text-red-600">
								Loading...
							</h5>
						</div>
					</Backdrop>
				) : (
					<Grid container spacing={1} className="flex justify-center">
						{product.map((mobile) => {
							return (
								<Grid className="p-3">
									<MobileCard {...mobile} />
								</Grid>
							);
						})}
					</Grid>
				)}
			</Box>
		</div>
	);
}
