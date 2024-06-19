const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();
const alchemyApiKey = 'svuks2ICzk-NhMXJevL7fFuDP0fEllqT';

module.exports = {
    networks: {
        amoy: {
            provider: () => new HDWalletProvider(mnemonic, `https://polygon-amoy.g.alchemy.com/v2/svuks2ICzk-NhMXJevL7fFuDP0fEllqT`),
            network_id: 80002,       // Match any network id
            gas: 5500000,
            confirmations: 2,
            timeoutBlocks: 200,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: "0.8.25"
        }
    }
};
