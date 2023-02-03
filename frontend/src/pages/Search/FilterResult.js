import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MobileCard from "../../components/Mobile/MobileCardTemp";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import FilterNav from "../../components/Navbar/FilterNav";

const url_proxy = "https://syntax-terminators-hosting-api.vercel.app/";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

function FilterResult() {
	const [products, setProducts] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams();
	const queryBrand = searchParams.get("brand");
	const queryPrice = searchParams.get("price");
	const queryPriceSort = searchParams.get("priceSort");
	const queryRatingSort = searchParams.get("ratingSort");
	useEffect(() => {
			fetch(
				`${url_proxy}/products/filter?brand=${queryBrand}&price=${queryPrice}&priceSort=${queryPriceSort}&ratingSort=${queryRatingSort}`
			)
				.then((res) => res.json())
				.then((jsonRes) => setProducts(jsonRes));
		
	}, []);

	console.log(products);

	return (
		<div>
			<FilterNav />
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={1} className="flex justify-center">
					{products.map((mobile) => {
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

export default FilterResult;
