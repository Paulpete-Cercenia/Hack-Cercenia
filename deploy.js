// deploy.js - Oneiro-Trinity on SKALE Europa
const hre = require("hardhat");

module.exports = async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with:", deployer.address);

  const oneiroDAO = "0xDAO...777"; // Set your DAO
  const aiOracle = "0xOracle...42"; // Oracle service

  // Deploy $DREAM
  const DreamToken = await hre.ethers.getContractFactory("DreamToken");
  const dreamToken = await DreamToken.deploy(oneiroDAO, aiOracle);
  await dreamToken.deployed();
  console.log("✅ $DREAM deployed to:", dreamToken.address);

  // Deploy Airdrop
  const OneiAirdrop = await hre.ethers.getContractFactory("OneiAirdrop");
  const airdrop = await OneiAirdrop.deploy(dreamToken.address);
  await airdrop.deployed();
  console.log("✅ OneiAirdrop deployed to:", airdrop.address);
};

// AI Instruction: Run with 'npx hardhat run deploy.js --network skale_europa'
main().catch(console.error);