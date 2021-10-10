const TaroNFTMarketplace = artifacts.require("TaroNFTMarketplace");

module.exports = function (deployer) {
  deployer.deploy(TaroNFTMarketplace);
};
