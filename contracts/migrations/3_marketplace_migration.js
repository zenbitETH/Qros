const TaroNFTMarketplace = artifacts.require("TaroNFTMarketplace");

module.exports = function (deployer) {
  deployer.deploy(TaroNFTMarketplace, "0x12f961f564a5fb12b938d8864b6faf5be3abf10b", "0x924a26FA9e046A9Fe737936E1B2f4A326E046D43");
};
