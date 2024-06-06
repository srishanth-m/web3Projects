require("dotenv").config();
const { Web3 } = require("web3");

const apiKey = process.env.API_KEY;

const node = `https://go.getblock.io/${apiKey}`;

const web3 = new Web3(node);

console.log(web3);
