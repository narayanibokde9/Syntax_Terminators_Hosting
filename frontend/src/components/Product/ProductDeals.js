import { Link } from "react-router-dom";

export const ProductDealAmazon = (props) => {
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

	if (flipkart_price > price)
		return (
			<div className="flex justify-center shadow-2xl">
				<div className="block rounded-lg shadow-lg bg-yellow-100 max-w-sm text-center h-[100%] w-48">
					<div className="py-3 px-6 border-b font-semibold border-gray-300">
						Amazon
					</div>
					<div className="mx-6 mt-2 -mb-2 bg-yellow-400 text-white border-yellow-400 border-2 rounded-md">
						Best Deal
					</div>

					<div className="p-6">
						<span class=" bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ">
							{star_rating}
						</span>
						<h5 className="text-gray-900 text-xl font-medium m-2">
							Rs {price}
						</h5>
						<a href={url}>
							<button
								type="button"
								className=" inline-block px-6 py-2.5 bg-yellow-300 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-400 hover:shadow-lg focus:bg-yellow-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-800 active:shadow-lg transition duration-150 ease-in-out"
							>
								Buy
							</button>
						</a>
					</div>
				</div>
			</div>
		);
	else
		return (
			<div className="flex justify-center ">
				<div className="block rounded-lg shadow-lg bg-white max-w-sm text-center h-[100%] w-48">
					<div className="py-3 px-6 border-b border-gray-300 font-semibold">
						Amazon
					</div>
					<div className="p-6">
						<span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ">
							{star_rating}
						</span>
						<h5 className="text-gray-900 text-xl font-medium m-2">
							Rs {price}
						</h5>
						<a href={url}>
							<button
								type="button"
								className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
							>
								Buy
							</button>
						</a>
					</div>
				</div>
			</div>
		);
};

export const ProductDealFlipkart = (props) => {
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

	if (flipkart_price !== null)
		if (flipkart_price < price)
			return (
				<div className="flex justify-center shadow-2xl">
					<div className="block rounded-lg shadow-lg bg-yellow-100 max-w-sm text-center h-[100%] w-48">
						<div className="py-3 px-6 border-b font-semibold border-gray-300">
							Flipkart
						</div>
						<div className="mx-6 mt-2 -mb-2 bg-yellow-400 text-white border-yellow-400 border-2 rounded-md">
							Best Deal
						</div>
						<div className="p-6">
							<span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ">
								{flipkart_star_rating} out of 5 stars
							</span>
							<h5 className="text-gray-900 text-xl font-medium m-2">
								Rs {flipkart_price}
							</h5>
							<a href={flipkart_url}>
								<button
									type="button"
									className=" inline-block px-6 py-2.5 bg-yellow-300 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-400 hover:shadow-lg focus:bg-yellow-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-800 active:shadow-lg transition duration-150 ease-in-out"
								>
									Buy
								</button>
							</a>
						</div>
					</div>
				</div>
			);
		else
			return (
				<div className="flex justify-center ">
					<div className="block rounded-lg shadow-xl bg-white max-w-sm text-center h-[100%] w-48">
						<div className="py-3 px-6 border-b border-gray-300 font-semibold">
							Flipkart
						</div>
						<div className="p-6">
							<span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ">
								{flipkart_star_rating} out of 5 stars
							</span>
							<h5 className="text-gray-900 text-xl font-medium m-2">
								Rs {flipkart_price}
							</h5>
							<a href={flipkart_url}>
								<button
									type="button"
									className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
								>
									Buy
								</button>
							</a>
						</div>
					</div>
				</div>
			);
	else
		return (
			<div className="flex justify-center ">
				<div className="block rounded-lg shadow-lg bg-white max-w-sm text-center h-[100%] w-48">
					<div className="py-3 px-6 border-b border-gray-300 font-semibold">
						Flipkart
					</div>
					<div className="p-6">
						<h5 className="text-gray-900 text-xl font-medium m-2 mb-8">
							Not Available
						</h5>

						<button
							disabled
							type="button"
							className=" inline-block px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md"
						>
							Buy
						</button>
					</div>
				</div>
			</div>
		);
};
