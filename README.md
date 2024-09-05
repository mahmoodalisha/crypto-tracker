# Cryptocurrency Tracker

## Overview

The **Cryptocurrency Tracker** is a web application built using React that provides real-time information about various cryptocurrencies. The data is fetched from the Coinranking API via RapidAPI, allowing users to stay updated with the latest market trends, including total cryptocurrencies, exchanges, market capitalization, volume, and today's market performance.

![Screenshot 2024-08-28 212830](https://github.com/user-attachments/assets/937ce9f8-29e8-420d-8152-e47063e3106a)


## Features

- **Real-Time Data:** Fetches up-to-date data on cryptocurrencies from the Coinranking API.
- **Total Cryptocurrencies:** Displays the total number of cryptocurrencies available.
- **Exchanges:** Provides information on various cryptocurrency exchanges.
- **Market Capitalization:** Shows the total market cap of all cryptocurrencies.
- **Volume:** Displays the total trading volume over the past 24 hours.
- **Today's Market:** Highlights the market trends and performance for the current day.

## Technologies Used

- **Frontend:**
  - React.js
  - Axios for API requests
  - React Router for navigation
  - CSS for styling

- **API:**
  - Coinranking API via RapidAPI

## Installation and Setup

### Prerequisites

- Node.js

### Steps to Install

1. **Clone the repository:**
   
   git clone https://github.com/mahmoodalisha/crypto-tracker.git
   cd crypto-tracker

Install dependencies:

npm install
Environment Variables:

Create a .env file in the root directory and add your API key:
makefile

REACT_APP_RAPIDAPI_KEY=your_rapidapi_key
Run the Application:


npm start
Access the Application:

Open your browser and go to http://localhost:3000 to view the app.
Usage
Home Page: View the overall market summary, including total cryptocurrencies, market cap, and trading volume.
Cryptocurrencies: Browse through a list of cryptocurrencies with detailed information about each one.
Exchanges: Get a list of cryptocurrency exchanges and their trading volumes.
