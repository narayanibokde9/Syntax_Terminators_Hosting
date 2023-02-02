import React from "react";

function ProductDetails(props) {
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
	return (
		<div>
			<div className="flex justify-center">
				<div className="block p-6 rounded-lg shadow-xl bg-white max-w-sm">
					<img
						src={img_url}
						key={props.title}
						alt=""
						className="max-h-fit m-6"
					/>
					<h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
						{props.title}
					</h5>
					{/* <p className="text-gray-700 text-base mb-4">Original price: {props.price}</p> */}
				</div>
			</div>
		</div>
	);
}

export default ProductDetails;
