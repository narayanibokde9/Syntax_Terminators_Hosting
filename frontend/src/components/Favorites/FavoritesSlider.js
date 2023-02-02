import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import MobileCard from "./FavoriteCard";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function MobileSlider() {
	const { user } = useAuthContext();
	const [favorites, setFavorites] = useState([]);

	useEffect(() => {
		if (user) {
			fetch("user/favorites", {
				headers: {
					'Authorization' : `Bearer ${user.token}`
				}
			})
				.then((res) => res.json())
				.then((jsonRes) => setFavorites(jsonRes));
		}
	}, [user]);

	console.log(favorites);

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
				{favorites.map((mobile) => {
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
