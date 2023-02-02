export function ListBrandDivs({ brand, onChange }) {
	return (
		<>
			<li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
				<div className="flex items-center pl-3">
					<input
						id={brand}
						type="checkbox"
						value={brand}
						className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
						onChange={onChange}
					/>
					<label
						for={brand}
						className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
					>
						{brand}
					</label>
				</div>
			</li>
		</>
	);
}

export function ListPriceDivs({ price, onChange }) {
	return (
		<>
			<li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
				<div className="flex items-center pl-3">
					<input
						id={price.value}
						type="radio"
						value={price.value}
						name="list-radio"
						className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
						onChange={onChange}
					/>
					<label
						for={price.value}
						className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
					>
						{price.data}
					</label>
				</div>
			</li>
		</>
	);
}

export function SidebarButton() {
	return (
		<>
			<div className="my-6 text-center">
				<button
					className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2"
					type="button"
					data-drawer-target="drawer-navigation"
					data-drawer-show="drawer-navigation"
					aria-controls="drawer-navigation"
				>
					Click to apply Filters
				</button>
			</div>
			<hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
		</>
	);
}

export function SidebarButtonCross() {
	return (
		<button
			type="button"
			data-drawer-hide="drawer-navigation"
			aria-controls="drawer-navigation"
			class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
		>
			<svg
				aria-hidden="true"
				class="w-5 h-5"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
					clip-rule="evenodd"
				></path>
			</svg>
			<span class="sr-only">Close menu</span>
		</button>
	);
}
