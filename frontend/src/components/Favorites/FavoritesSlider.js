import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import MobileCard from "./FavoriteCard";
import { useAuthContext } from "../../hooks/useAuthContext";
// const url_proxy = "https://syntax-terminators-hosting-api.vercel.app/";
import url_proxy from "../../api/api";

import Backdrop from "@mui/material/Backdrop";
import { CircularProgress } from "@mui/material";

export default function MobileSlider() {
	const { user } = useAuthContext();
	const [favorites, setFavorites] = useState([]);
	const [cart, setCart] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [open, setOpen] = useState(true);

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
					setIsLoading(false);
					setOpen(!open);
				});
		}
	}, [user]);

	console.log("fav", favorites);

	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
	};
	return (
		<div className="m-4 min-h-full">
			{isLoading ? (
				<Backdrop
					sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
					open={open}
				>
					<CircularProgress color="inherit" />
					<div className="px-5">
						<h5 class="truncate capitalize text-xl font-semibold tracking-tight text-white dark:text-white hover:text-red-600">
							Loading...
						</h5>
					</div>
				</Backdrop>
			) : (
				<Slider {...settings} className="m-8 min-h-fit">
					{cart.map((mobile) => {
						return (
							<div>
								<MobileCard {...mobile} key={mobile._id} />
							</div>
						);
					})}
				</Slider>
			)}
		</div>
	);
}
