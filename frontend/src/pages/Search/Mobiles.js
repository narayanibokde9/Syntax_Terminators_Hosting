import { React, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import FilterNav from "../../components/Navbar/FilterNav";
import MobilePage from "../../components/Mobile/MobilePage";

function Mobiles() {
	return (
		<div className="">
			<FilterNav />
			<div className="inset-y-0 right-0">
				<MobilePage />
			</div>
		</div>
	);
}

export default Mobiles;
