import * as React from "react";
import { Link } from "react-router-dom";

export default function MobileCard(props) {
	const { _id, img_url, star_rating, model_name, price } = props;

	const urlPage = `/product/${_id}`;
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
		</div>
	);
}


