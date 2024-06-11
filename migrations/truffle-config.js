const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();

const { MNEMONIC, QUICKNODE_URL } = process.env;

module.exports = {
  networks: {
    polygonTestnet: {
      provider: () => new HDWalletProvider(
        MNEMONIC,
        QUICKNODE_URL
      ),
      network_id: 80002,       // Polygon Mumbai Testnet ID
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
