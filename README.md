# CryptoConvert - Backend

![](https://img.shields.io/badge/Node.js-339933.svg?style=for-the-badge&logo=nodedotjs&logoColor=white)
![](https://img.shields.io/badge/Express-000000.svg?style=for-the-badge&logo=Express&logoColor=white)
![](https://img.shields.io/badge/Mocha-8D6748.svg?style=for-the-badge&logo=Mocha&logoColor=white)
![](https://img.shields.io/badge/Chai-A30701.svg?style=for-the-badge&logo=Chai&logoColor=white)

This is a simple Express.js application that provides endpoints to retrieve currency information, top market data, and perform currency conversion using the Coingecko API.

## Installation

1. Clone the repository
2. Install the dependencies: 
`npm install`
3. Set up environment variables: 

   Create a `.env` file in the project's root directory and add your Coingecko API key: COINGECKO_API_KEY=your-api-key

## Usage

Start the application using the following command: `npm run dev` or `npm run start`

API will be available at `http://localhost:4000`

## API Endpoints

### GET /currencies

Retrieve a list of supported currencies.

### POST /top

Get top market data for a specific currency.

### POST /convert

Convert an amount from one currency to another.

## Testing

To run the unit tests, use the following command: `npm run test`

The tests are implemented using Mocha and Chai frameworks.

## Contributing

Contributions are welcome! If you find any issues or enhancements, feel free to open an issue or submit a pull request.
