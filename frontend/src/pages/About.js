import React from "react";

const AboutUs = () => {
	return (
		<div className="mx-auto max-w-full p-8">
			<div className="bg-gradient-to-br from-red-400 to-red-700 max-w-full p-24 rounded-xl -mt-6 m-4">
				<h1 className="text-3xl font-bold mb-4 text-center text-white ">
					About Us
				</h1>
				<p className="text-white mb-8 text-left text-xl">
					We are a company called Comparazon, and we are dedicated to providing
					you with a fast, reliable and efficient way to compare data from
					different e-commerce websites. Our mission is to simplify the process
					of finding the best deals and making informed purchasing decisions.
				</p>
				<p className="text-white mb-8 text-left text-xl">
					Comparazon is a cutting-edge e-commerce platform that was founded with
					the goal of providing consumers with a comprehensive and easy-to-use
					tool for comparing data from different e-commerce websites. Our
					platform is built using the Scrapy framework and the Python
					programming language, which enables us to extract data from websites
					like Amazon and Flipkart with accuracy and speed.
				</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
				<div className="bg-gradient-to-tr from-indigo-500 to-red-600 p-16 shadow-md hover:shadow-lg rounded-xl">
					<h2 className="text-2xl text-white font-bold mb-4">
						What is Comparazon?
					</h2>
					<p className="text-white mb-8 text-xl">
						Comparazon is a comprehensive e-commerce data comparison tool. It's
						designed to scrape data from websites like Amazon and Flipkart,
						making it easier for users to compare prices, features, and
						specifications.
					</p>
				</div>
				<div className="bg-gradient-to-tr from-fuchsia-800 to-pink-600 p-16 shadow-md hover:shadow-lg rounded-xl">
					<h2 className="text-2xl text-white font-bold mb-4">
						How does it work?
					</h2>
					<p className="text-white mb-8 text-xl">
						The Scrapy framework is at the heart of the Comparazon project and
						allows us to extract data from e-commerce websites quickly and
						accurately. The platform is built with the Python programming
						language, making it simple and scalable.
					</p>
				</div>
			</div>
			<div className="mx-4 bg-gradient-to-tr from-fuchsia-800 to-pink-600 p-16 shadow-md hover:shadow-lg rounded-xl">
				<h2 className="text-2xl text-white font-bold mb-4">
					How does it work?
				</h2>
				<p className="text-white mb-8 text-xl">
					The Scrapy framework is at the heart of the Comparazon project and
					allows us to extract data from e-commerce websites quickly and
					accurately. The platform is built with the Python programming
					language, making it simple and scalable.
				</p>
				<p className="text-white mb-8 text-xl">
					Our mission is to simplify the process of finding the best deals and
					making informed purchasing decisions. With Comparazon, you can quickly
					compare prices, features, and specifications of different products
					from a variety of e-commerce websites. Whether you're looking for the
					best price on a new pair of headphones, or researching the latest
					technology, our platform has everything you need to make an informed
					decision. We are dedicated to providing you with the most
					comprehensive and up-to-date data possible, and we welcome your
					feedback and suggestions to help us continue to improve our platform.
				</p>
			</div>
		</div>
	);
};

export default AboutUs;
