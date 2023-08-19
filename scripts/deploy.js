const hre = require("hardhat");

async function main() {
  const Chai = await hre.ethers.getContractFactory("chai"); //fetching ABI & bytecode
  const chai = await Chai.deploy(); //creating an instance of our smart contract
  
  //await chai.waitForDeployment();  //deploying your smart contract
  //console.log("Deployed contract address: ", `${chai.getAddress()}`);

  const token = await ethers.deployContract("chai");
  console.log("Deployed Contract Address:", await token.getAddress());
  //0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512
}

/* $ npx hardhat run scripts/deploy.js --network sepolia
Deployed Contract Address: 0x232eeD1243678750E945783c3A87065E4463b5Ea */

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
