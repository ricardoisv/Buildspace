require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url: "https://necessary-soft-fog.matic-testnet.discover.quiknode.pro/d045a57eb00153a85b2acad538c2cc3bd471ff50/",
      accounts: ["67c5df379d7f6f99280ac71ee0e8ec7488a3a2f99a2320f269d2a165741fda9e"],
    }
  }
};


require('@nomiclabs/hardhat-waffle');
require('dotenv').config();

module.exports = {
  solidity: '0.8.17',
  networks: {
    mumbai: {
      url: process.env.STAGING_QUICKNODE_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
    mainnet: {
      chainId: 1,
      url: process.env.PROD_QUICKNODE_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};