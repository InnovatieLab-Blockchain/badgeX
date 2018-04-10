import { web3 } from './uportSetup'

const abi = require('../contracts/hackathon/build/contracts/Badge.json').abi

export default function BadgeContract (address) {
  let BadgeABI = web3.eth.contract(abi)
  let BadgeContractObj = BadgeABI.at(address)
  return BadgeContractObj
}