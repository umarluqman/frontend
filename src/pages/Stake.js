import Footer from "../components/Footer";
import Header from "../components/Header";
import {useEffect, useState} from 'react'

import LogoTransparent from '../static/media/logo.svg';
import logo from '../static/media/logo.svg'
import SGAJ_DOLLY_LP from '../static/media/ust-pool.svg'
import SGAJ_BNB_LP from '../static/media/ust-pool.svg'
import SGAJ_BUSD_LP from '../static/media/sgaj-usdc.svg'
import SGAJ from '../static/media/ust-pool.svg'

import SGAJ_LP from '../static/media/ust-pool.svg'
import BUSD_USDT from '../static/media/ust-pool.svg'
import UST_LP from '../static/media/ust-pool.svg'
import DOLLY_LP from '../static/media/ust-pool.svg'
import walletIcon from '../static/media/wallet-icon.svg'
import lockIcon from '../static/media/lock-icon.svg'

import Portfolio from '../static/media/beginner-apeboard-image.png'
import Buy from '../static/media/Buy.png'
import Chart from '../static/media/beginner-apeboard-image.png'
import TokenToggle from "../components/Stake/TokenToggle";
import { getWeb3 } from '../hooks/utils';
import erc20 from '../Abi/erc20.json'
import masterchef from '../Abi/masterchef.json'
import vault from '../Abi/vault.json'
import axios from 'axios'

function Stake() {
    const [isSGAJLPActive, setSGAJLPIsActive] = useState(false);
    const [approvedLP, setApprovedLP] = useState(false)
    const [stablegajLPContract, setStablegajLPContract] = useState()
    const [sgajUSDCLPContract, setSgajUSDCLPContract] = useState()
    const [usdcContract, setUsdcContract] = useState()
    const [balance, setBalance] = useState()
    const [web3, setWeb3] = useState(undefined);
    const [accounts, setAccounts] = useState(undefined);
    const [price, setPrice] = useState(0);
    const [sgajLpTVL, setsgajLpTVL] = useState(0)
    const [sgajLpAPR, setSgajLpAPR] = useState(0)
    const [masterchefContract, setMasterchefContract] = useState()
    const [sgajLPDeposit, setSgajLPDeposit] = useState()
    const [sgajLPBalance, setsgajLPBalance] = useState()
    const [sgajLPAvailable, setSgajLpAvailable] = useState()
    const [sgajLPWithdraw, setSgajLPWithdraw] = useState()
    const [pendingSGAJLP, setPendingSGAJLP] = useState()
    const [GAJUSDCInUSD, setGAJUSDCInUSD] = useState()

    // SGAJ-USDC
    const [isSGAJUSDCLPActive, setSGAJUSDCLPIsActive] = useState(false);
    const [sgajusdcTVL, setSgajusdcTVL] = useState()
    const [sgajusdcLpAPR, setSgajusdcLpAPR] = useState(0)
    const [sgajusdcLPDeposit, setSgajusdcLPDeposit] = useState()
    const [sgajusdcLPBalance, setsgajusdcLPBalance] = useState()
    const [sgajusdcLPAvailable, setSgajusdcLpAvailable] = useState()
    const [sgajusdcLPWithdraw, setSgajusdcLPWithdraw] = useState()
    const [pendingSGAJUSDCLP, setPendingSGAJUSDCLP] = useState()

    async function fetchData(account) {
        try {
            const result = await axios.get(`https://api.covalenthq.com/v1/137/address/0x7116b32dab15c8f3806d39f9623fc56dcdf33d68/balances_v2/?&key=ckey_07102a0276534067a2bf637a68f`)
            // const data = result.data
            console.log(result.data.data.items)
        } catch (error) {
            console.error(error)
           
        }
    }

  useEffect(() => {
    const init = async () => {
        
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
      fetchData(accounts[0])
      const usdc = new web3.eth.Contract(
        erc20,
        '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
      );
      const sgaj = new web3.eth.Contract(
        erc20,
        '0x94c7d657f1c8Be06A4Dc009D2d475Bb559d858cb',
      );

      const stablegajLP = new web3.eth.Contract(
        erc20,
        '0xe7733b7785acf9c160b37e8038aab6a54cd26cc4',
      );

      const sgajUSDC = new web3.eth.Contract(
        erc20,
        '0x7116b32dab15c8f3806d39f9623fc56dcdf33d68',
      );
      
      const Masterchef = new web3.eth.Contract(
        masterchef,
        '0xA794491C95D276DD67A6641D978618BA2598ad09'
      )

    const stablegajLpinMasterchef = await stablegajLP.methods
      .balanceOf('0xA794491C95D276DD67A6641D978618BA2598ad09')
      .call();
    
    const sgajUSDCBalinMasterchef = await sgajUSDC.methods
        .balanceOf('0xA794491C95D276DD67A6641D978618BA2598ad09')
        .call();

    const sgajBalinLP = await sgaj.methods
        .balanceOf('0x7116b32DAb15c8F3806D39f9623fC56dcdF33D68')
        .call();
    
    const usdcBalInLP = await usdc.methods
        .balanceOf('0x7116b32DAb15c8F3806D39f9623fC56dcdF33D68')
        .call();
    // const sgajLPBalinMasterchef = await sga
    const sgajBal = await sgaj.methods
        .balanceOf(accounts[0])
        .call();
    const sgajLPBal = await stablegajLP.methods
        .balanceOf(accounts[0])
        .call();
    const sgajUsdcLPBal = await sgajUSDC.methods
        .balanceOf(accounts[0])
        .call();
    
    const sgajLPAvailableWithdraw = await Masterchef.methods.userInfo(4, accounts[0]).call()
    const pendingSGAJLP = await Masterchef.methods.pendingEgg(4,accounts[0]).call()
    const sgajusdcLPAvailableWithdraw = await Masterchef.methods.userInfo(3, accounts[0]).call()
    const pendingSGAJUSDCLP = await Masterchef.methods.pendingEgg(3,accounts[0]).call()

    const totalSupplyofLp = await sgajUSDC.methods.totalSupply().call()
    const usdcBalanceInLP = usdcBalInLP / 10**6;
    const pricePerLP = (usdcBalanceInLP*2)/(totalSupplyofLp/10**18)
    const sgajBalanceInLP = sgajBalinLP / 10**18;
    const sgajBalance = sgajBal / 10**18;
    const sgajLPBalance = sgajLPBal / 10**18;
    const stablegajLPBalanceInMasterchef = stablegajLpinMasterchef / 10**18;
    console.log(sgajLPAvailableWithdraw)
    const sgajLPAvailable = sgajLPAvailableWithdraw[0] / 10**18
        console.log(sgajLPAvailable)
    const price = usdcBalanceInLP/sgajBalanceInLP;
    const LpApr = (price*4*15768000*100/2000/stablegajLPBalanceInMasterchef)*100
    const pendingSGAJForSGAJLP = pendingSGAJLP/10**18;
    const SGAJUSDCTVL = pricePerLP*(sgajUSDCBalinMasterchef/10**18)
    console.log(price)
    // console.log(usdcBalance)
      setWeb3(web3);
      setAccounts(accounts);
      setPrice(price)
      setMasterchefContract(Masterchef)
      setSgajUSDCLPContract(sgajUSDC)
      setBalance(sgajBalance)
      setsgajLpTVL(stablegajLPBalanceInMasterchef)
      setSgajLpAPR(LpApr)
      setStablegajLPContract(stablegajLP)
      setUsdcContract(usdc)
      setsgajLPBalance(sgajLPBalance)
      setSgajLpAvailable(sgajLPAvailable)
      setPendingSGAJLP(pendingSGAJForSGAJLP)
      setPendingSGAJUSDCLP(pendingSGAJUSDCLP/10**18)
      setSgajusdcLpAvailable(sgajusdcLPAvailableWithdraw[0]/10**18)
      setGAJUSDCInUSD((sgajusdcLPAvailableWithdraw[0]/10**18)*pricePerLP)
      setsgajusdcLPBalance(sgajUsdcLPBal / 10**18)
      setSgajusdcTVL(pricePerLP*(sgajUSDCBalinMasterchef/10**18))
      setSgajusdcLpAPR((price*4*15768000*500/2000/SGAJUSDCTVL)*100)
    }
    init();
    window.ethereum.on('accountsChanged', accounts => {
      setAccounts(accounts);
    });
  }, []);

async function approveSGAJLP() {
    const allowance = await stablegajLPContract.methods.allowance(accounts[0], '0xA794491C95D276DD67A6641D978618BA2598ad09').call()
    if (allowance >= '10000000000000000000000000'){
        setApprovedLP(true)
    } else {
        const approved = await stablegajLPContract.methods.approve('0xA794491C95D276DD67A6641D978618BA2598ad09','115792089237316195423570985008687907853269984665640564039457584007913129639935').send({from: accounts[0]});
        setApprovedLP(false)
    }
}

async function approveSGAJUSDCLP() {
    const allowance = await sgajUSDCLPContract.methods.allowance(accounts[0], '0xA794491C95D276DD67A6641D978618BA2598ad09').call()
    if (allowance >= '10000000000000000000000000'){
        setApprovedLP(true)
    } else {
        const approved = await sgajUSDCLPContract.methods.approve('0xA794491C95D276DD67A6641D978618BA2598ad09','115792089237316195423570985008687907853269984665640564039457584007913129639935').send({from: accounts[0]});
        setApprovedLP(false)
    }
}

async function depositSGAJLP() {
    console.log(Number(sgajLPDeposit))
        const deposit = await masterchefContract.methods.deposit(4, web3.utils.toWei(sgajLPDeposit)).send({from: accounts[0]})
       
}
async function depositAllSGAJLP() {
    console.log(Number(sgajLPDeposit))
        const deposit = await masterchefContract.methods.deposit(4, web3.utils.toWei(String(sgajLPBalance))).send({from: accounts[0]})
       
}

async function withdrawSGAJLP() {
    const withdraw = await masterchefContract.methods.withdraw(4, web3.utils.toWei(sgajLPWithdraw)).send({from: accounts[0]})
}

async function claimSGAJLP() {
    const claim = await masterchefContract.methods.deposit(4, 0).send({from: accounts[0]})
}

// SGAJ-USDC

async function depositSGAJUSDCLP() {
    console.log(Number(sgajLPDeposit))
        const deposit = await masterchefContract.methods.deposit(3, web3.utils.toWei(sgajusdcLPDeposit)).send({from: accounts[0]})
       
}

async function withdrawSGAJUSDCLP() {
    const withdraw = await masterchefContract.methods.withdraw(3, web3.utils.toWei(sgajusdcLPWithdraw)).send({from: accounts[0]})
}

async function claimSGAJUSDCLP() {
    const claim = await masterchefContract.methods.deposit(3, 0).send({from: accounts[0]})
}

    return (
        <div>
            <Header inApp={true} active='Stake' />
            <div className="container">
                <div className=" dark:bg-dark-700 bg-white rounded-3xl shadow-md p-6 lg:p-12 mb-6">
                    <div className="grid grid-cols-2 gap-3 py-2">
                        <div className="grid grid-cols-8 py-8 sm:py-0 col-span-2 sm:col-span-1  items-center rounded-3xl bg-gradient-to-r from-blue-400 to-green-300 justify-between">
                            <div className="col-span-5 pl-5 sm:pl-6 ">
                                <div className="text-xl font-bold text-white mb-3">
                                    <a href="https://app.sushi.com/swap" target="_blank">StableGaj </a>
            earned :
          </div>
                                <div className="text-4xl font-bold text-white mb-2">{pendingSGAJLP}</div>
                                <div className="text-sm font-bold text-white">≈ $ {String(Number(pendingSGAJLP)*Number(price)).slice(0,10)}</div>
                            </div>
                            <div className="col-span-3 px-2 pr-6">
                                <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                                    <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                                        <img alt aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iTmFOIiBoZWlnaHQ9IjE2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=" style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} />
                                    </div>
                                    <img src={LogoTransparent} decoding="async" style={{ visibility: 'inherit', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} srcSet={LogoTransparent} />
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
                                        <img src={walletIcon} decoding="async" style={{ visibility: 'inherit', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} srcSet={walletIcon}/>
                                    </div>
                                </div>
                                <div className="sm:text-lg text-md ml-2 col-span-11 flex sm:block items-center ">
                                    <div className="inline sm:block">Your SGAJ&nbsp;</div>
                                    <div className="inline sm:block">wallet balance :</div>
                                </div>
                                <div className="col-span-1" />
                                <div className="ml-2 col-span-11">
                                    <div className="text-4xl mt-4 mb-2 font-bold text-blue-500">{String(balance).slice(0,10)}</div>
                                    <div className="text-sm mb-4 ">≈ ${String(balance*price).slice(0,10)}</div>
                                </div>
                                <div className="col-span-1">
                                    <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                                        <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                                            <img alt aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} />
                                        </div>
                                        <img src={lockIcon} decoding="async" style={{ visibility: 'inherit', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} srcSet={lockIcon}/>
                                    </div>
                                </div>
                                <div className="ml-2 col-span-11 ">
                                    <div className="sm:text-lg text-md  flex items-center  py-1 sm:py-0">
                                        <div className="sm:flex">Total Value Locked :&nbsp;</div>
                                    </div>
                                    <div className>
                                        <div className="text-4xl my-4 font-bold text-blue-500">
                                            $ {String(Number(sgajLpTVL)+Number(sgajusdcTVL)).slice(0,9)}
              </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container">
                <div className="text-center font-bold text-4xl pt-10 mt-10 pb-10 mb-5 dark:text-white">
                    <span className="text-blue-400">Stake</span> your LP tokens to earn <span className="text-blue-400">SGAJ</span>
                    <div className="text-sm font-normal sm:px-40 mt-2">
                        Stake your LP tokens in the farming pools to earn SGAJ as a reward. LP
                        tokens can be withdraw at any time. However, they must be staked to earn
                        yield.
                </div>
            </div>
            </div>
            <div className="container">
                <div className="dark:bg-dark-700 bg-white rounded-3xl shadow-md py-6 lg:pt-6 mb-6">
                    <div className="text-base sm:text-2xl font-bold dark:text-white ml-4 sm:ml-6 mb-4">
                        Staking SGAJ
      </div>
                    <div className="text-sm sm:text-base dark:border-0 border-t grid grid-cols-5 dark:text-white dark:border-t-dark-500 py-4 ">
                        <div className="col-span-2 text-center sm:text-left sm:ml-6 ">
                            LP Tokens Name
        </div>
                        <div className="col-span-1 text-center">APR</div>
                        <div className="col-span-1 text-center">TVL</div>
                        <div className="col-span-1 text-center">Earned</div>
                    </div>
                    {/* <TokenToggle name="SGAJ-USDC LP" addLiquidity='https://app.sushi.com/#/add/0x2791bca1f2de4661ed88a30c99a7a9449aa84174/0x94c7d657f1c8be06a4dc009d2d475bb559d858cb' logo={SGAJ_BUSD_LP} APR="306" APRDaily="0.84" TVL="6,908,333" Earned="0.00" Multiplier='5'/> */}
                    {/* <TokenToggle name="sGAJ" logo={logo} APR="37" APRDaily="0.10" TVL="28,122,464" Earned="0.00"/> */}
                    {/* SGAJ-USDC */}
                    <div onClick={()=>setSGAJUSDCLPIsActive(!isSGAJUSDCLPActive)} className="grid grid-cols-5  sm:gap-2 cursor-pointer">
            <div className="flex col-span-2 py-2 sm:py-6 sm:px-4 justify-between items-center">
                <div className="text-xs flex items-center">
                    <div className="flex mx-2 sm:mx-0 sm:mr-4">
                        <div className="flex sm:hidden relative z-10">
                            <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                                <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                                    <img alt aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} />
                                </div>
                                <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" style={{ visibility: 'hidden', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
                            </div>
                        </div>
                        <div className="hidden sm:flex relative z-10">
                            <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                                <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                                    <img alt aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} />
                                </div>
                                <img src={SGAJ_BUSD_LP} decoding="async" style={{ visibility: 'inherit', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} srcSet={SGAJ_BUSD_LP} />
                            </div>
                        </div>
                    </div>
                    <div className="text-xs sm:text-lg font-bold dark:text-white">
                        <div>
                            SGAJ-USDC LP<span className="undefined rounded-lg text-white bg-pink-500 px-1 sm:px-2 ml-1 sm:px-3 sm:text-base text-xs">5X</span>
                        </div>
                        <div className="font-light text-xs cursor_pointer text-blue-500 ">
                            <a target="_blank" href='https://app.sushi.com/add/0x2791bca1f2de4661ed88a30c99a7a9449aa84174/0x94c7d657f1c8be06a4dc009d2d475bb559d858cb'>Add Liquidity to GAJ-USDC</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-1 flex items-center justify-center">
                <div className="text-center text-xs px-2 sm:text-base dark:text-white font-bold py-1 rounded-lg text-black">
                    APR <span className="sm:inline hidden">: </span>{String(sgajusdcLpAPR).toLocaleString().slice(0,10)}%
<div className="text-xs text-center text-steel-300">≈ {String(sgajusdcLpAPR/365).slice(0,10)}% daily</div>
                </div>
            </div>
            <div className="col-span-1 text-xs sm:text-base dark:text-white flex items-center justify-center">
                ${String(sgajusdcTVL).slice(0,10)}
</div>
            <div className="text-blue-400 font-bold text-center sm:text-left text-xs sm:text-lg flex items-center justify-center">
                {String(pendingSGAJUSDCLP).slice(0,7)}
            
</div>
        </div>
        <div className={`${isSGAJUSDCLPActive?'active':''} card-toggle`}>
            <div className="dark:bg-steel-500 py-3 sm:py-0 grid grid-cols-8 border-t dark:border-0 bg-gray-100 ">
                <div className="col-span-full sm:col-span-3 sm:py-6 px-3 sm:pl-6 sm:pr-3 grid grid-cols-1 sm:gap-y-1">
                    <div className="flex justify-between items-center">
                        <div className="dark:text-white font-bold text-gray-500 text-md">
                            Stake
</div>
                        <div className="text-gray-400 text-xs sm:text-sm flex">
                            <div>Balance:</div>
                            <div className="ml-1 cursor-pointer text-blue-500">{String(sgajusdcLPBalance)}</div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="dark:text-white font-bold text-gray-500 text-md">
                            
</div>
                        <div className="text-gray-400 text-xs sm:text-sm flex">
                            <div></div>
                            <div className="ml-1 cursor-pointer text-blue-500">-</div>
                        </div>
                    </div>
                    <div className>
                        <input onChange={(e) => setSgajusdcLPDeposit(e.target.value)} type="number" placeholder={0} className="dark:bg-dark-400 dark:text-white focus:outline-none focus:ring focus:border-blue-200 rounded-md p-2 w-full mb-1 sm:mb-0 sm:my-3" defaultValue />
                    </div>
                    {/* <div className="-mt-10 pr-1">
                                        <button className="dark:bg-dark-500 focus:outline-none text-blue-400 bg-blue-100 px-5 py-1 rounded-md float-right relative z-1">
                                            Max
                </button>
                                    </div> */}
                    <div className="mt-1">
                            {approvedLP == true ? <div className="flex gap-3">
                            

                                <button onClick={depositSGAJUSDCLP} type="button" className="focus:outline-none text-center py-2 mt-1 w-full border-0 rounded-md font-bold bg-blue-400 text-white">
                                Deposit
</button> 
{/* <button onClick={depositAllSGAJUSDCLP} type="button" className="focus:outline-none text-center py-2 mt-1 w-full border-0 rounded-md font-bold bg-blue-400 text-white">
                                Deposit All
</button> */}
                        </div> 
                        : 
                            <div className="flex gap-3">
                                <button onClick={approveSGAJUSDCLP} type="button" className="focus:outline-none text-center py-2 mt-1 w-full border-0 rounded-md font-bold bg-blue-400 text-white">
                                Approve</button>
                                {/* <button onClick={depositSGAJUSDCLP} type="button" className="focus:outline-none text-center py-2 mt-1 w-full border-0 rounded-md font-bold bg-blue-400 text-white">
                                Deposit
</button> <button onClick={depositAllSGAJUSDCLP} type="button" className="focus:outline-none text-center py-2 mt-1 w-full border-0 rounded-md font-bold bg-blue-400 text-white">
                                Deposit All
</button> */}
                        </div>
                        }
                            {/* <button onClick={approve} type="button" className="focus:outline-none text-center py-2 mt-1 w-full border-0 rounded-md font-bold bg-blue-400 text-white">
                                Approve</button>

                                <button type="button" className="focus:outline-none text-center py-2 mt-1 w-full border-0 rounded-md font-bold bg-blue-400 text-white">
                                Deposit
</button>
                        </div> */}
                    </div>
                    <div className=" mt-4 text-xs dark:text-gray-400 flex items-center justify-center">
                        <span className="mr-1">You don’t have LP token yet? </span><a target="_blank" href='https://app.sushi.com/add/0x2791bca1f2de4661ed88a30c99a7a9449aa84174/0x94c7d657f1c8be06a4dc009d2d475bb559d858cb'><span className="text-blue-400">Add LP</span></a>
                    </div>
                </div>
                <div className="col-span-full sm:col-span-3 py-4 sm:py-6 pl-3 pr-3 grid grid-cols-1 sm:gap-y-1">
                    <div className="flex items-center justify-between">
                        <div className="dark:text-white font-bold text-gray-500 text-md">
                            Unstake
</div>
                        <div className="text-gray-400 text-xs sm:text-sm flex">
                            <div>Balance:</div>
                            <div className="ml-1 cursor-pointer text-blue-500">{String(sgajusdcLPAvailable)}</div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="dark:text-white font-bold text-gray-500 text-md">
                            
</div>
                        <div className="text-gray-400 text-xs sm:text-sm flex">
                            <div>Value in USD:</div>
                            <div className="ml-1 cursor-pointer text-blue-500">${String(GAJUSDCInUSD).slice(0,10)}</div>
                        </div>
                    </div>
                    <div className>
                        <input onChange={(e) => setSgajusdcLPWithdraw(e.target.value)} type="number" placeholder={0} className="dark:bg-dark-400  dark:text-white focus:outline-none focus:ring focus:border-blue-200 rounded-md p-2 w-full mb-1 sm:mb-0 sm:my-3" defaultValue />
                    </div>
                    <div className="mt-1">
                        <div className="flex gap-2">
                                <button onClick={withdrawSGAJUSDCLP} type="button" className="focus:outline-none text-center py-2 mt-1 w-full border-0 rounded-md font-bold bg-blue-400 text-white" >
                                Withdraw
</button>
                        </div>
                    </div>
                    <div className=" mt-4 text-xs dark:text-gray-400 flex items-center justify-center">
                        <span className="mr-1">You want remove LP token? </span><a target="_blank" href='https://app.sushi.com/add/0x2791bca1f2de4661ed88a30c99a7a9449aa84174/0x94c7d657f1c8be06a4dc009d2d475bb559d858cb'><span className="text-blue-400">Remove LP</span></a>
                    </div>
                </div>
                <div className="col-span-full sm:col-span-2 text-center p-5 pl-3 grid grid-cols-1 gap-y-1">
                    <div className="text-total-reward text-3xl font-bold text-blue-500 pt-4 flex justify-center items-center">
                        {String(pendingSGAJUSDCLP).slice(0,7)}
</div>
                    <div className="dark:text-white text-xs mb-4">(≈ $ {Number(pendingSGAJUSDCLP)*Number(price)})</div>
                    <button onClick={claimSGAJUSDCLP} type="button" className="focus:outline-none text-center my-1  w-full py-3 sm:py-2 rounded-md bg-gradient-to-r from-blue-400 to-green-300 text-white font-bold sm:mb-10">
                        Claim
</button>
                </div>
            </div>
        </div>


                </div>

                


                <div className="dark:bg-dark-700 bg-white rounded-3xl shadow-md py-6 lg:pt-6 mb-6">
                    <div className="text-base sm:text-2xl font-bold dark:text-white ml-4 sm:ml-6 mb-4">
                        Staking Stablecoin
      </div>
                    <div className="text-sm sm:text-base dark:border-0 border-t grid grid-cols-5 dark:text-white dark:border-t-dark-500 py-4 ">
                        <div className="col-span-2 text-center sm:text-left sm:ml-6 ">
                            LP Tokens Name
        </div>
                        <div className="col-span-1 text-center">APR</div>
                        <div className="col-span-1 text-center">TVL</div>
                        <div className="col-span-1 text-center">Earned</div>
                    </div>
                    {/* <TokenToggle name="StableGaj LP" addLiquidity='https://stablegaj.finance/Withdraw' logo={SGAJ_LP} APR={sgajLpAPR} APRDaily="0.20" TVL={sgajLpTVL} Earned="0.00" Multiplier='1'/> */}

                
                
            {/* G */}
            <div onClick={()=>setSGAJLPIsActive(!isSGAJLPActive)} className="grid grid-cols-5  sm:gap-2 cursor-pointer">
            <div className="flex col-span-2 py-2 sm:py-6 sm:px-4 justify-between items-center">
                <div className="text-xs flex items-center">
                    <div className="flex mx-2 sm:mx-0 sm:mr-4">
                        <div className="flex sm:hidden relative z-10">
                            <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                                <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                                    <img alt aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} />
                                </div>
                                <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" style={{ visibility: 'hidden', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
                            </div>
                        </div>
                        <div className="hidden sm:flex relative z-10">
                            <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                                <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                                    <img alt aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} />
                                </div>
                                <img src={SGAJ_LP} decoding="async" style={{ visibility: 'inherit', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} srcSet={SGAJ_LP} />
                            </div>
                        </div>
                    </div>
                    <div className="text-xs sm:text-lg font-bold dark:text-white">
                        <div>
                            StableGaj LP<span className="undefined rounded-lg text-white bg-pink-500 px-1 sm:px-2 ml-1 sm:px-3 sm:text-base text-xs">1X</span>
                        </div>
                        <div className="font-light text-xs cursor_pointer text-blue-500 ">
                            <a target="_blank" href='https://stablegaj.finance/Deposit'>Add StableGaj LP</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-1 flex items-center justify-center">
                <div className="text-center text-xs px-2 sm:text-base dark:text-white font-bold py-1 rounded-lg text-black">
                    APR <span className="sm:inline hidden">: </span>{String(sgajLpAPR).slice(0,10)}%
<div className="text-xs text-center text-steel-300">≈ {String(sgajLpAPR/365).slice(0,10)}% daily</div>
                </div>
            </div>
            <div className="col-span-1 text-xs sm:text-base dark:text-white flex items-center justify-center">
                ${String(sgajLpTVL).slice(0,10)}
</div>
            <div className="text-blue-400 font-bold text-center sm:text-left text-xs sm:text-lg flex items-center justify-center">
                {pendingSGAJLP}
            
</div>
        </div>
        <div className={`${isSGAJLPActive?'active':''} card-toggle`}>
            <div className="dark:bg-steel-500 py-3 sm:py-0 grid grid-cols-8 border-t dark:border-0 bg-gray-100 ">
                <div className="col-span-full sm:col-span-3 sm:py-6 px-3 sm:pl-6 sm:pr-3 grid grid-cols-1 sm:gap-y-1">
                    <div className="flex justify-between items-center">
                        <div className="dark:text-white font-bold text-gray-500 text-md">
                            Stake
</div>
                        <div className="text-gray-400 text-xs sm:text-sm flex">
                            <div>Balance:</div>
                            <div className="ml-1 cursor-pointer text-blue-500">{sgajLPBalance}</div>
                        </div>
                    </div>
                    <div className>
                        <input onChange={(e) => setSgajLPDeposit(e.target.value)} type="number" placeholder={0} className="dark:bg-dark-400 dark:text-white focus:outline-none focus:ring focus:border-blue-200 rounded-md p-2 w-full mb-1 sm:mb-0 sm:my-3" defaultValue />
                    </div>
                    <div className="mt-1">
                            {approvedLP == true ? <div className="flex gap-3">
                            

                                <button onClick={depositSGAJLP} type="button" className="focus:outline-none text-center py-2 mt-1 w-full border-0 rounded-md font-bold bg-blue-400 text-white">
                                Deposit
</button>
{/* <button onClick={depositAllSGAJLP} type="button" className="focus:outline-none text-center py-2 mt-1 w-full border-0 rounded-md font-bold bg-blue-400 text-white">
                                Deposit All
</button> */}
                        </div> : 
                            <div className="flex gap-3">
                                <button onClick={approveSGAJLP} type="button" className="focus:outline-none text-center py-2 mt-1 w-full border-0 rounded-md font-bold bg-blue-400 text-white">
                                Approve</button>
                                {/* <button onClick={depositSGAJLP} type="button" className="focus:outline-none text-center py-2 mt-1 w-full border-0 rounded-md font-bold bg-blue-400 text-white">
                                Deposit
</button><button onClick={depositAllSGAJLP} type="button" className="focus:outline-none text-center py-2 mt-1 w-full border-0 rounded-md font-bold bg-blue-400 text-white">
                                Deposit All
</button> */}
                        </div>
                        }
                            {/* <button onClick={approve} type="button" className="focus:outline-none text-center py-2 mt-1 w-full border-0 rounded-md font-bold bg-blue-400 text-white">
                                Approve</button>

                                <button type="button" className="focus:outline-none text-center py-2 mt-1 w-full border-0 rounded-md font-bold bg-blue-400 text-white">
                                Deposit
</button>
                        </div> */}
                    </div>
                    <div className=" mt-4 text-xs dark:text-gray-400 flex items-center justify-center">
                        <span className="mr-1">You don’t have LP token yet? </span><a target="_blank" href='https://stablegaj.finance/Deposit'><span className="text-blue-400">Add LP</span></a>
                    </div>
                </div>
                <div className="col-span-full sm:col-span-3 py-4 sm:py-6 pl-3 pr-3 grid grid-cols-1 sm:gap-y-1">
                    <div className="flex items-center justify-between">
                        <div className="dark:text-white font-bold text-gray-500 text-md">
                            Unstake
</div>
                        <div className="text-gray-400 text-xs sm:text-sm flex">
                            <div>Balance:</div>
                            <div className="ml-1 cursor-pointer text-blue-500">{String(sgajLPAvailable).slice(0,7)}</div>
                        </div>
                    </div>
                    <div className>
                        <input onChange={(e) => setSgajLPWithdraw(e.target.value)} type="number" placeholder={0} className="dark:bg-dark-400  dark:text-white focus:outline-none focus:ring focus:border-blue-200 rounded-md p-2 w-full mb-1 sm:mb-0 sm:my-3" defaultValue />
                    </div>
                    <div className="mt-1">
                        <div className="flex gap-2">
                                <button onClick={withdrawSGAJLP} type="button" className="focus:outline-none text-center py-2 mt-1 w-full border-0 rounded-md font-bold bg-blue-400 text-white" >
                                Withdraw
</button>
                        </div>
                    </div>
                    <div className=" mt-4 text-xs dark:text-gray-400 flex items-center justify-center">
                        <span className="mr-1">You want remove LP token? </span><a target="_blank" href='https://stablegaj.finance/Deposit'><span className="text-blue-400">Remove LP</span></a>
                    </div>
                </div>
                <div className="col-span-full sm:col-span-2 text-center p-5 pl-3 grid grid-cols-1 gap-y-1">
                    <div className="text-total-reward text-3xl font-bold text-blue-500 pt-4 flex justify-center items-center">
                        {String(pendingSGAJLP).slice(0,7)}
</div>
                    <div className="dark:text-white text-xs mb-4">(≈ $ {Number(pendingSGAJLP)*Number(price)})</div>
                    <button onClick={claimSGAJLP} type="button" className="focus:outline-none text-center my-1  w-full py-3 sm:py-2 rounded-md bg-gradient-to-r from-blue-400 to-green-300 text-white font-bold sm:mb-10">
                        Claim
</button>
                </div>
            </div>
        </div>

        </div>


        <div className="text-2xl font-bold pl-2 sm:pl-6 sm:pt-4 dark:text-white">
                    Tools
    </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 mb-12 dark:text-white">
                    <div className="beginner-card">
                        <a target="_blank" href="https://app.sushi.com/swap?inputCurrency=0x2791bca1f2de4661ed88a30c99a7a9449aa84174&outputCurrency=0x94c7d657f1c8be06a4dc009d2d475bb559d858cb"><div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                            <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                                <img alt aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=" style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} />
                            </div>
                            <img src={Buy} decoding="async" style={{ visibility: 'inherit', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', objectFit: 'contain' }} srcSet={Buy} />
                        </div>
                            <div className="text-center -mt-10 font-bold">Buy SGAJ</div></a>
                    </div> <div className="beginner-card">
                        <a target="_blank" ><div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                            <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                                {/* <img alt aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=" style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} /> */}
                            </div>
                            {/* <img src={Buy} decoding="async" style={{ visibility: 'inherit', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', objectFit: 'contain' }} srcSet={Buy} /> */}
                        </div>
                            <div className="text-center -mt-10 font-bold"></div></a>
                    </div> 
                    <div className="beginner-card transform ">
                        <a target="_blank" href="https://analytics-polygon.sushi.com/tokens/0x94c7d657f1c8be06a4dc009d2d475bb559d858cb"><div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                            <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                                <img alt aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=" style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} />
                            </div>
                            <img src={Chart} decoding="async" style={{ visibility: 'inherit', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', objectFit: 'contain' }} srcSet={Chart} />
                        </div>
                            <div className="text-center -mt-10 font-bold">SGAJ Info</div></a>
                    </div>
                    {/* <div className="beginner-card">
                        <a target="_blank" href="https://apeboard.finance/dashboard/null?chain=BSC"><div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                            <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                                <img alt aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=" style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} />
                            </div>
                            <img src={Portfolio} decoding="async" style={{ visibility: 'inherit', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', objectFit: 'contain' }} srcSet={Portfolio} />
                        </div>
                            <div className="text-center -mt-10 font-bold">View Your Portfolio</div></a>
                    </div> */}
                </div>

        </div>
            <Footer />
        </div>
    );
}

export default Stake;