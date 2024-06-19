const SoberSlothToken = artifacts.require("SoberSlothToken");

module.exports = function (deployer) {
    deployer.deploy(SoberSlothToken);
};
