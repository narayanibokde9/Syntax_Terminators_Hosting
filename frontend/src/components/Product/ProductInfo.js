import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, value) {
	return { name, value };
}

export default function ProductInfo(props) {
	const {
		url,
		img_url,
		title,
		brand,
		model_name,
		price,
		star_rating,
		colour,
		storage_cap,
		flipkart_url,
		flipkart_price,
		flipkart_star_rating,
		flipkart_no_rating,
	} = props;

	const rows = [
		createData("Title", title),
		createData("Brand", brand),
		createData("Model", model_name),
		createData("Colour", colour),
		createData("Storage Capacity", storage_cap),
	];
	return (
		<div className="min-w-[100%] shadow-lg">
			<TableContainer
				sx={{
					backgroundColor: '#F8F8F8',
				}}
				component={Paper}
			>
				<Table className="min-w-[100%]" aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Mobile</TableCell>
							<TableCell align="right">Info</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow
								key={row.name}
								sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
							>
								<TableCell component="th" scope="row">
									{row.name}
								</TableCell>
								<TableCell align="right">{row.value}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
}
