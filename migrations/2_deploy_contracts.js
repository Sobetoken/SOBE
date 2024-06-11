const SoberSloth = artifacts.require("SoberSloth");

module.exports = function (deployer, network, accounts) {
  const initialOwner = accounts[0]; // Use the first account as the owner

  deployer.deploy(SoberSloth, initialOwner);
};
