/* eslint-disable */
export function usdcBalance(){
    const wallet = useWallet()
    const { useState, useEffect } = require('react');
    const Web3 = require('web3');
    const MyContract = require('../Abi/erc20.json');
    const web3 = new Web3('https://rpc-mainnet.maticvigil.com/v1/aef86637f2bb45232881ae94ee60cf58dae225fc');
    const usdc = new web3.eth.Contract(
        MyContract,
        '0x2791bca1f2de4661ed88a30c99a7a9449aa84174'
    );
    const [balance, setBalance] = useState(undefined)

    useEffect(async () => {
        const usdcBalance = await usdc.methods.balanceOf(wallet.account).call()
        setBalance(usdcBalance);
    }, []);
    return(
            {balance}
    );
}   