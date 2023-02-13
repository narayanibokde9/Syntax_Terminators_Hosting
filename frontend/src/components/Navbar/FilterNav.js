import { React, useEffect, useState } from "react";
import {
	ListBrandDivs,
	ListPriceDivs,
	SidebarButton,
	SidebarButtonCross,
} from "./FilterNavComponents";
import url_proxy from "../../api/api";
// const url_proxy = "https://syntax-terminators-hosting-api.vercel.app/";

function FilterNav() {
	const [brandFetch, setBrandFetch] = useState([]);
	const [storageFetch, setStorageFetch] = useState([]);

	useEffect(() => {
		fetch(`${url_proxy}products/brands`)
			.then((res) => res.json())
			.then((jsonRes) => setBrandFetch(jsonRes));
	}, []);

	useEffect(() => {
		fetch(`${url_proxy}products/storage`)
			.then((res) => res.json())
			.then((jsonRes) => setStorageFetch(jsonRes));
	}, []);

	const prices = [
		{ value: "0to9999", data: "0 - 9999" },
		{ value: "10000to19000", data: "10000 - 19999" },
		{ value: "20000to29000", data: "20000 - 29999" },
		{ value: "30000to150000", data: "30000 - 150000" },
	];

	const [brand, setBrand] = useState([]);
	const [price, setPrice] = useState(['0to150000']);
	const [priceSort, setPriceSort] = useState(1);
	const [ratingSort, setRatingSort] = useState(-1);

	const handleCheckboxChangeBrand = (event) => {
		const itemValue = event.target.value;
		if (event.target.checked) {
			setBrand([...brand, itemValue]);
		} else {
			setBrand(brand.filter((i) => i !== itemValue));
		}
	};

	const handleCheckboxChangePrice = (event) => {
		const itemValue = event.target.value;
		if (event.target.checked) {
			setPrice([itemValue]);
		} else {
			setPrice(price.filter((i) => i !== itemValue));
		}
	};

	const handleChangeRatingSort = (e) => {
		setRatingSort(e.target.value);
	};

	const handleChangePriceSort = (e) => {
		setPriceSort(e.target.value);
	};

	const queryBrand = brand
		.map((item) => `${encodeURIComponent(item)}`)
		.join(",");

	const queryPrice = price
		.map((item) => `${encodeURIComponent(item)}`)
		.join(",");

	const url = `/filter?brand=${queryBrand}&price=${queryPrice}&priceSort=${priceSort}&ratingSort=${ratingSort}`;

	const applyFilters = (e) => {
		e.preventDefault();
		window.location.href = url;
		console.log(url);
	};

	const [showMoreBrand, setShowMoreBrand] = useState(false);
	const [showMoreStor, setShowMoreStor] = useState(false);

	const toggleShowMoreBrand = (e) => {
		e.preventDefault();
		setShowMoreBrand(!showMoreBrand);
	};
	return (
		<>
			<SidebarButton />
			<div
				id="drawer-navigation"
				class="fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-gray-800"
				tabindex="-1"
				aria-labelledby="drawer-navigation-label"
			>
				<h5
					id="drawer-navigation-label"
					class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
				>
					Filters
				</h5>
				<SidebarButtonCross />
				<div class="py-4 overflow-y-auto">
					<form onSubmit={applyFilters}>
						<div
							id="mega-menu-full-dropdown"
							className="mt-1 mb-[5%] border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600"
						>
							<div className="flex max-w-screen-xl flex-col px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
								<ul>
									<h3 className="font-semibold text-gray-900 dark:text-white">
										Sort By
									</h3>
									<li className="p-3">
										<label for="underline_select1" className="sr-only">
											Underline select
										</label>
										<select
											onChange={handleChangePriceSort}
											id="underline_select1"
											className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
										>
											<option selected>Price</option>
											<option value="1">Price : Ascending</option>
											<option value="-1">Price : Descending</option>
										</select>
									</li>
									<li className="p-3">
										<label for="underline_select2" className="sr-only">
											Underline select
										</label>
										<select
											onChange={handleChangeRatingSort}
											id="underline_select2"
											className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
										>
											<option selected>Rating</option>
											<option value="1">Rating : Ascending</option>
											<option value="-1">Rating : Descending</option>
										</select>
									</li>

									<li>
										<h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
											Brand
										</h3>

										<ul className="w-48 mb-4 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
											{brandFetch
												.slice(0, showMoreBrand ? brandFetch.length : 5)
												.map((brands) => {
													return (
														<ListBrandDivs
															brand={brands}
															onChange={handleCheckboxChangeBrand}
														/>
													);
												})}
										</ul>
										<button className="underline" onClick={toggleShowMoreBrand}>
											{showMoreBrand ? "Show Less" : "Show More"}
										</button>
									</li>
									
									<li>
										<h3 className="mt-4 mb-4 font-semibold text-gray-900 dark:text-white">
											Price
										</h3>
										<ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
											{prices.map((price) => {
												return (
													<ListPriceDivs
														price={price}
														onChange={handleCheckboxChangePrice}
													/>
												);
											})}
										</ul>
									</li>
								</ul>

								<button
									className="m-6  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
									type="submit"
								>
									Apply Filters
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default FilterNav;
