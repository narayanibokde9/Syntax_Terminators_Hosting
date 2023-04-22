import { React, useEffect, useState } from "react";

import MobileCardTemp from "./MobileCardTemp";

import Backdrop from "@mui/material/Backdrop";
import { CircularProgress } from "@mui/material";

import Slider from "react-slick";
import url_proxy from "../../api/api";

export default function MobileSlider() {
	const [product, setProduct] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [open, setOpen] = useState(true);

	useEffect(() => {
		fetch(`${url_proxy}products/showdb`)
			.then((res) => res.json())
			.then((jsonRes) => {
				setProduct(jsonRes);
				setIsLoading(false);
				setOpen(!open);
			});
	}, []);

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
	};
	return (
		<div className="m-4">
			<h1 className="text-2xl">Mobiles</h1>
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
				<Slider {...settings} className=" -mb-16 m-8 ">
					{product &&
						product.map((mobile) => {
							const { _id } = mobile;
							return (
								<div className="px-2">
									<MobileCardTemp {...mobile} key={_id} />
								</div>
							);
						})}
				</Slider>
			)}
		</div>
	);
}
