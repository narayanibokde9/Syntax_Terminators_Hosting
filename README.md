<!-- PROJECT LOGO -->
<div align="center">
  <a href="https://syntax-terminators-hosting.vercel.app">
    <img src="https://user-images.githubusercontent.com/116101909/216388090-19e5fb93-b902-4943-8578-4276ad7b5eb8.png" alt="Logo" height="100">
  </a>

  <h4 align="center">A scraper website: compare prices by scraping various online stores.</h4>

  <p align="center">
    CoC Inheritance 2022 || Syntax Terminators
    <br />
    <a href="https://syntax-terminators-hosting.vercel.app"><strong>Explore the website »</strong></a>
    <br />
    <br />
<!--     <a href="https://github.com/othneildrew/Best-README-Template">View Demo</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Report Bug</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Request Feature</a> -->
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Comparazon is a user-friendly website that aims to streamline the product search process by scraping data from various e-commerce websites and presenting it on a single, centralized platform. By aggregating products from different online stores, Comparazon offers users a convenient and efficient way to browse and compare a wide range of products, saving valuable time and effort. 

* Comparazon is an open-source project for scraping data from e-commerce giants like Amazon and Flipkart. Powered by the Scrapy framework and Python, it enables effortless price comparison and product research.
* Built on Scrapy's web crawling capabilities and Python's versatility, Comparazon delivers a seamless user experience.

<b>Experience the ease of finding the best deals and making informed purchasing decisions with Comparazon.</b>

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Built With

#### Front-end

![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=ffffff)
![MUI](https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)
![JS](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![TailwindCSS](https://camo.githubusercontent.com/5d16e7fdd964ebca50ca82d6c8b081045630340427c463f4470050acd4e50ef3/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d5461696c77696e642b43535326636f6c6f723d323232323232266c6f676f3d5461696c77696e642b435353266c6f676f436f6c6f723d303642364434266c6162656c3d)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)


#### Back-end

![Nodejs](https://img.shields.io/badge/-Nodejs-339933?style=flat-square&logo=Node.js&logoColor=ffffff)
![Express](https://img.shields.io/badge/express.js-%23404d59.svg?style=flat-square&logo=express&logoColor=%2361DAFB)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)

#### Database
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=flat-square&logo=mongodb&logoColor=white)

#### Scraping

![Python](https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue)
<img src="https://camo.githubusercontent.com/40d00cefb120a829517e503658aaf6c987d5f9cc6be5e2e35fb20bd63bdbceb5/68747470733a2f2f7363726170792e6f72672f696d672f7363726170796c6f676f2e706e67" width="100" height="30">
<img src="https://avatars.githubusercontent.com/u/85173056?s=200&v=4" height="35" width="35">
<img src="https://pbs.twimg.com/profile_images/1574710094872412160/yRJ5Coye_400x400.png" height="35" width="35">
<img src="https://avatars.githubusercontent.com/u/2810941?s=200&v=4" width="35" height="35">
![Selenium](https://img.shields.io/badge/Selenium-43B02A?style=for-the-badge&logo=Selenium&logoColor=white)
![JSON](https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white)
![Shell Script](https://img.shields.io/badge/shell_script-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white)
    <br>
      </td>
    </tr>
  </table>
</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Progress
#### Web Dev
- [x] Secure authentication for users to access the website.
- [x] Authorization system to manage user access.
- [x] Efficient rendering and fetching of mobile phones data from the MongoDB database.
- [x] Automated database update process through hourly scraping script.
- [x] User-friendly "Add to Favorites" feature for quick access.
- [x] Advanced filtering capabilities for better user experience.
- [x] Intuitive search feature to find desired content.
- [x] Comparison of the best deals from Amazon and Flipkart e-commerce websites.

#### Scraping
- [x] Scraping around 300 phones in a matter of seconds
- [x] Using that as a database scraping those products on Flipkart
- [x] Updating the remote database
- [x] Scraper runs every hour on a Google Cloud Platform Virtual Instance via a cronjob
- [x] Can Monitor the Scraping Jobs via a dashboard service
- [x] Implemented rotating proxies to avoid blocking of the spider
- [x] Can also use Selenium to scrape dynamic websites 

## Future Scope
- Extension for price comparison by checking the product opened in the user's browser
- Sending notifications to user if price drop on favorite items
- Scrape more ecommerce websites
- Scrape more categories and check for data errors if any
## Applications
- Comparazon is an open-source project that provides a cutting-edge solution for data collection from e-commerce websites like Amazon and Flipkart. The Scrapy framework and Python programming language are used to build the project, which provides an easy-to-use API service to access the data scraped from these websites. The scraped data can be exported in json format, allowing users to use and analyse the data in their preferred format.
- Comparazon provides e-commerce researchers, data analysts, and businesses with a powerful tool for collecting data from e-commerce websites in real-time. This enables them to make informed decisions about which products to buy and at what price, optimising their e-commerce strategy and increasing profits. The project intends to scrape and crawl data from more e-commerce websites in the future, as well as expand its capabilities to include more product categories such as laptops, accessories, footwear, and so on.
- Comparazon has an easy-to-use user interface that allows users to interact with the collected data. The website is designed to be user-friendly and to allow users to access and analyse data in a meaningful way. This allows them to identify trends quickly, compare prices, and make informed purchasing decisions. Users can use Comparazon to take control of their e-commerce strategy and make the most of data collected from e-commerce websites.

## 🛠Project Setup

1. Clone the repository
```
https://github.com/narayanibokde9/Syntax_Terminators_Hosting.git
```
To start the frontend user interface
```
cd frontend
npm install
npm start
```
To start the backend server
```
cd backend
npm install
nodemon index.js
```

## Screenshots
### Home page
![image](https://github.com/narayanibokde9/Syntax_Terminators_Hosting/assets/116104916/4b68eb4b-5d41-4390-80d3-f241af8d52d4)
### Loading page
![image](https://github.com/narayanibokde9/Syntax_Terminators_Hosting/assets/116104916/2af74c03-bb2a-4df6-b74d-7963e1d0b68b)
### Mobiles
![image](https://github.com/narayanibokde9/Syntax_Terminators_Hosting/assets/116104916/870094c0-cb74-4779-9731-c8fe4bec9459)
### Deals
![image](https://github.com/narayanibokde9/Syntax_Terminators_Hosting/assets/116104916/26c2b8c3-6efc-43f8-a923-6ba0e934fa88)
### Product details
![image](https://github.com/narayanibokde9/Syntax_Terminators_Hosting/assets/116104916/49dee474-23b6-476f-9459-f6b52e1269e9)
### Login page
![image](https://github.com/narayanibokde9/Syntax_Terminators_Hosting/assets/116104916/bc3e04b7-eff0-4636-a813-a975a8ce791c)
### Signup page
![image](https://github.com/narayanibokde9/Syntax_Terminators_Hosting/assets/116104916/f4986f8a-f9cb-4fdb-9cec-27d7af5f1268)
### Profile page
![image](https://github.com/narayanibokde9/Syntax_Terminators_Hosting/assets/116104916/03b4b45e-0823-4379-909f-3e942bc2eae1)
### Filters page
![image](https://github.com/narayanibokde9/Syntax_Terminators_Hosting/assets/116104916/a7ae6831-8980-4066-b7db-0b5cb96b424f)
### Filter results
![image](https://github.com/narayanibokde9/Syntax_Terminators_Hosting/assets/116104916/6ab7c388-3548-4a9e-9f0d-ab0e22280224)
### Search results
![image](https://github.com/narayanibokde9/Syntax_Terminators_Hosting/assets/116104916/fdb9e444-2ae6-4782-a56f-f4abc6b2b559)
### Pagination
![image](https://github.com/narayanibokde9/Syntax_Terminators_Hosting/assets/116104916/4df61aef-bdd7-4f75-8c7a-3a578bdbea1e)
### Favorite's cart
![image](https://github.com/narayanibokde9/Syntax_Terminators_Hosting/assets/116104916/5de9568a-2784-4d17-96e8-27e66d920ad2)

## 👨💻Team Members

- [Shaurya](https://github.com/shauryaswarup) Email: srswarup_b21@ce.vjti.ac.in
- [Narayani](https://github.com/narayanibokde9) Email: nbokde_b21@ce.vjti.ac.in
