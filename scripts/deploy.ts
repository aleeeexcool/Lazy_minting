import { ethers } from "hardhat";

async function main() {

  const NFTLazy = await ethers.getContractFactory("NFTLazy");
  const lazy = await NFTLazy.deploy();
  await lazy.deployed();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
