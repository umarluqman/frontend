
const { default: BigNumber } = require('bignumber.js');
const Web3 = require('web3');
const MyContract = require('../Abi/erc20.json');

const web3 = new Web3('https://rpc-mainnet.maticvigil.com/v1/aef86637f2bb45232881ae94ee60cf58dae225fc');
  
const gaj = new web3.eth.Contract(
    MyContract,
    '0xf4b0903774532aee5ee567c02aab681a81539e92'
  );
 const usdc = new web3.eth.Contract(
   MyContract,
   '0x2791bca1f2de4661ed88a30c99a7a9449aa84174'
 );

const init = async () => {
  const usdcBalance = await usdc.methods.balanceOf('0x99dADf889520b9cEBD9959d3ca1866DC2517Ea1d').call()
  console.log(usdcBalance);
  const gajBalance = await gaj.methods.balanceOf('0x99dADf889520b9cEBD9959d3ca1866DC2517Ea1d').call()
  console.log(gajBalance);
  const price = usdcBalance/gajBalance;
  console.log(new BigNumber(price).toString());
  Price = price;

console.log(Price)
  return price;
}

init();


var Price = 0;

