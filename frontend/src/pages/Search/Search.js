import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import MobileCard from "../../components/Mobile/MobileCardTemp";
import MobileSearchCard from "../../components/Mobile/MobileSearchCard";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Pagination } from "@mui/material";
const url_proxy = "https://syntax-terminators-hosting-api.vercel.app/";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(2),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

export default function Search() {
	const [products, setProducts] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams();
	const [totalCount, setTotalCount] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);
	const query = searchParams.get("searchQuery");

	console.log(query);
	console.log(currentPage);

	useEffect(() => {
		fetch(
			`${url_proxy}/products/search?searchQuery=${query}&page=${currentPage}`
		)
			.then((res) => res.json())
			.then((jsonRes) => {
				setProducts(jsonRes.phones);
				setTotalCount(jsonRes.count);
			})
			.catch((error) => console.error(error));
	}, [currentPage]);
	console.log(products);
	return (
		<div className="grid justify-items-stretch">
			{products.map((product) => (
				<Grid item xs={3} sm={4} md={4}>
					<MobileSearchCard {...product} />
				</Grid>
			))}
			<Pagination
				count={Math.ceil(totalCount / 5)}
				color="primary"
				className="justify-self-center my-8"
				page={currentPage}
				onChange={(event, value) => setCurrentPage(value)}
			/>
		</div>
	);
}
