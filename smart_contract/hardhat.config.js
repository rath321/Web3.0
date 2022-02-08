require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/3Ibege7ghts5gpMKAewYvpJViz5efHxA',
      accounts: ['6bfdc39889553a4f03043d4e356b9b3ce4a5290ae52589638f6ca208fc35fbb6'],
    },
  },
};