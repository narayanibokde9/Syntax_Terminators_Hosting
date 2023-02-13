import * as React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useAuthContext } from "../../hooks/useAuthContext";

const url_proxy = "https://syntax-terminators-hosting-api.vercel.app/";

export default function MobileCard(props, key) {
	const { user } = useAuthContext();

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

	const removeFromFavorites = () => {
		const requestOptions = {
			method: "DELETE",
			body: JSON.stringify(props),
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${user.token}`,
			},
		};
		fetch(`${url_proxy}user/favorites`, requestOptions).then((prod) =>
			console.log(prod)
		);
// 		window.location.href = "/favorites";
	};

	const bestPrice = (price, flipkart_price) => {
		if (flipkart_price) {
			if (price < flipkart_price) return price;
			else return flipkart_price;
		} else return price;
	};

	return (
		<div class="transform w-64 shadow-xl h-auto max-w-sm bg-white border border-gray-200 rounded-lg transition duration-300 hover:scale-105 ">
			<a href="#">
				<img class="p-8 rounded-t-lg" src={img_url} alt="product image" />
			</a>
			<div class="px-5 pb-5">
				<Link to={urlPage}>
					<h5 class="truncate capitalize text-xl font-semibold tracking-tight text-gray-900 dark:text-white hover:text-red-600">
						{model_name}
					</h5>
				</Link>
				<div class="flex items-center mt-2.5 mb-2.5">
					<span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ">
						{star_rating}
					</span>
				</div>
				<div class="flex items-center justify-between">
					<span class="text-xl font-bold text-gray-900 dark:text-white">
						Rs {price}
					</span>
					<Link to={urlPage}>
						<button
							type="button"
							className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
						>
							Buy
						</button>
					</Link>
				</div>
			</div>
			<div className="flex justify-center mb-4">
				<button
					type="button"
					className=" inline-block px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-600 hover:shadow-lg"
					onClick={removeFromFavorites}
				>
					Remove from Favorites
				</button>
			</div>
		</div>
	);
}

// const {
// 	_id,
// 	url,
// 	img_url,
// 	title,
// 	brand,
// 	model_name,
// 	price,
// 	star_rating,
// 	no_rating,
// 	colour,
// 	storage_cap,
// 	flipkart_url,
// 	flipkart_price,
// 	flipkart_star_rating,
// 	flipkart_no_rating,
// } = props;
