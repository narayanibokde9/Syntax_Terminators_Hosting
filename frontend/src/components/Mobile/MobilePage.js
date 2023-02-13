import { React, useState, useEffect } from "react";

import MobileCard from "./MobileCardTemp";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import url_proxy from "../../api/api";

// const url_proxy = "https://syntax-terminators-hosting-api.vercel.app/";

export default function MobilePage() {
	const [product, setProduct] = useState([]);

	useEffect(() => {
		fetch(`${url_proxy}products/showdb`)
			.then((res) => res.json())
			.then((jsonRes) => setProduct(jsonRes));
	}, []);

	return (
		<div className="">
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={1} className="flex justify-center">
					{product.map((mobile) => {
						return (
							<Grid className="p-3">
								<MobileCard {...mobile} />
							</Grid>
						);
					})}
				</Grid>
			</Box>
		</div>
	);
}
