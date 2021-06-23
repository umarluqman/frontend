/* eslint-disable */
import React, { useEffect, useState } from 'react';
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useWallet, UseWalletProvider } from 'use-wallet'
import bankAccount from '../static/media/bank-account.svg'
import depositArrowNext from '../static/media/deposit-arrow-next.svg'
// import { usdcBalance } from '../hooks/usdcBalance'
import { getWeb3 } from '../hooks/utils.js';
import erc20 from '../Abi/erc20.json'
import DAI from '../static/media/dai.svg'
import USDT from '../static/media/usdt.svg'
import USDC from '../static/media/usdc.svg'
import FRAX from '../static/media/frax.png'
const BigNumber = require('bignumber.js')
import ApproveToken from "../components/DepositUST/ApproveToken";

import USTPool from '../static/media/ust-pool.svg'

function DepositUST() {
    const [USDCApproved, setUSDCApproved] = useState(false);
    const [FRAXApproved, setFRAXApproved] = useState(false);
    const [DAIApproved, setDAIApproved] = useState(false);
    const [USDTApproved, setUSDTApproved] = useState(false);
    const [web3, setWeb3] = useState(undefined);
    const [accounts, setAccounts] = useState(undefined);
    const [usdcContract, setUsdcContract] = useState(undefined);
    const [fraxContract, setFraxContract] = useState(undefined);
    const [daiContract, setDaiContract] = useState(undefined);
    const [usdtContract, setUsdtContract] = useState(undefined);
    const [usdcBalance, setUsdcBalance] = useState(0);
    const [fraxBalance, setFraxBalance] = useState(0);
    const [daiBalance, setDaiBalance] = useState(0);
    const [usdtBalance, setUsdtBalance] = useState(0);
    const [USDCBalance, setUSDCBalance] = useState(0);
    const [FRAXBalance, setFRAXBalance] = useState(0);
    const [DAIBalance, setDAIBalance] = useState(0);
    const [USDTBalance, setUSDTBalance] = useState(0);
  const [swapContract, setSwapContract] = useState()
  const SwapAbi =  require('../Abi/SwapAbi.json')

  useEffect(() => {
    const init = async () => {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
      const networkId = await web3.eth.net.getId();
      const Swapabi = new web3.eth.Contract(
        SwapAbi.abi,
        '0x6bcA12b7a56f19cEB8eaE4d11CCbfb7653Afd0F4',
      );
      const usdc = new web3.eth.Contract(
        erc20,
        '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
      );
      const frax = new web3.eth.Contract(
        erc20,
        '0x104592a158490a9228070e0a8e5343b499e125d0',
      );
      const dai = new web3.eth.Contract(
        erc20,
        '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',
      );
      const usdt = new web3.eth.Contract(
        erc20,
        '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
      );
      
    const usdcBal = await usdc.methods
        .balanceOf(accounts[0])
        .call();
    const fraxBal = await frax.methods
        .balanceOf(accounts[0])
        .call();
    const daiBal = await dai.methods
        .balanceOf(accounts[0])
        .call();
    const usdtBal = await usdt.methods
        .balanceOf(accounts[0])
        .call();
    const usdcBalance = usdcBal / 1000000;
    const fraxBalance = fraxBal / 10**18;
    const daiBalance = daiBal / 10**18;
    const usdtBalance = usdtBal / 10**6;
    console.log(usdcBalance)
      setWeb3(web3);
      setAccounts(accounts);
      setUsdcContract(usdc);
      setFraxContract(frax);
      setDaiContract(dai);
      setUsdtContract(usdt);
      setUsdcBalance(usdcBalance);
      setFraxBalance(fraxBalance);
      setDaiBalance(daiBalance);
      setUsdtBalance(usdtBalance);
      setSwapContract(Swapabi)
    }
    init();
    window.ethereum.on('accountsChanged', accounts => {
      setAccounts(accounts);
    });
  }, []);

  const [Total, setTotal] = useState(0)
  useEffect(() => {
    setTotal(Number(Number(USDCBalance)+Number(FRAXBalance)+Number(USDTBalance)+Number(DAIBalance))*1)
  }, [USDCBalance, DAIBalance, USDTBalance, FRAXBalance])

    async function addLiquidityToToken() {
        const decimals = web3.utils.toBN(18);
      const usdcToDeposit = (Number(USDCBalance))*(10**6);
      const usdtToDeposit = (USDTBalance)*(10**6);
      const fraxAmount = web3.utils.toBN(FRAXBalance);
      const daiAmount = web3.utils.toBN(DAIBalance);
    //   var fraxToDeposit = new BigNumber(web3.utils.toWei(FRAXBalance,'ether')).toString();
    //   var daiToDeposit = new BigNumber(web3.utils.toWei(DAIBalance,'ether')).toString();
    // const mint = await swapContract.methods.calculateTokenAmount(accounts[0],[web3.utils.toBN(fraxAmount.mul(web3.utils.toBN(10).pow(decimals))).toString(), web3.utils.toBN(daiAmount.mul(web3.utils.toBN(10).pow(decimals))).toString(), usdcToDeposit, usdtToDeposit],true).call()
      const mintomint = String(Number((Total)*0.1)*10**18)
      const tx = await swapContract.methods.addLiquidity([web3.utils.toBN(fraxAmount.mul(web3.utils.toBN(10).pow(decimals))).toString(), web3.utils.toBN(daiAmount.mul(web3.utils.toBN(10).pow(decimals))).toString(), usdcToDeposit, usdtToDeposit],mintomint, 1748948520).send({from: accounts[0]})
        console.log(tx.transactionHash)
    }

  // Approval
  async function approveUSDC() {
    const check = await usdcContract.methods.allowance(accounts[0],'0x6bcA12b7a56f19cEB8eaE4d11CCbfb7653Afd0F4').call()
    if (check >= '10000000000000'){
        setUSDCApproved(true)
    } 
    else {
        await usdcContract.methods.approve('0x6bcA12b7a56f19cEB8eaE4d11CCbfb7653Afd0F4','115792089237316195423570985008687907853269984665640564039457584007913129639935').send({from: accounts[0]});
        setUSDCApproved(true)
    }
  };
  async function approveFRAX() {
    const check = await fraxContract.methods.allowance(accounts[0],'0x6bcA12b7a56f19cEB8eaE4d11CCbfb7653Afd0F4').call()
    if (check >= '10000000000000000000000000'){
        setFRAXApproved(true)
    } 
    else {
        const approved = await fraxContract.methods.approve('0x6bcA12b7a56f19cEB8eaE4d11CCbfb7653Afd0F4','115792089237316195423570985008687907853269984665640564039457584007913129639935').send({from: accounts[0]});
        
        setFRAXApproved(true)
    }
  };
  async function approveDAI() {
    const check = await daiContract.methods.allowance(accounts[0],'0x6bcA12b7a56f19cEB8eaE4d11CCbfb7653Afd0F4').call()
    if (check >= '10000000000000000000000000'){
        setDAIApproved(true)
    } 
    else {
        const approved = await daiContract.methods.approve('0x6bcA12b7a56f19cEB8eaE4d11CCbfb7653Afd0F4','115792089237316195423570985008687907853269984665640564039457584007913129639935').send({from: accounts[0]});
        setDAIApproved(true)
    }
  };
  async function approveUSDT() {
    const check = await usdtContract.methods.allowance(accounts[0],'0x6bcA12b7a56f19cEB8eaE4d11CCbfb7653Afd0F4').call()
    if (check >= (10000000)*(10**6)){
        setUSDTApproved(true)
    } 
    else {
        const approved = await usdtContract.methods.approve('0x6bcA12b7a56f19cEB8eaE4d11CCbfb7653Afd0F4','115792089237316195423570985008687907853269984665640564039457584007913129639935').send({from: accounts[0]});
        setUSDTApproved(true)
    }
  };

  async function updateRHSBalance(){
    if (currentRHS.name == 'USDC'){
        setRhsBalance(usdcBalance)
    }
    else if (currentRHS.name == 'USDT'){
        setRhsBalance(usdtBalance)
    }
    else if (currentRHS.name == 'DAI'){
        setRhsBalance(daiBalance)
    }
    else if (currentRHS.name == 'FRAX'){
        setRhsBalance(fraxBalance)
    }
    console.log(rhsBalance)
  }

  function clickedDeposit(){
      addLiquidityToToken()
  }
  
    
    return (
        <div>
            <Header inApp={true} active="Deposit" />
            <div className="container">
                <div className="w-20">
                    <a href="/Deposit"><div className="text-blue-400 mt-3 ">
                        <div className="flex items-center w-auto">
                            <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                                <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                                    <img alt aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} />
                                </div>
                            </div>
                        </div>
                    </div></a>
                </div>
                <div className="dark:text-white text-3xl font-bold mb-6 mt-3">Deposit</div>
                <div className="grid grid-cols-2 gap-7">
                    <div className="col-span-full sm:col-span-1 w-full">
                        <div className=" rounded-3xl shadow-md p-6 lg:p-10 py-4 dark:bg-dark-700 bg-white">
                            <div className="grid grid-cols-5 gap-3 ">
                                <div className="col-span-full">
                                    <div className="dark:text-white text-2xl font-bold mb-6">
                                        Add Liquidity
            </div>
                                    <ApproveToken onType= {(e) => setUSDCBalance(e.target.value)} handleClick={() => approveUSDC()} name="USDC" logo={USDC} balance={usdcBalance} isApproved={USDCApproved}/>
                                    <ApproveToken onType= {(e) => setFRAXBalance(e.target.value)} handleClick={() =>  approveFRAX()} name="FRAX" logo={FRAX} balance={fraxBalance} isApproved={FRAXApproved}/>
                                    <ApproveToken onType= {(e) => setDAIBalance(e.target.value)} handleClick={() =>  approveDAI()} name="DAI" logo={DAI} balance={daiBalance} isApproved={DAIApproved}/>
                                    <ApproveToken onType= {(e) => setUSDTBalance(e.target.value)} handleClick={() =>  approveUSDT()} name="USDT" logo={USDT} balance={usdtBalance} isApproved={USDTApproved}/>

                                    <div className="transactionInfoItem ">
                                        <div className="slippage text-steel-300 text-sm ">
                                            <span>StableGaj and LPs will receive</span><span className="text-blue-400 mx-1">0.07%</span><span>of trading fees.</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-center">
                                        <div className="w-full text-center pt-5 ">
                                            <button onClickCapture={clickedDeposit} className=" focus:outline-none w-full  text-white  py-3 rounded-lg shadow-sm bg-gradient-to-r from-blue-400 to-green-300">
                                                Deposit
                                            </button>
                                        </div>
                                    </div>
                                    <div className="mt-4 mb-3 text-steel-300 text-sm">
                                        <div className="transactionInfoContainer show">
                                            <div className="transactionInfo text-center" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-full sm:col-span-1 w-full">
                        <div className="dark:bg-dark-700 bg-white rounded-3xl shadow-md mb-6">
                            <div className="myShareCard ">
                                <div className="absolute -ml-6 mt-14 hidden sm:block">
                                    <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                                        <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                                            <img alt aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} />
                                        </div>
                                        <img src={depositArrowNext} decoding="async" style={{ visibility: 'inherit', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} srcSet={depositArrowNext} />
                                    </div>
                                </div>
                                <div className="dark:text-white dark:border-b-dark-500 flex items-center border-b p-6 pb-2 lg:px-12 ">
                                    <div className="pb-2 mr-4">
                                        <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                                            <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                                                <img alt aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=" style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} />
                                            </div>
                                            <img src={bankAccount} decoding="async" style={{ visibility: 'inherit', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} srcSet={bankAccount} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-sm mb-1">You will receive</div>
                                        <div className="dark:text-white text-xl font-bold mb-1">Total</div>
                                        <div className="text-2xl text-blue-400 font-bold">{Number(Total)*0.96} LP</div>
                                        <div className="text-2xl text-blue-400 font-bold">≈ ${Total}</div>
                                    </div>
                                </div>
                                {/* <div className="dark:bg-dark-700 dark:text-white dark:border-b-dark-500 items-center border-b p-6 text-sm">
                                    <div className="grid grid-cols-2 mb-3 ">
                                        <span className="text-steel-300 dark:text-white">Total : {Total}</span><span className="font-bold text-right"><span><span className="react-loading-skeleton css-1q79kkk-skeletonStyles-Skeleton">‌</span></span></span>
                                    </div>
                                    <div className="grid grid-cols-2 ">
                                        <span className="text-steel-300 dark:text-white">Total amount : &nbsp; </span><span className="font-bold text-right"><span><span className="react-loading-skeleton css-1q79kkk-skeletonStyles-Skeleton">‌</span></span></span>
                                    </div>
                                </div> */}
                                <div className="dark:text-white items-center p-6 pb-3 text-sm">
                                    <div className="grid grid-cols-2 mb-4">
                                        <div className="grid grid-cols-2">
                                            <span><img src={USDC} width="25px" style={{float:'left', marginRight: '3px'}}/><span style={{lineHeight: '25px'}} className="react-loading-skeleton css-1q79kkk-skeletonStyles-Skeleton"> USDC ‌:</span></span>
                                        </div>
                                        <span className="font-bold text-right"><span><span  className="react-loading-skeleton css-1q79kkk-skeletonStyles-Skeleton">‌{USDCBalance}</span></span></span>
                                    </div>
                                    <div className="grid grid-cols-2 mb-4">
                                        <div className="grid grid-cols-2">
                                            <span><img src={FRAX} width="25px" style={{float:'left', marginRight: '3px'}}/><span style={{lineHeight: '25px'}} className="react-loading-skeleton css-1q79kkk-skeletonStyles-Skeleton"> FRAX‌ :</span></span>
                                        </div>
                                        <span className="font-bold text-right"><span><span className="react-loading-skeleton css-1q79kkk-skeletonStyles-Skeleton">{FRAXBalance}‌</span></span></span>
                                    </div>
                                    <div className="grid grid-cols-2 mb-4">
                                        <div className="grid grid-cols-2">
                                            <span><img src={DAI} width="25px" style={{float:'left', marginRight: '3px'}}/><span style={{lineHeight: '25px'}} className="react-loading-skeleton css-1q79kkk-skeletonStyles-Skeleton">  DAI‌ :</span></span>
                                        </div>
                                        <span className="font-bold text-right"><span><span className="react-loading-skeleton css-1q79kkk-skeletonStyles-Skeleton">‌{DAIBalance}</span></span></span>
                                    </div>
                                    <div className="grid grid-cols-2 mb-4">
                                        <div className="grid grid-cols-2">
                                            <span><img src={USDT} width="25px" style={{float:'left', marginRight: '3px'}}/><span style={{lineHeight: '25px'}} className="react-loading-skeleton css-1q79kkk-skeletonStyles-Skeleton"> ‌USDT :</span></span>
                                        </div>
                                        <span className="font-bold text-right"><span><span className="react-loading-skeleton css-1q79kkk-skeletonStyles-Skeleton">{USDTBalance}</span></span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="dark:bg-dark-700 bg-white rounded-3xl shadow-md mb-6">
                            <div className="myShareCard dark:text-white">
                                <div className="flex w-full justify-center relative">
                                    <div className="absolute -mt-6 hidden sm:block transform rotate-90 ">
                                        <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                                            <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                                                <img alt aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} />
                                            </div>
                                            <img src={depositArrowNext} decoding="async" style={{ visibility: 'inherit', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} srcSet={depositArrowNext} />
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="p-6  lg:px-8 ">
                                    <div className="text-2xl font-bold">Stakes</div>
                                    <div className="flex py-6 pb-3 justify-between">
                                        <div className="flex items-center">
                                            <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                                                <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                                                    <img alt aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDQiIGhlaWdodD0iNDQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} />
                                                </div>
                                                <img src={USTPool} decoding="async" style={{ visibility: 'inherit', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} srcSet={USTPool} />
                                            </div>
                                            <div className="ml-2">
                                                <div className="font-bold text-lg">StableGaj LPs (5X)</div>
                                                <div className="text-blue-400 text-sm font-bold ">
                                                    <span><span className="react-loading-skeleton css-1q79kkk-skeletonStyles-Skeleton">‌</span></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <a href="/Stake"><button className="focus:outline-none w-full  text-white  py-3 px-8 rounded-lg shadow-sm bg-gradient-to-r from-blue-400 to-green-300">
                                                Stake Now
                  </button></a>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>

            <Footer />
        </div>

    )
}

export default DepositUST;