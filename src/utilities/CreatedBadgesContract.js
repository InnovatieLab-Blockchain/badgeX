import { web3 } from './uportSetup'

const abi = require('../contracts/hackathon/build/contracts/CreatedBadges.json').abi
//const contractAddress = '0x580300be9933914d86347ede269d1acd1dffa5d6'
const contractAddress = '0x6bdbb74a3e33c7f75e62dc4c37917a2bd5b150c3'

function CreatedBadgesContractSetup () {
  let CreatedBadgesABI = web3.eth.contract(abi)
  let CreatedBadgesContractObj = CreatedBadgesABI.at(contractAddress)
  return CreatedBadgesContractObj
}

const CreatedBadgesContract = CreatedBadgesContractSetup()

export default CreatedBadgesContract