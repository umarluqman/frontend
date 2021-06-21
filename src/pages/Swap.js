
import React, { useDebugValue, useEffect, useState } from 'react';
import Footer from "../components/Footer";
import Header from "../components/Header";
import arrowToggle from '../static/media/arrow-toggle.svg'
import LogoTransparent from '../static/media/logo_transparent.svg'
import DropdownLHS from "../components/Swap/DropdownLHS";
import DropdownRHS from "../components/Swap/DropdownRHS";
import DAI from '../static/media/dai.svg'
import USDT from '../static/media/usdt.svg'
import USDC from '../static/media/usdc.svg'
import FRAX from '../static/media/frax.png'
import { getWeb3 } from '../hooks/utils.js';
import erc20 from '../Abi/erc20.json'
import logo from '../static/media/logo.svg'
import walletIcon from '../static/media/wallet-icon.svg'
import lockIcon from '../static/media/lock-icon.svg'
import { useWallet, UseWalletProvider } from 'use-wallet'
const BigNumber = require('bignumber.js')
const SwapAbi =  require('../Abi/SwapAbi.json')



const LHSTokens = [{ name: "DAI", logo: DAI }, { name: "USDT", logo: USDT }, { name: "USDC", logo: USDC }, { name: "FRAX", logo: FRAX}];

const RHSTokens = [{ name: "DAI", logo: DAI }, { name: "USDT", logo: USDT }, { name: "USDC", logo: USDC }, { name: "FRAX", logo: FRAX}];

function Swap() {
    // LHS and RHS
    const [isActiveLHS, setActiveLHS] = useState(false)
    const [isActiveRHS, setActiveRHS] = useState(false)
    const [currentLHS, setCurrentLHS] = useState({name: "DAI", logo: DAI})
    const [currentRHS, setCurrentRHS] = useState({name: "USDC", logo: USDC})

    // Web3
    const [web3, setWeb3] = useState(undefined);
    const [accounts, setAccounts] = useState(undefined);

    // Contracts
    const [usdcContract, setUsdcContract] = useState()
    const [fraxContract, setFraxContract] = useState()
    const [daiContract, setDaiContract] = useState()
    const [usdtContract, setUsdtContract] = useState()

    // Balances
    const [usdcBalance, setUsdcBalance] = useState(0);
    const [fraxBalance, setFraxBalance] = useState(0);
    const [daiBalance, setDaiBalance] = useState(0);
    const [usdtBalance, setUsdtBalance] = useState(0);
    const [sgajBalance, setSgajBalance] = useState(0);
  const [rhsBalance, setRhsBalance] = useState()
  const [swapContract, setSwapContract] = useState('0x6bcA12b7a56f19cEB8eaE4d11CCbfb7653Afd0F4')
  const [RHS, setRHS] = useState()
    const [dx, setDx] = useState()
    const [minDy, setMinDy] = useState()
    const [totalLiquidity, setTotalLiquidity] = useState()

    // Checks
    const [usdtApproved, setUsdtApproved] = useState(false)
    const [usdcApproved, setUsdcApproved] = useState(false)
    const [daiApproved, setDaiApproved] = useState(false)
    const [fraxApproved, setFraxApproved] = useState(false)
    const [LHSApproved, setLHSApproved] = useState(false)

    const [approveClicked, setApproveClicked] = useState(0)

  useEffect(() => {
    const init = async () => {
      const web3 = await getWeb3();
      console.log(web3)
      const accounts = await web3.eth.getAccounts();
      const networkId = await web3.eth.net.getId();
      const usdc = new web3.eth.Contract(
        erc20,
        '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
      );
      const Swapabi = new web3.eth.Contract(
        SwapAbi.abi,
        '0x6bcA12b7a56f19cEB8eaE4d11CCbfb7653Afd0F4',
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
      const sgaj = new web3.eth.Contract(
        erc20,
        '0x94c7d657f1c8Be06A4Dc009D2d475Bb559d858cb',
      );
      
    console.log(accounts)
      
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
    const sgajBal = await sgaj.methods
        .balanceOf(accounts[0])
        .call();

    const usdcBala = await usdc.methods
        .balanceOf('0x6bcA12b7a56f19cEB8eaE4d11CCbfb7653Afd0F4')
        .call();
    const fraxBala = await frax.methods
        .balanceOf('0x6bcA12b7a56f19cEB8eaE4d11CCbfb7653Afd0F4')
        .call();
    const daiBala = await dai.methods
        .balanceOf('0x6bcA12b7a56f19cEB8eaE4d11CCbfb7653Afd0F4')
        .call();
    const usdtBala = await usdt.methods
        .balanceOf('0x6bcA12b7a56f19cEB8eaE4d11CCbfb7653Afd0F4')
        .call();
    const usdcBalance = usdcBal / 1000000;
    const fraxBalance = fraxBal / 10**18;
    const daiBalance = daiBal / 10**18;
    const usdtBalance = usdtBal / 10**6;

    // Liquidity balance

    const usdcBalanceL = usdcBala / 1000000;
    const fraxBalanceL = fraxBala / 10**18;
    const daiBalanceL = daiBala / 10**18;
    const usdtBalanceL = usdtBala / 10**6;
    const sgajBalance = sgajBal / 10**18;

    // checkApproved()
    console.log(usdcBalance)
      setWeb3(web3);
      setAccounts(accounts);
      setSwapContract(Swapabi);
      setUsdcContract(usdc);
      setFraxContract(frax);
      setUsdtContract(usdt);
      setDaiContract(dai);
      setUsdcBalance(usdcBalance);
      setFraxBalance(fraxBalance);
      setDaiBalance(daiBalance);
      setUsdtBalance(usdtBalance);
      setLhsBalance(daiBalance)
      setSgajBalance(sgajBalance)
    setTotalLiquidity(usdcBalanceL+fraxBalanceL+daiBalanceL+usdtBalanceL)

    }
    init();
    window.ethereum.on('accountsChanged', accounts => {
      setAccounts(accounts);
    });
  }, [currentLHS.name, currentRHS.name]);

  useEffect(() => {
      checkApproved()
    if (currentLHS.name == 'USDC' && usdcApproved == true){
        setLHSApproved(true)
        setUsdcApproved(true)
    } else if(currentLHS.name == 'USDT' && usdtApproved == true){
        setLHSApproved(true)
        setUsdtApproved(true)
    } else if(currentLHS.name == 'DAI' && daiApproved == true){
        setLHSApproved(true)
        setDaiApproved(true)
    } else if(currentLHS.name == 'FRAX' && fraxApproved == true){
        setLHSApproved(true)
        setFraxApproved(true)
    } else if(currentLHS.name == 'USDT' && usdtApproved == false){
        setLHSApproved(false)
        setUsdtApproved(false)
    } else if(currentLHS.name == 'USDC' && usdcApproved == false){
        setLHSApproved(false)
        setUsdcApproved(false)
    } else if(currentLHS.name == 'DAI' && daiApproved == false){
        setLHSApproved(false)
        setDaiApproved(false)
    } else if(currentLHS.name == 'FRAX' && fraxApproved == false){
        setLHSApproved(false)
        setFraxApproved(false)
    }
  }, [currentLHS])

  async function updateLHSBalance(){
    if (currentLHS.name == 'USDC'){
        setLhsBalance(usdcBalance)
    }
    else if (currentLHS.name == 'USDT'){
        setLhsBalance(usdtBalance)
    }
    else if (currentLHS.name == 'DAI'){
        setLhsBalance(daiBalance)
    }
    else if (currentLHS.name == 'FRAX'){
        setLhsBalance(fraxBalance)
    }
    console.log(lhsBalance)
  }
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


  const [lhsBalance, setLhsBalance] = useState(daiBalance)
  async function handleChange(val){
      var value = val.target.value;
      
    if (currentLHS.name == 'DAI' && currentRHS.name == 'FRAX'){
        value = web3.utils.toWei(value,'ether');
        setDx(value)
        var balance = await swapContract.methods
          .calculateSwap(1,0,value)
          .call();
        setMinDy(balance)
        balance = balance / 10**18;
        balance = balance.toString();
    console.log(balance)
      setRHS(balance.slice(0,10))
      }
      
      else if (currentLHS.name == 'DAI' && currentRHS.name == 'USDC'){
        value = web3.utils.toWei(value,'ether');
        setDx(value)
        var balance = await swapContract.methods
          .calculateSwap(1,2,value)
          .call();
          setMinDy(balance)
        balance = balance / 10**6;
        balance = balance.toString();
    console.log(balance)
      setRHS(balance.slice(0,10))
      }

      else if (currentLHS.name == 'DAI' && currentRHS.name == 'USDT'){
        value = web3.utils.toWei(value,'ether');
        setDx(value)
        var balance = await swapContract.methods
          .calculateSwap(1,3,value)
          .call();
        setMinDy(balance)
        balance = balance / 10**6;
        balance = balance.toString();
    console.log(balance)
      setRHS(balance.slice(0,10))
      }

      else if (currentLHS.name == 'FRAX' && currentRHS.name == 'DAI'){
        value = web3.utils.toWei(value,'ether');
        setDx(value)
        var balance = await swapContract.methods
          .calculateSwap(0,1,value)
          .call();
        setMinDy(balance)
        balance = balance / 10**18;
        balance = balance.toString();
    console.log(balance)
      setRHS(balance.slice(0,10))
      }
      
      else if (currentLHS.name == 'FRAX' && currentRHS.name == 'USDC'){
        value = web3.utils.toWei(value,'ether');
        setDx(value)
        var balance = await swapContract.methods
          .calculateSwap(0,2,value)
          .call();
        setMinDy(balance)
        balance = balance / 10**6;
        balance = balance.toString();
    console.log(balance)
      setRHS(balance.slice(0,10))
      }

      else if (currentLHS.name == 'FRAX' && currentRHS.name == 'USDT'){
        value = web3.utils.toWei(value,'ether');
        setDx(value)
        var balance = await swapContract.methods
          .calculateSwap(0,3,value)
          .call();
        setMinDy(balance)
        balance = balance / 10**6;
        balance = balance.toString();
    console.log(balance)
      setRHS(balance.slice(0,10))
      }

      else if (currentLHS.name == 'USDC' && currentRHS.name == 'DAI'){
        value = value * (10**6)
        setDx(value)
        var balance = await swapContract.methods
          .calculateSwap(2,1,value)
          .call();
        setMinDy(balance)
        balance = balance / 10**18;
        balance = balance.toString();
    console.log(balance)
      setRHS(balance.slice(0,10))
      }

      else if (currentLHS.name == 'USDC' && currentRHS.name == 'FRAX'){
        value = value * (10**6)
        setDx(value)
        var balance = await swapContract.methods
          .calculateSwap(2,0,value)
          .call();
        setMinDy(balance)
        balance = balance / 10**18;
        balance = balance.toString();
    console.log(balance)
      setRHS(balance.slice(0,10))
      }

      else if (currentLHS.name == 'USDC' && currentRHS.name == 'USDT'){
        value = value * (10**6)
        setDx(value)
        var balance = await swapContract.methods
          .calculateSwap(2,3,value)
          .call();
        setMinDy(balance)
        balance = balance / 10**6;
        balance = balance.toString();
    console.log(balance)
      setRHS(balance.slice(0,10))
      }

      else if (currentLHS.name == 'USDT' && currentRHS.name == 'USDC'){
        value = value * (10**6)
        setDx(value)
        var balance = await swapContract.methods
          .calculateSwap(3,2,value)
          .call();
        setMinDy(balance)
        balance = balance / 10**6;
      }

      else if (currentLHS.name == 'USDT' && currentRHS.name == 'FRAX'){
        value = value * (10**6)
        setDx(value)
        var balance = await swapContract.methods
          .calculateSwap(3,0,value)
          .call();
        setMinDy(balance)
        balance = balance / 10**18;
        balance = balance.toString();
    console.log(balance)
      setRHS(balance.slice(0,10))
      }

      else if (currentLHS.name == 'USDT' && currentRHS.name == 'DAI'){
        value = value * (10**6)
        setDx(value)
        var balance = await swapContract.methods
          .calculateSwap(3,1,value)
          .call();
        setMinDy(balance)
        balance = balance / 10**18;
        balance = balance.toString();
        console.log(balance)
      setRHS(balance.slice(0,10))
      }
  }

  async function swapTokens(){
    if (currentLHS.name == 'DAI' && currentRHS.name == 'FRAX'){
        const swapToken = await swapContract.methods.swap(1,0,dx,minDy,1748762113).send({from: accounts[0]})
      }
      
    else if (currentLHS.name == 'DAI' && currentRHS.name == 'USDC'){
        const swapToken = await swapContract.methods.swap(1,2,dx,minDy,1748762113).send({from: accounts[0]})
      }

      else if (currentLHS.name == 'DAI' && currentRHS.name == 'USDT'){
        const swapToken = await swapContract.methods.swap(1,3,dx,minDy,1748762113).send({from: accounts[0]})
      }

      else if (currentLHS.name == 'FRAX' && currentRHS.name == 'DAI'){
        const swapToken = await swapContract.methods.swap(0,1,dx,minDy,1748762113).send({from: accounts[0]})
      }
      
      else if (currentLHS.name == 'FRAX' && currentRHS.name == 'USDC'){
        const swapToken = await swapContract.methods.swap(0,2,dx,minDy,1748762113).send({from: accounts[0]})
      }

      else if (currentLHS.name == 'FRAX' && currentRHS.name == 'USDT'){
        const swapToken = await swapContract.methods.swap(0,3,dx,minDy,1748762113).send({from: accounts[0]})
      }

      else if (currentLHS.name == 'USDC' && currentRHS.name == 'DAI'){
        const swapToken = await swapContract.methods.swap(2,1,dx,minDy,1748762113).send({from: accounts[0]})
      }

      else if (currentLHS.name == 'USDC' && currentRHS.name == 'FRAX'){
        const swapToken = await swapContract.methods.swap(2,0,dx,minDy,1748762113).send({from: accounts[0]})
      }

      else if (currentLHS.name == 'USDC' && currentRHS.name == 'USDT'){
        const swapToken = await swapContract.methods.swap(2,3,dx,minDy,1748762113).send({from: accounts[0]})
      }

      else if (currentLHS.name == 'USDT' && currentRHS.name == 'USDC'){
        const swapToken = await swapContract.methods.swap(3,2,dx,minDy,1748762113).send({from: accounts[0]})
      }

      else if (currentLHS.name == 'USDT' && currentRHS.name == 'FRAX'){
        const swapToken = await swapContract.methods.swap(3,0,dx,minDy,1748762113).send({from: accounts[0]})
      }

      else if (currentLHS.name == 'USDT' && currentRHS.name == 'DAI'){
        const swapToken = await swapContract.methods.swap(3,1,dx,minDy,1748762113).send({from: accounts[0]})
      }
  }

    // used to check if the user has approved the token for smart contractsf
  async function checkApproved(){
    if (currentLHS.name == 'USDC'){

        const check = await usdcContract.methods.allowance(accounts[0],'0x6bcA12b7a56f19cEB8eaE4d11CCbfb7653Afd0F4').call()
        if (check >= (10000000)*(10**6)){
            setUsdcApproved(true)
            setLHSApproved(true)
        } 
        else {
            setUsdcApproved(false)
            setLHSApproved(false)
        }
    }
    else if (currentLHS.name == 'USDT'){
        const check = await usdtContract.methods.allowance(accounts[0],'0x6bcA12b7a56f19cEB8eaE4d11CCbfb7653Afd0F4').call()
        if (check >= (10000000)*(10**6)){
            setUsdtApproved(true)
            setLHSApproved(true)
        } 
        else {
            setUsdtApproved(false)
            setLHSApproved(false)
        }
    }
    else if (currentLHS.name == 'DAI'){
        const check = await daiContract.methods.allowance(accounts[0],'0x6bcA12b7a56f19cEB8eaE4d11CCbfb7653Afd0F4').call()
         if (check >= '10000000000000000000000000'){
            setDaiApproved(true)
            setLHSApproved(true)
        } 
        else {
            setDaiApproved(false)
            setLHSApproved(false)
        }
    }
    else if (currentLHS.name == 'FRAX'){
        const check = await fraxContract.methods.allowance(accounts[0],'0x6bcA12b7a56f19cEB8eaE4d11CCbfb7653Afd0F4').call()
        if (check >= '10000000000000000000000000'){
            setFraxApproved(true)
            setLHSApproved(true)
        } 
        else {
            setLHSApproved(false)
            setFraxApproved(false)
        }
    }
  }
  
  async function approve(){
    const check1 = await usdcContract.methods.allowance(accounts[0],'0x6bcA12b7a56f19cEB8eaE4d11CCbfb7653Afd0F4').call()

    if (currentLHS.name == 'USDC'){

        const check = await usdcContract.methods.allowance(accounts[0],'0x6bcA12b7a56f19cEB8eaE4d11CCbfb7653Afd0F4').call()
        if (check >= (10000000)*(10**6) || usdcApproved == true){
            setUsdcApproved(true)
        } 
        else {
            const approved = await usdcContract.methods.approve('0x6bcA12b7a56f19cEB8eaE4d11CCbfb7653Afd0F4','115792089237316195423570985008687907853269984665640564039457584007913129639935').send({from: accounts[0]});
            setUsdcApproved(true)
        }
    }
    else if (currentLHS.name == 'USDT'){
        const check = await usdtContract.methods.allowance(accounts[0],'0x6bcA12b7a56f19cEB8eaE4d11CCbfb7653Afd0F4').call()
        if (check >= (10000000)*(10**6) || usdtApproved == true){
            setUsdtApproved(true)
        } 
        else {
            const approved = await usdtContract.methods.approve('0x6bcA12b7a56f19cEB8eaE4d11CCbfb7653Afd0F4','115792089237316195423570985008687907853269984665640564039457584007913129639935').send({from: accounts[0]});
            setUsdtApproved(true)
        }
    }
    else if (currentLHS.name == 'DAI'){
        const check = await daiContract.methods.allowance(accounts[0],'0x6bcA12b7a56f19cEB8eaE4d11CCbfb7653Afd0F4').call()
         if (check >= 10000000000000000000000000 || daiApproved == true){
            setDaiApproved(true)
        } 
        else {
            const approved = await daiContract.methods.approve('0x6bcA12b7a56f19cEB8eaE4d11CCbfb7653Afd0F4','115792089237316195423570985008687907853269984665640564039457584007913129639935').send({from: accounts[0]});
            setDaiApproved(true)
        }
    }
    else if (currentLHS.name == 'FRAX'){
        const check = await fraxContract.methods.allowance(accounts[0],'0x6bcA12b7a56f19cEB8eaE4d11CCbfb7653Afd0F4').call()
        if (check >= 10000000000000000000000000 || fraxApproved == true){
            setFraxApproved(true)
        } 
        else {
            const approved = await fraxContract.methods.approve('0x6bcA12b7a56f19cEB8eaE4d11CCbfb7653Afd0F4','115792089237316195423570985008687907853269984665640564039457584007913129639935').send({from: accounts[0]});
            setFraxApproved(true)
        }
    }
  }

  function switchTokens(){
    const hold = currentLHS;
    currentLHS = currentRHS;
    currentRHS = hold;
  }

// async function approveUSDC() {
//     const check = await usdcContract.methods.allowance(accounts[0],'0x6bcA12b7a56f19cEB8eaE4d11CCbfb7653Afd0F4').call()
//     if (check == 10000000000000){
//         setUsdcApproved(true)
//     } 
//     else {
//         await usdcContract.methods.approve('0x6bcA12b7a56f19cEB8eaE4d11CCbfb7653Afd0F4',(10000000)*(10**6)).send({from: accounts[0]});
//         setUsdcApproved(true)
//     }
//   };
//   async function approveFRAX() {
//     const check = await fraxContract.methods.allowance(accounts[0],'0x6bcA12b7a56f19cEB8eaE4d11CCbfb7653Afd0F4').call()
//     if (check == '10000000000000000000000000'){
//         setFraxApproved(true)
//     } 
//     else {
//         await fraxContract.methods.approve('0x6bcA12b7a56f19cEB8eaE4d11CCbfb7653Afd0F4','10000000000000000000000000').send({from: accounts[0]});
//         setFraxApproved(true)
//     }
//   };
//   async function approveDAI() {
//     const check = await daiContract.methods.allowance(accounts[0],'0x6bcA12b7a56f19cEB8eaE4d11CCbfb7653Afd0F4').call()
//     if (check == '10000000000000000000000000'){
//         setDaiApproved(true)
//     } 
//     else {
//         await daiContract.methods.approve('0x6bcA12b7a56f19cEB8eaE4d11CCbfb7653Afd0F4','10000000000000000000000000').send({from: accounts[0]});
//         setDaiApproved(true)
//     }
//   };
//   async function approveUSDT() {
//     const check = await usdtContract.methods.allowance(accounts[0],'0x6bcA12b7a56f19cEB8eaE4d11CCbfb7653Afd0F4').call()
//     if (check == (10000000)*(10**6)){
//         setUsdtApproved(true)
//     } 
//     else {
//         await usdtContract.methods.approve('0x6bcA12b7a56f19cEB8eaE4d11CCbfb7653Afd0F4',(10000000)*(10**6)).send({from: accounts[0]});
//         setUsdtApproved(true)
//     }
//   };


// function clickedCheckApproved(){
//     checkApproved()
// }
  console.log(web3)
    return (
        <div>
            <Header inApp={true} active='Swap' />
            <div class="dark:text-white text-center font-bold text-4xl pt-10 pb-10 mt-10 mb-5">
                <span>Best</span><span class="text-blue-400"> Stablecoin Exchange Rate</span><span> on Polygon</span>
            </div>
            <div className="container">
                <div className=" dark:bg-dark-700 bg-white rounded-3xl shadow-md p-6 lg:p-12 mb-6">
                    <div className="grid grid-cols-11 gap-3 mt-6">
                        <div className="col-span-11 sm:col-span-5">
                            <div className="swapForm dark:text-white">
                                <div className="head">
                                    <div className="pl-1 text-sm" />
                                    <div className="flex justify-between">
                                        <div className="pl-1 text-sm font-bold">From</div>
                                        <div className="pl-1 text-sm">
                                            Balance : <span className="text-blue-400 font-bold">{lhsBalance} {currentLHS.name}</span>
                                        </div>
                                    </div>
                                    <div className="pl-1 text-sm" />
                                    <div className="inputField">
                                        <div className="text-right">
                                            <div className="flex pt-1">
                                                <div className="w-full -mt-6">
                                                    <div className="flex flex-wrap">
                                                        <div className="w-full sm:w-6/12 md:w-4/12 px-4">
                                                            <div className="relative inline-flex align-middle w-full">
                                                                <div onClick={() => setActiveLHS(!isActiveLHS)} className="width-119 absolute mt-3 -ml-4 w-28  font-bold text-sm text-steel-400 px-4  py-2 mt-1 rounded shadow hover:shadow-lg outline-none focus:outline-none  bg-white active:bg-gray-600 ease-linear transition-all duration-150 cursor-pointer dark:bg-dark-500 dark:border-0 dark:text-white">
                                                                    <div className="flex items-center">
                                                                        <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                                                                            <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                                                                                <img alt aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGhlaWdodD0iMjYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} />
                                                                            </div>
                                                                            <img src={currentLHS.logo} decoding="async" style={{ visibility: 'inherit', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} srcSet={currentLHS.logo} />
                                                                        </div>
                                                                        <div className="font-bold ml-2 text-sm">{currentLHS.name}</div>
                                                                    </div>
                                                                </div>
                                                                {isActiveLHS ?
                                                                    <div className="block z-50 pt-1" style={{ position: 'absolute', inset: '0px auto auto 0px', margin: 0, transform: 'translate(-16px, 54px)' }} data-popper-placement="bottom-start">
                                                                        <div className="dark:bg-dark-500 bg-white text-base  float-left py-2 list-none text-left rounded shadow-lg w-28">
                                                                            {LHSTokens.map((token) => {if(token.name!==currentRHS.name){return <DropdownLHS key={token.name} name={token.name} logo={token.logo} onClick={() => {setCurrentLHS({name: token.name, logo: token.logo}); setActiveLHS(!isActiveLHS); updateLHSBalance()} } />}} ) }




                                                                        </div>
                                                                    </div> : ""}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <input onChange={handleChange} autoComplete="off" autoCorrect="off" type="number" className="hasMaxButton focus:outline-none dark:bg-dark-600 text-xl py-2 w-full bg-steel-100 shadow-sm rounded-md p-2 pl-32" placeholder={0} spellCheck="false" defaultValue />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="spacer" />
                        </div>
                        <div className="col-span-11 sm:col-span-1 flex items-center">
                            <div className="mx-auto mt-2 sm:mt-0 sm:mb-4 transform rotate-90 sm:rotate-0">
                                <button onClick={switchTokens} className="focus:outline-none">
                                    <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                                        <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                                            <img alt aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} />
                                        </div>
                                        <img src={arrowToggle} decoding="async" style={{ visibility: 'inherit', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} srcSet={arrowToggle} />
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="col-span-11 sm:col-span-5">
                            <div className="swapForm dark:text-white">
                                <div className="head">
                                    <div className="pl-1 text-sm" />
                                    <div className="flex justify-between">
                                        <div className="pl-1 text-sm font-bold">To</div>
                                        <div className="pl-1 text-sm">
                                            Balance : <span className="text-blue-400 font-bold">{rhsBalance} {currentRHS.name}</span>
                                        </div>
                                    </div>
                                    <div className="pl-1 text-sm" />
                                    <div className="inputField">
                                        <div className="text-right">
                                            <div className="flex pt-1">
                                                <div className="w-full -mt-6">
                                                    <div className="flex flex-wrap">
                                                        <div className="w-full sm:w-6/12 md:w-4/12 px-4">
                                                            <div className="relative inline-flex align-middle w-full">
                                                                <div onClick={() => setActiveRHS(!isActiveRHS)} className="width-119 absolute mt-3 -ml-4 w-28  font-bold text-sm text-steel-400 px-4  py-2 mt-1 rounded shadow hover:shadow-lg outline-none focus:outline-none  bg-white active:bg-gray-600 ease-linear transition-all duration-150 cursor-pointer dark:bg-dark-500 dark:border-0 dark:text-white">
                                                                    <div className="flex items-center">
                                                                        <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                                                                            <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                                                                                <img alt aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGhlaWdodD0iMjYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} />
                                                                            </div>
                                                                            <img src={currentRHS.logo} decoding="async" style={{ visibility: 'inherit', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} srcSet={currentRHS.logo} />
                                                                        </div>
                                                                        <div className="font-bold ml-2 text-sm">{currentRHS.name}</div>
                                                                    </div>
                                                                </div>
                                                                {isActiveRHS ?
                                                                    <div className="block z-50 pt-1" style={{ position: 'absolute', inset: '0px auto auto 0px', margin: 0, transform: 'translate(-16px, 54px)' }} data-popper-placement="bottom-start">
                                                                        <div className="dark:bg-dark-500 bg-white text-base  float-left py-2 list-none text-left rounded shadow-lg w-28">
                                                                            
                                                                          
                                                                        {/* {RHSTokens.map((token) => <DropdownRHS key={token.name} name={token.name} logo={token.logo} onClick={() => {setCurrentRHS({name: token.name, logo: token.logo}); setActiveRHS(!isActiveRHS); }} />

                                                                            )} */}
                                                                            {RHSTokens.map((token) => {if(token.name!==currentLHS.name) {return <DropdownRHS key={token.name} name={token.name} logo={token.logo} onClick={() => {setCurrentRHS({name: token.name, logo: token.logo}); setActiveRHS(!isActiveRHS); updateRHSBalance()}}  /> } }
                                                                            )}
                                                                    
                                                                         
                                                                        </div>
                                                                    </div>

                                                                    : ""}
                                                                <div className="hidden z-50 pt-1">
                                                                    <div className="dark:bg-dark-500 bg-white text-base  float-left py-2 list-none text-left rounded shadow-lg w-28">
                                                                       

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <input autoComplete="off" autoCorrect="off" type="number" className="focus:outline-none dark:bg-dark-600 text-xl py-2 w-full bg-steel-100 shadow-sm rounded-md p-2 pl-32" placeholder={RHS} spellCheck="false" readOnly defaultValue />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center pt-6" />
                    <div className="flex pt-4 min-h-24">
                    {LHSApproved == true ? (
                        <div className="w-full sm:w-auto sm:mx-auto mt-4 mb-8">
                        <button onClick={swapTokens} type="button" className="py-3 px-32 rounded-lg bg-gradient-to-r from-blue-400 to-green-300 text-white font-bold focus:outline-none" >
                        Swap
                        </button>
                        </div>
                    ) : (
                        <div className="w-full sm:w-auto sm:mx-auto mt-4 mb-8">
                            
                        <button onClick={approve} type="button" className="py-3 px-32 rounded-lg bg-gradient-to-r from-blue-400 to-green-300 text-white font-bold focus:outline-none" >
                                Approve
        </button> 
        <button type="button" style={{marginLeft: '10px' }} />
                            <button onClick={swapTokens} type="button" className="py-3 px-32 rounded-lg bg-gradient-to-r from-blue-400 to-green-300 text-white font-bold focus:outline-none" >
                                Swap
        </button>
                 
        </div>       
                    )}

                        {/* <div className="w-full sm:w-auto sm:mx-auto mt-4 mb-8">
                            
                        <button type="button" className="py-3 px-32 rounded-lg bg-gradient-to-r from-blue-400 to-green-300 text-white font-bold focus:outline-none" disabled>
                                Approve
        </button>
        <button type="button" style={{marginLeft: '10px' }} />
                            <button onClick={swapTokens} type="button" className="py-3 px-32 rounded-lg bg-gradient-to-r from-blue-400 to-green-300 text-white font-bold focus:outline-none" >
                                Swap
        </button>
                        </div> */}
                    </div>
                    <div className="dark:text-white text-center text-gray-500 pt-2 mb-4">
                        <div className="text-sm">
                            Exchange {currentLHS.name}/{currentRHS.name} (+0.07% Fees)
                        </div>
                        <div className="text-sm">
                            Trading routed through:&nbsp;<span className="font-bold text-blue-400">StableGaj Pool</span>
                        </div>
                        <div className="text-sm">
                            Max slippage:&nbsp;<span className="font-bold text-blue-400">0.3%</span>
                        </div>
                    </div>
                </div>
                <div className="flex mb-4">
                    <a href="/Info"><div className="w-full cursor-pointer">
                        <div className="relative -ml-2 -mb-14 sm:-mb-20 z-30 w-14 sm:w-20 sm:block hidden">
                            <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                                <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                                    <img alt aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=" style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} />
                                </div>
                                {/* <img src={walletIcon} decoding="async" style={{ visibility: 'inherit', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} srcSet={walletIcon} /> */}
                            </div>
                        </div>
                    </div></a>
                </div>
                <div className=" dark:bg-dark-700 bg-white rounded-3xl shadow-md p-6 lg:p-12 mb-6">
                    <div className="grid grid-cols-2 gap-3 py-2">
                        <div className="grid grid-cols-8 py-8 sm:py-0 col-span-2 sm:col-span-1  items-center rounded-3xl bg-gradient-to-r from-blue-400 to-green-300 justify-between">
                            <div className="col-span-5 pl-5 sm:pl-6 ">
                                <div className="text-xl font-bold text-white mb-3">
                                    <a href="https://app.sushi.com/swap" target="_blank">StableGaj</a> earned :
          </div>
                                <div className="text-4xl font-bold text-white mb-2">0.00</div>
                                <div className="text-sm font-bold text-white" />
                            </div>
                            <div className="col-span-3 px-2 pr-6">
                                <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                                    <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                                        <img alt aria-hidden="true" role="presentation" src={logo} style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} />
                                    </div>
                                    <img src={logo} decoding="async" style={{ visibility: 'inherit', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} srcSet={logo} />
                                </div>
                            </div>
                        </div>
                        <div className="dark:text-white col-span-2 sm:col-span-1 rounded-3xl py-8 sm:py-6 px-3 sm:px-8 font-bold">
                            <div className="grid grid-cols-12">
                                <div className="col-span-1">
                                    <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                                        <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                                            <img alt aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} />
                                        </div>
                                        <img src={walletIcon} decoding="async" style={{ visibility: 'inherit', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} srcSet={walletIcon} />
                                    </div>
                                </div>
                                <div className="sm:text-lg text-md ml-2 col-span-11 flex sm:block items-center ">
                                    <div className="inline sm:block">Your SGAJ&nbsp;</div>
                                    <div className="inline sm:block">wallet balance :</div>
                                </div>
                                <div className="col-span-1" />
                                <div className="ml-2 col-span-11">
                                    <div className="text-4xl mt-4 mb-2 font-bold text-blue-500">{sgajBalance}</div>
                                    <div className="text-sm mb-4 ">≈ ${sgajBalance*0.1}</div>
                                </div>
                                <div className="col-span-1">
                                    <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                                        <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                                            <img alt aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} />
                                        </div>
                                        <img src={lockIcon} decoding="async" style={{ visibility: 'inherit', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} srcSet={lockIcon} />
                                    </div>
                                </div>
                                <div className="ml-2 col-span-11 ">
                                    <div className="sm:text-lg text-md  flex items-center  py-1 sm:py-0">
                                        <div className="sm:flex">Total Liquidity :&nbsp;</div>
                                    </div>
                                    <div className>
                                        <div className="text-4xl my-4 font-bold text-blue-500">
                                            ${String(totalLiquidity).slice(0,10)}
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
    );
// }
}

export default Swap;