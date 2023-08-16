require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

const GEORLI_URL = process.env.GEORLI_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
module.exports = {
  solidity: "0.8.19",
  networks: {
    georli: {
      url: GEORLI_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
