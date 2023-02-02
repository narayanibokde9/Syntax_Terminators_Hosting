import { Link } from "react-router-dom";
import * as React from "react";
import { useTheme } from "@mui/material/styles";

export default function MobileSearchCard(props) {
	const {
		_id,
		url,
		img_url,
		title,
		brand,
		model_name,
		price,
		star_rating,
		no_rating,
		colour,
		storage_cap,
		flipkart_url,
		flipkart_price,
		flipkart_star_rating,
		flipkart_no_rating,
	} = props;
	const urlPage = `/product/${_id}`;
	const theme = useTheme();

	return (
		<div className="grid grid-cols-2 gap-6 mx-12 mt-6 mb-6 p-4 rounded-lg shadow-xl bg-white">
			<div className="col-span-1">
				<div className="flex ">
					<div className="">
						<Link to={urlPage}>
							<h5 className="text-gray-900 text-xl leading-tight font-medium mb-2 hover:underline">
								{title}
							</h5>
						</Link>
						<p className="text-gray-700 text-base mt-8">Rs {price}</p>
						<p className="text-gray-700 text-base mb-4">{star_rating}</p>
						<Link to={urlPage}>
							<button
								type="button"
								className="self-end inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
							>
								Buy
							</button>
						</Link>
					</div>
				</div>
			</div>
			<div className="col-span-1 flex justify-center items-center">
				<img className="max-h-60" src={img_url} key={_id} alt="" />
			</div>
		</div>
	);
}
