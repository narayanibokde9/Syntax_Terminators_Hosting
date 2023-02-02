import React from "react";
import MobileSlider from "../../components/Mobile/MobileSlider";
import Banner1 from "../../images/Banner1.png";
export const Home = () => {
	return (
		<div>
			<img src={Banner1} alt="" />
			{/* <BannerSlider /> */}
			<MobileSlider />
		</div>
	);
};

export default Home;
