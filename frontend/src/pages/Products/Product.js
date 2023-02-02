import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { useAuthContext } from "../../hooks/useAuthContext";

import ProductDetails from "../../components/Product/ProductDetails";
import {
	ProductDealAmazon,
	ProductDealFlipkart,
	ProductDealNoFlipkart,
} from "../../components/Product/ProductDeals";
import ProductInfo from "../../components/Product/ProductInfo";

function Product() {
	const [product, setProduct] = useState();
	const [favorite, setFavorite] = useState([]);

	const { user } = useAuthContext();
	const { _id } = useParams();

	useEffect(() => {
		fetch(`/products/showPhone/${_id}`)
			.then((res) => res.json())
			.then((jsonRes) => setProduct(jsonRes));
	}, []);

	const addToFavorites = () => {
		if (!user) {
			window.location.href = "/login";
			return;
		}
		setFavorite(favorite.push(product));
		console.log(product);

		fetch("/user/favorites", {
			method: "POST",
			body: JSON.stringify(product),
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${user.token}`,
			},
		}).then((e) => {
			console.log(e);
		});
	};

	return (
		<div className="flex flex-col mx-[10%] my-[5%] space-y-[5%]">
			<div className="flex flex-col">
				<div className="flex flex-row space-x-4 justify-evenly">
					<ProductDetail />
					<div className="flex flex-col">
						<div className="flex space-x-12">
							<ProdAmazon className="h-64 w-32" />
							<ProdFlipkart className="h-64 w-32" />
						</div>
						<div className="flex justify-center">
							<Link to="/favorites">
								<button
									className="my-16 max-h-10 text-white bg-red-500 hover:bg-red-600  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
									onClick={addToFavorites}
								>
									Add to favorites
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div>
				<ProductInfoTable />
			</div>
		</div>
	);
}

export const ProductDetail = () => {
	const [product, setProduct] = useState();

	const { _id } = useParams();

	useEffect(() => {
		fetch(`/products/showPhone/${_id}`)
			.then((res) => res.json())
			.then((jsonRes) => setProduct(jsonRes));
	}, []);

	return (
		<div className="max-w-md">
			<ProductDetails {...product} />
		</div>
	);
};

const ProdAmazon = () => {
	const [product, setProduct] = useState();

	const { _id } = useParams();

	useEffect(() => {
		fetch(`/products/showPhone/${_id}`)
			.then((res) => res.json())
			.then((jsonRes) => setProduct(jsonRes));
	}, []);

	return (
		<div className="max-w-md">
			<ProductDealAmazon {...product} />
		</div>
	);
};

const ProdFlipkart = () => {
	const [product, setProduct] = useState();

	const { _id } = useParams();

	useEffect(() => {
		fetch(`/products/showPhone/${_id}`)
			.then((res) => res.json())
			.then((jsonRes) => setProduct(jsonRes));
	}, []);

	return (
		<div className="max-w-md">
			<ProductDealFlipkart {...product} />
		</div>
	);
};

const ProductInfoTable = () => {
	const [product, setProduct] = useState();

	const { _id } = useParams();

	useEffect(() => {
		fetch(`/products/showPhone/${_id}`)
			.then((res) => res.json())
			.then((jsonRes) => setProduct(jsonRes));
	}, []);

	return (
		<div className="">
			<ProductInfo {...product} />
		</div>
	);
};

export default Product;
