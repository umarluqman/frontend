/* eslint-disable */
import Footer from "../components/Footer";
import Header from "../components/Header";

import React, { useEffect, useState } from 'react';
// import { usdcBalance } from '../hooks/usdcBalance'
import { getWeb3 } from '../hooks/utils.js';
import bankAccount from '../static/media/bank-account.svg'
import erc20 from '../Abi/erc20.json'
import DAI from '../static/media/dai.svg'
import USDT from '../static/media/usdt.svg'
import USDC from '../static/media/usdc.svg'
import FRAX from '../static/media/frax.png'
import USTPool from '../static/media/ust-pool.svg'
import RadioToken from "../components/WithdrawUST/RadioToken";
import SwapAbi from '../Abi/SwapAbi.json'

function WithdrawUST() {
    const [FRAXSelected, setFRAXSelected] = useState(true);
    const [USDTSelected, setUSDTSelected] = useState(true);
    const [USDCSelected, setUSDCSelected] = useState(true);
    const [DAISelected, setDAISelected] = useState(true);
    
    const [USDCApproved, setUSDCApproved] = useState(false);
    const [USDTApproved, setUSDTApproved] = useState(false);
    const [DAIApproved, setDAIApproved] = useState(false);
    const [FRAXApproved, setFRAXApproved] = useState(false);
    const [approvedLP, setApprovedLP] = useState(false)

    const [swapContract, setSwapContract] = useState(undefined)
    const [web3, setWeb3] = useState(undefined);
    const [accounts, setAccounts] = useState(undefined);
    const [usdcContract, setUsdcContract] = useState(undefined);
    const [fraxContract, setFraxContract] = useState(undefined);
    const [usdtContract, setUsdtContract] = useState(undefined);
    const [daiContract, setDaiContract] = useState(undefined);
    const [stablegajLPContract, setStablegajLPContract] = useState(undefined);
    
    const [usdcBalance, setUsdcBalance] = useState(0);
    const [fraxBalance, setFraxBalance] = useState(0);
    const [daiBalance, setDaiBalance] = useState(0);
    const [usdtBalance, setUsdtBalance] = useState(0);
    const [stablegajBalance, setStablegajBalance] = useState(0);
    const [oneTokenBalance, setOneTokenBalance] = useState(0)

    const [totalAmount, setTotalAmount] = useState(0)
    const [availableToWithdraw, setAvailableToWithdraw] = useState()

  useEffect(() => {
    const init = async () => {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
      const networkId = await web3.eth.net.getId();
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
      
      const Swapabi = new web3.eth.Contract(
        SwapAbi.abi,
        '0x6bcA12b7a56f19cEB8eaE4d11CCbfb7653Afd0F4',
      );
      const stablegajLP = new web3.eth.Contract(
        erc20,
        '0xe7733b7785acf9c160b37e8038aab6a54cd26cc4',
      );

    const stablegajLPBal = await stablegajLP.methods
        .balanceOf(accounts[0])
        .call();

    // if (allowance == '10000000000000000000000000'){
    //     setApprovedLP(true)
    // } else {
    //     setApprovedLP(false)
    // }
    const stablegajLPBalance = stablegajLPBal / 10**18;
    const balance1 = await Swapabi.methods.calculateRemoveLiquidityOneToken(accounts[0], String(stablegajLPBal), 0).call()
    // const usdcBalance = usdcBal / 1000000;
    // const fraxBalance = fraxBal / 10**18;
    // const daiBalance = daiBal / 10**18;
    // const usdtBalance = usdtBal / 10**6;
    console.log(usdcBalance)

    setSwapContract(Swapabi);
      setWeb3(web3);
      setAccounts(accounts);
      setUsdcContract(usdc);
      setFraxContract(frax);
      setUsdtContract(usdt);
      setStablegajLPContract(stablegajLP);
      setDaiContract(dai);
      setStablegajBalance(stablegajLPBalance);
      setOneTokenBalance(balance1) 
    }
    init();
    window.ethereum.on('accountsChanged', accounts => {
      setAccounts(accounts);
    });
  }, []);

    // async function calcFRAXTokenLiq(){
    //     const amount = oneTokenBalance.mul(web3.utils.toBN(10).pow(18))
    //     const cal = await swapContract.methods.calculateRemoveLiquidityOneToken(accounts[0], amount, 0).call()
    //     setOneTokenBalance(cal/18)
    // }

    // async function calcDAITokenLiq(){
    //     const amount = oneTokenBalance.mul(web3.utils.toBN(10).pow(18))
    //     const cal = await swapContract.methods.calculateRemoveLiquidityOneToken(accounts[0], amount, 1).call()
    //     setOneTokenBalance(cal.div(web3.utils.toBN(10).pow(18)))
    // }

    // async function calcUSDCTokenLiq(){
    //     const amount = stablegajBalance.mul(web3.utils.toBN(10).pow(18))
    //     const cal = await swapContract.methods.calculateRemoveLiquidityOneToken(accounts[0], amount, 2).call()
    //     setOneTokenBalance(calc.div(web3.utils.toBN(10).pow(6)))
    // }

    // async function calcUSDTTokenLiq(){
    //     const amount = stablegajBalance.mul(web3.utils.toBN(10).pow(18))
    //     const cal = await swapContract.methods.calculateRemoveLiquidityOneToken(accounts[0], amount, 3).call()
    //     setOneTokenBalance(calc.div(web3.utils.toBN(10).pow(6)))
    // }

    const select = (token) => {
        if (token === "FRAX") {
            setFRAXSelected(true);
            setUSDTSelected(false);
            setDAISelected(false);
            setUSDCSelected(false);
            // calcFRAXTokenLiq();
        }
        if (token === "USDT") {
            setFRAXSelected(false);
            setUSDTSelected(true);
            setDAISelected(false);
            setUSDCSelected(false);
            // calcUSDTTokenLiq();
        }
        if (token === "DAI") {
            setFRAXSelected(false);
            setUSDTSelected(false);
            setDAISelected(true);
            setUSDCSelected(false);
            // calcDAITokenLiq();
        }
        if (token === "USDC") {
            setFRAXSelected(false);
            setUSDTSelected(false);
            setDAISelected(false);
            setUSDCSelected(true);
            // calcUSDCTokenLiq();
        }
    }

    async function approve() {
        const allowance = await stablegajLPContract.methods.allowance(accounts[0], '0x6bcA12b7a56f19cEB8eaE4d11CCbfb7653Afd0F4').call()
        if (allowance >= '10000000000000000000000000'){
            setApprovedLP(true)
        } else {
            const approved = await stablegajLPContract.methods.approve('0x6bcA12b7a56f19cEB8eaE4d11CCbfb7653Afd0F4','115792089237316195423570985008687907853269984665640564039457584007913129639935').send({from: accounts[0]});
            setApprovedLP(false)
        }
    }

    async function withdraw() {
        const decimals = web3.utils.toBN(18);
        const usdcB = String((Number(usdcBalance)*(10**6))*0.1)
        const usdtB = String((Number(usdtBalance)*(10**6))*0.1)
        var daiB = String(daiBalance)
        var fraxB = String(fraxBalance)
        var usdcBig = String(usdcBalance)
        var usdtBig = String(usdtBalance)
        
        daiB = web3.utils.toWei(daiB)
        console.log(fraxB.toString())
        const total = String(Number(usdcBalance)+Number(usdtBalance)+Number(daiBalance)+Number(fraxBalance));
        console.log(total.toString())

        if (DAISelected == true && FRAXSelected == true && USDCSelected == true && USDTSelected == true){
            const min = await swapContract.methods.calculateRemoveLiquidity(accounts[0], web3.utils.toWei(total)).call()
            console.log(min)
            const withdraw = await swapContract.methods.removeLiquidity(web3.utils.toWei(total), [String(min[0]), String(min[1]), String(min[2]), String(min[3])],1749313030).send({from: accounts[0]})
        } else if (DAISelected == false && FRAXSelected == true && USDCSelected == false && USDTSelected == false){
            const min = await swapContract.methods.calculateRemoveLiquidityOneToken(accounts[0], web3.utils.toWei(fraxBalance),0).call()
            console.log(min)
            const withdraw = await swapContract.methods.removeLiquidityOneToken(web3.utils.toWei(fraxB), 0, min,1749313030).send({from: accounts[0]})
        } else if (DAISelected == true && FRAXSelected == false && USDCSelected == false && USDTSelected == false){
            const min = await swapContract.methods.calculateRemoveLiquidityOneToken(accounts[0], web3.utils.toWei(daiBalance),1).call()
            console.log(min)
            const withdraw = await swapContract.methods.removeLiquidityOneToken(web3.utils.toWei(daiB), 1, min,1749313030).send({from: accounts[0]})
        } else if (DAISelected == false && FRAXSelected == false && USDCSelected == true && USDTSelected == false){
            const min = await swapContract.methods.calculateRemoveLiquidityOneToken(accounts[0], web3.utils.toWei(usdcBalance),2).call()
            console.log(min)
            const withdraw = await swapContract.methods.removeLiquidityOneToken(web3.utils.toWei(String(usdcBig)), 2, min,1749313030).send({from: accounts[0]})
        } else if (DAISelected == false && FRAXSelected == false && USDCSelected == false && USDTSelected == true){
            const min = await swapContract.methods.calculateRemoveLiquidityOneToken(accounts[0], web3.utils.toWei(usdtBalance),3).call()
            console.log(min)
            const withdraw = await swapContract.methods.removeLiquidityOneToken(web3.utils.toWei(String(usdtBig)), 3, min,1749313030).send({from: accounts[0]})
        }
    }

    useEffect(() => {
        var amount;
        if (DAISelected == true && USDCSelected == true && USDTSelected == true && FRAXSelected == true){
            amount = Number(usdcBalance)+Number(usdtBalance)+ Number(daiBalance)+ Number(fraxBalance)
        } else if (DAISelected == true && USDCSelected == false && USDTSelected == false && FRAXSelected == false){
            amount = Number(daiBalance)
        } else if (DAISelected == false && USDCSelected == true && USDTSelected == false && FRAXSelected == false){
            amount = Number(usdcBalance)
        } else if (DAISelected == false && USDCSelected == false && USDTSelected == true && FRAXSelected == false){
            amount = Number(usdtBalance)
        } else if (DAISelected == false && USDCSelected == false && USDTSelected == false && FRAXSelected == true){
            amount = Number(fraxBalance)
        }
        setTotalAmount(amount)
    },[usdcBalance, usdtBalance, daiBalance, fraxBalance])

    return (
        <div>
            <Header inApp={true} active="Withdraw" />
            <div className="container">
                <div className="w-20">
                    <a href="/Withdraw"><div className="text-blue-400 mt-3 ">
                        <div className="flex items-center w-auto">
                            <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                                <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                                    <img alt aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} />
                                </div>
                                <img src="/_next/image?url=%2Fimages%2Ficons%2Farrow-left.svg&w=32&q=75" decoding="async" style={{ visibility: 'inherit', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} srcSet="
          /_next/image?url=%2Fimages%2Ficons%2Farrow-left.svg&w=16&q=75 1x,
          /_next/image?url=%2Fimages%2Ficons%2Farrow-left.svg&w=32&q=75 2x
        " />
                            </div>
                        </div>
                    </div></a>
                </div>
                <div className="dark:text-white text-3xl font-bold mb-6 mt-3">Withdraw</div>
                <div className="grid grid-cols-2 gap-7">
                    <div className="col-span-full sm:col-span-1 w-full">
                        <div className="dark:bg-dark-700 dark:text-white rounded-3xl shadow-md p-6 lg:p-10 py-4  bg-white">
                            <div className="gap-3 ">
                                <div className="col-span-full">
                                    <div className="text-2xl font-bold mb-6">Remove Liquidity</div>

                                    <RadioToken onType= {(e) => setFraxBalance(e.target.value)} name="FRAX" logo={FRAX} isSelected={FRAXSelected} handleClick={() => select("FRAX")} />
                                    <RadioToken onType= {(e) => setDaiBalance(e.target.value)} name="DAI" logo={DAI} isSelected={DAISelected} handleClick={() => select("DAI")} />
                                    <RadioToken onType= {(e) => setUsdtBalance(e.target.value)} name="USDT" logo={USDT} isSelected={USDTSelected} handleClick={() => select("USDT")} />
                                    <RadioToken onType= {(e) => setUsdcBalance(e.target.value)} name="USDC" logo={USDC} isSelected={USDCSelected} handleClick={() => select("USDC")} />
                                    
                                    {/* <RadioToken onType= {(e) => setFraxBalance(e.target.value)} name="FRAX" logo={FRAX} isSelected={FRAXSelected}  />
                                    <RadioToken onType= {(e) => setDaiBalance(e.target.value)} name="DAI" logo={DAI} isSelected={DAISelected}  />
                                    <RadioToken onType= {(e) => setUsdtBalance(e.target.value)} name="USDT" logo={USDT} isSelected={USDTSelected} />
                                    <RadioToken onType= {(e) => setUsdcBalance(e.target.value)} name="USDC" logo={USDC} isSelected={USDCSelected}  /> */}
                                </div>
                                <div className="mb-7">
                                    <div onClick={() => {
                                        setFRAXSelected(true);
                                        setUSDTSelected(true);
                                        setDAISelected(true);
                                        setUSDCSelected(true);
                                    }} className="dark:bg-dark-500 focus:outline-none w-full text-steel-300 rounded-lg radio-outline py-3 text-center btn cursor-pointer ">
                                        Combo
            </div>
                                </div>
                                <div className="transactionInfoItem grid-cols-5 sm:grid-cols-2 grid ">
                                    <div className="slippage text-steel-300 text-sm dark:text-white ">
                                        <span>Withdrawal Fees: 0-0.1% </span><span className></span>
                                    </div>
                                    <div className="hidden font-base">
                                        <div>
                                            <div className="relative mx-2">
                                                <div className="bg-gray-500 text-white text-xs rounded py-2 px-4 right-0 bottom-full text-center font-base">
                                                    The fee diminishes to 0% over the course of a month
                    <br />after you first provide liquidity.<svg className="absolute text-gray-500 h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255">
                                                        <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {approvedLP == true ? 
                                <>
                                {/* <div className="flex justify-center">
                                <div className="w-full text-center pt-5 ">
                                <button onClick={approve} className=" focus:outline-none w-full  text-white  py-3 rounded-lg shadow-sm bg-gradient-to-r from-blue-400 to-green-300">
                                    Approve LP
      </button>
                            </div> 
                        </div> */}
                        <div className="flex justify-center">
                            <div className="w-full text-center pt-5 ">
                            <button onClick={withdraw} className=" focus:outline-none w-full  text-white  py-3 rounded-lg shadow-sm bg-gradient-to-r from-blue-400 to-green-300">
                                Withdraw
  </button>
                        </div>
                            
                                
                                
                            </div>   
                            </>  : <>
                                <div className="flex justify-center">
                                <div className="w-full text-center pt-5 ">
                                <button onClick={approve} className=" focus:outline-none w-full  text-white  py-3 rounded-lg shadow-sm bg-gradient-to-r from-blue-400 to-green-300">
                                    Approve LP
      </button>
                            </div> 
                        </div>
                        <div className="flex justify-center">
                            <div className="w-full text-center pt-5 ">
                            <button onClick={withdraw} className=" focus:outline-none w-full  text-white  py-3 rounded-lg shadow-sm bg-gradient-to-r from-blue-400 to-green-300">
                                Withdraw
  </button>
                        </div>
                            
                                
                                
                            </div>   
                            </>
                            }
                                
                                <div className="transactionInfoContainer mt-4 mb-3 text-steel-300 show">
                                    <div className="transactionInfo text-center text-sm">
                                        <span className="text-red-400" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-full sm:col-span-1 w-full">
                        <div className="dark:bg-dark-700 dark:text-white bg-white rounded-3xl shadow-md mb-6">
                            <div className="myShareCard ">
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
                                        <div className="dark:text-white text-xl font-bold mb-1">Available to Withdraw</div>
                                        <div className="text-2xl text-blue-400 font-bold">{(stablegajBalance.toString()).slice(0,10)} LP</div>
                                        <div className="text-2xl text-blue-400 font-bold">(≈ ${(String(oneTokenBalance/10**18)).slice(0,10)})</div>
                                    </div>
                                </div>
                                <div className="dark:bg-dark-700 dark:text-white dark:border-b-dark-500 items-center border-b p-6 text-sm">
                                <div className="grid grid-cols-2 ">
                                        <span className="text-steel-300 dark:text-white">Withdraw amount : &nbsp; </span><span className="font-bold text-right"><span><span className="react-loading-skeleton css-1q79kkk-skeletonStyles-Skeleton">{totalAmount}‌</span></span></span>
                                    </div>
                                </div>
                                <div className="dark:text-white items-center p-6 pb-3 text-sm">
                                    <div className="grid grid-cols-2 mb-4">
                                        <div className="grid grid-cols-2">
                                            <span><img src={FRAX} width="25px" style={{float:'left', marginRight: '3px'}}/><span style={{lineHeight: '25px'}} className="react-loading-skeleton css-1q79kkk-skeletonStyles-Skeleton">FRAX : </span></span>
                                        </div>
                                        <span className="font-bold text-right"><span><span className="react-loading-skeleton css-1q79kkk-skeletonStyles-Skeleton">‌{fraxBalance}</span></span></span>
                                    </div>
                                    <div className="grid grid-cols-2 mb-4">
                                        <div className="grid grid-cols-2">
                                            <span><img src={DAI} width="25px" style={{float:'left', marginRight: '3px'}}/><span style={{lineHeight: '25px'}} className="react-loading-skeleton css-1q79kkk-skeletonStyles-Skeleton">DAI :</span></span>
                                        </div>
                                        <span className="font-bold text-right"><span><span className="react-loading-skeleton css-1q79kkk-skeletonStyles-Skeleton">{daiBalance}</span></span></span>
                                    </div>
                                    <div className="grid grid-cols-2 mb-4">
                                        <div className="grid grid-cols-2">
                                            <span><img src={USDT} width="25px" style={{float:'left', marginRight: '3px'}}/><span style={{lineHeight: '25px'}} className="react-loading-skeleton css-1q79kkk-skeletonStyles-Skeleton">USDT :</span></span>
                                        </div>
                                        <span className="font-bold text-right"><span><span className="react-loading-skeleton css-1q79kkk-skeletonStyles-Skeleton">‌{usdtBalance}</span></span></span>
                                    </div>
                                    <div className="grid grid-cols-2 mb-4">
                                        <div className="grid grid-cols-2">
                                            <span><img src={USDC} width="25px" style={{float:'left', marginRight: '3px'}}/><span style={{lineHeight: '25px'}} className="react-loading-skeleton css-1q79kkk-skeletonStyles-Skeleton">USDC :</span></span>
                                        </div>
                                        <span className="font-bold text-right"><span><span className="react-loading-skeleton css-1q79kkk-skeletonStyles-Skeleton">‌{usdcBalance}</span></span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dark:bg-dark-700 dark:text-white bg-white rounded-3xl shadow-md mb-6">
                            <div className="myShareCard ">
                                <div className="p-6  lg:px-8 ">
                                    <div className="text-2xl font-bold">Recomended Stakes</div>
                                    <div className="flex py-6 pb-3 justify-between">
                                        <div className="flex items-center">
                                            <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                                                <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                                                    <img alt aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDQiIGhlaWdodD0iNDQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} />
                                                </div>
                                                <img src={USTPool} decoding="async" style={{ visibility: 'inherit', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} srcSet={USTPool} />
                                            </div>
                                            <div className="ml-2">
                                                <div className="font-bold text-lg">StableGaj LPs</div>
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
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>

    )
}

export default WithdrawUST;