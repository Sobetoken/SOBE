const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();

const { MNEMONIC, ALCHEMY_API_KEY } = process.env;

module.exports = {
  networks: {
    polygonAmoyTestnet: {
      provider: () => new HDWalletProvider(
        MNEMONIC,
        `https://polygon-amoy.g.alchemy.com/v2/${ALCHEMY_API_KEY}`  // Update this to match the Alchemy endpoint for the Amoy testnet
      ),
      network_id: 80002,       // Update this to the correct network ID if it's different
      confirmations: 2,        // # of confirmations to wait between deployments. (default: 0)
      timeoutBlocks: 200,      // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true         // Skip dry run before migrations? (default: false for public nets)
    },
  },
  compilers: {
    solc: {
      version: '0.8.20',       // Fetch exact version from solc-bin (default: truffle's version)
    },
  },
};
