import { ethers } from "hardhat";

async function main() {
  const accounts = await ethers.getSigners();
  const account = accounts[0];

  const accountBalance = await account.getBalance();
  const gasPrice = await ethers.provider.getGasPrice();

  console.log("Deploying contracts by account:", account.address);
  console.log("Account balance:", ethers.utils.formatEther(accountBalance));
  console.log("Gas price:", ethers.utils.formatEther(gasPrice));

  const factory = await ethers.getContractFactory("Faded22Drop");

  const faded22Drop = await factory.deploy();
  console.log("Transaction started with hash:", faded22Drop.deployTransaction.hash);

  await faded22Drop.deployed();
  console.log("Contract deployed to:", faded22Drop.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});