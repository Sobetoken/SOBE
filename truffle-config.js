const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();
const alchemyApiKey = 'UEzRTXqsgUlASzm4ruIkBnAe3ImLmygo';

module.exports = {
    networks: {
        polygon: {
            provider: () => new HDWalletProvider(mnemonic, `https://polygon-mainnet.g.alchemy.com/v2/${alchemyApiKey}`),
            network_id: 137,       // Polygon mainnet
            gas: 12000000,          // Gas limit increase to 10 million
            gasPrice: 50000000000,  // 50 Gwei
            confirmations: 2,
            timeoutBlocks: 500,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: "0.8.25"
        }
    }
};
