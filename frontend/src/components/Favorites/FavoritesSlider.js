import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import MobileCard from "./FavoriteCard";
import { useAuthContext } from "../../hooks/useAuthContext";
import { Box, Grid } from "@mui/material";
// const url_proxy = "https://syntax-terminators-hosting-api.vercel.app/";
import url_proxy from "../../api/api";
import { json } from "react-router-dom";

export default function MobileSlider() {
	const { user } = useAuthContext();
	const [favorites, setFavorites] = useState([]);
	const [cart, setCart] = useState([]);

	// useEffect(() => {
	// 	fetch(`${url_proxy}user/favorites`)
	// 		.then((res) => res.json())
	// 		.then((jsonRes) => setFavorites(jsonRes));
	// }, []);

	useEffect(() => {
		if (user) {
			fetch(`${url_proxy}user/favorites`, {
				headers: {
					Authorization: `Bearer ${user.token}`,
				},
			})
				.then((res) => res.json())
				.then((jsonRes) => {
					setFavorites(jsonRes);
					setCart([jsonRes]);
				});
		}
	}, [user]);

	console.log('fav',favorites);

	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
	};
	return (
		<div className="m-4 min-h-full">
			<Slider {...settings} className="m-8 min-h-fit">
				{cart.map((mobile) => {
					return (
						<div>
							<MobileCard {...mobile} key={mobile._id} />
						</div>
					);
				})}
			</Slider>
		</div>
	);
}
