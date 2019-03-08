const BeApp = artifacts.require("./BeApp.sol");

module.exports = function(deployer) {
  deployer.deploy(BeApp);
};
