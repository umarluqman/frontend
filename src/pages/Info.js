
import Footer from "../components/Footer";
import Header from "../components/Header";
import {useEffect, useState} from 'react'
import erc20 from '../Abi/erc20.json'
import {getWeb3} from '../hooks/utils'
import mastechef from '../Abi/masterchef.json'

function Info() {
    const [web3, setWeb3] = useState(undefined);
    const [accounts, setAccounts] = useState(undefined);
    const [price, setPrice] = useState(0);
    const [sgajLpTVL, setsgajLpTVL] = useState()

    // SGAJ-USDC
    // const [isSGAJUSDCLPActive, setSGAJUSDCLPIsActive] = useState(false);
    const [sgajusdcTVL, setSgajusdcTVL] = useState()
    // const [sgajusdcLpAPR, setSgajusdcLpAPR] = useState(0)
    // const [sgajusdcLPDeposit, setSgajusdcLPDeposit] = useState()
    // const [sgajusdcLPBalance, setsgajusdcLPBalance] = useState()
    // const [sgajusdcLPAvailable, setSgajusdcLpAvailable] = useState()
    // const [sgajusdcLPWithdraw, setSgajusdcLPWithdraw] = useState()
    // const [pendingSGAJUSDCLP, setPendingSGAJUSDCLP] = useState()
    const [totalSupply, setTotalSupply] = useState()

  useEffect(() => {
    const init = async () => {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
      const networkId = await web3.eth.net.getId();
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
      
    //   const Masterchef = new web3.eth.Contract(
    //     masterchef,
    //     '0xA794491C95D276DD67A6641D978618BA2598ad09'
    //   )

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
    
    // const sgajLPAvailableWithdraw = await Masterchef.methods.userInfo(1, accounts[0]).call()
    // const pendingSGAJLP = await Masterchef.methods.pendingEgg(1,accounts[0]).call()
    // const sgajusdcLPAvailableWithdraw = await Masterchef.methods.userInfo(0, accounts[0]).call()
    // const pendingSGAJUSDCLP = await Masterchef.methods.pendingEgg(0,accounts[0]).call()

    const totalSupplyofLp = await sgajUSDC.methods.totalSupply().call()
    const usdcBalanceInLP = usdcBalInLP / 10**6;
    const pricePerLP = (usdcBalanceInLP*2)/(totalSupplyofLp/10**18)
    const sgajBalanceInLP = sgajBalinLP / 10**18;
    const sgajBalance = sgajBal / 10**18;
    const sgajLPBalance = sgajLPBal / 10**18;
    const stablegajLPBalanceInMasterchef = stablegajLpinMasterchef / 10**18;
    const totalSupply = await sgaj.methods.totalSupply().call()
    // console.log(sgajLPAvailableWithdraw)
    // const sgajLPAvailable = sgajLPAvailableWithdraw[0] / 10**18
        // console.log(sgajLPAvailable)
    const price = usdcBalanceInLP/sgajBalanceInLP;
    const LpApr = (price*4*15768000*100/600/stablegajLPBalanceInMasterchef)*100
    // const pendingSGAJForSGAJLP = pendingSGAJLP/10**18;
    const SGAJUSDCTVL = pricePerLP*(sgajUSDCBalinMasterchef/10**18)
    console.log(price)
    // console.log(usdcBalance)
      setWeb3(web3);
      setAccounts(accounts);
      setTotalSupply(totalSupply/10**18)
      setPrice(price)
    //   setMasterchefContract(Masterchef)
    //   setSgajUSDCLPContract(sgajUSDC)
    //   setBalance(sgajBalance)
      setsgajLpTVL(stablegajLPBalanceInMasterchef)
    //   setSgajLpAPR(LpApr)
    //   setStablegajLPContract(stablegajLP)
    //   setsgajLPBalance(sgajLPBalance)
    //   setSgajLpAvailable(sgajLPAvailable)
    //   setPendingSGAJLP(pendingSGAJForSGAJLP)
    //   setPendingSGAJUSDCLP(pendingSGAJUSDCLP/10**18)
    //   setSgajusdcLpAvailable(sgajusdcLPAvailableWithdraw[0]/10**18)
    //   setsgajusdcLPBalance(sgajUsdcLPBal / 10**18)
      setSgajusdcTVL(pricePerLP*(sgajUSDCBalinMasterchef/10**18))
    //   setSgajusdcLpAPR((price*4*15768000*500/600/SGAJUSDCTVL)*100)
    }
    init();
    window.ethereum.on('accountsChanged', accounts => {
      setAccounts(accounts);
    });
  }, []);
    return (
        <div>
            <Header inApp={true} active='Info' />
            <div className="container">
                <div className="bg-gradient-to-r from-blue-400 to-green-300 rounded-3xl shadow-md mb-6">
                    <div className="info-tvl-panel p-6 lg:py-20 text-white">
                        <div className="text-center">
                            <div className="text-3xl mb-1 font-bold">Total Value Locked</div>
                            <div className="text-4xl sm:text-7xl font-bold my-16">
                                <span className="sm:mr-3 mr-0">$ {String(sgajLpTVL+sgajusdcTVL).slice(0,10)}</span>
                            </div>
                        </div>
                        <div className="text-center">
                            See more information on <a target="_blank" className href="https://polygonscan.com/address/0x94c7d657f1c8be06a4dc009d2d475bb559d858cb">
                                <u>Explorer</u></a>
                        </div>
                    </div>
                </div>
                <div className=" dark:bg-dark-700 bg-white rounded-3xl shadow-md p-6 lg:p-12 mb-6">
                    <div className="grid grid-cols-3">
                        <div className="col-span-3 sm:col-span-1 flex items-center justify-center">
                            <div className="sm:p-10 w-full dark:border-dark border-light sm:border-r">
                                <div className="font-bold text-2xl sm:text-3xl text-steel-400 dark:text-white">
                                    SGAJ STATS
          </div>
                                <a target="_blank" href=""><button className="focus:outline-none btn-CoinMarketCap rounded w-full flex items-center justify-center py-2 mt-7 text-sm">
                                    <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                                        <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                                            <img alt aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} />
                                        </div>
                                        <img src="/_next/image?url=%2Fimages%2Ficons%2Fcoinmarketcap-icon.svg&w=48&q=75" decoding="async" style={{ visibility: 'inherit', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} srcSet="
              /_next/image?url=%2Fimages%2Ficons%2Fcoinmarketcap-icon.svg&w=32&q=75 1x,
              /_next/image?url=%2Fimages%2Ficons%2Fcoinmarketcap-icon.svg&w=48&q=75 2x
            " />
                                    </div>
                                    <span className="ml-1">CoinMarketCap</span>
                                </button></a><a target="_blank"><button className="focus:outline-none  btn-CoinGecko rounded w-full flex items-center justify-center py-2 mt-6 text-sm">
                                    <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                                        <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                                            <img alt aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} />
                                        </div>
                                        <img src="/_next/image?url=%2Fimages%2Ficons%2Fcoingecko-icon.svg&w=48&q=75" decoding="async" style={{ visibility: 'inherit', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} srcSet="
              /_next/image?url=%2Fimages%2Ficons%2Fcoingecko-icon.svg&w=32&q=75 1x,
              /_next/image?url=%2Fimages%2Ficons%2Fcoingecko-icon.svg&w=48&q=75 2x
            " />
                                    </div>
                                    <span className="ml-1">CoinGecko</span>
                                </button></a>
                            </div>
                        </div>
                        <div className="pt-2 col-span-3 sm:col-span-2 sm:px-20 flex justify-center items-center sm:mt-0 mt-4">
                            <div className="w-full">
                                <div className="grid grid-cols-2 mb-4">
                                    <div className="sm:text-base text-sm dark:text-white">sGAJ Price</div>
                                    <div className="sm:text-base text-sm font-bold text-blue-400 text-right">
                                        $ 0.1
            </div>
                                </div>
                                {/* <div className="grid grid-cols-2 mb-4">
                                    <div className="sm:text-base text-sm dark:text-white">
                                        Total Trading Volume
            </div>
                                    <div className="sm:text-base text-sm font-bold text-blue-400 text-right">
                                        $ 159,201,240
            </div>
                                </div> */}
                                <div className="grid grid-cols-2 mb-4">
                                    <div className="sm:text-base text-sm dark:text-white">
                                        SGAJ Total Supply
            </div>
                                    <div className="sm:text-base text-sm font-bold text-blue-400 text-right">
                                        {String(totalSupply).slice(0,11)}
            </div>
                                </div>
                                <div className="grid grid-cols-2 mb-4">
                                    <div className="sm:text-base text-sm dark:text-white">
                                        SGAJ Market Cap
            </div>
                                    <div className="sm:text-base text-sm font-bold text-blue-400 text-right">
                                        $ {String(totalSupply*price).slice(0,10)}
            </div>
                                </div>
                                <div className="grid grid-cols-2 mb-4">
                                    <div className="sm:text-base text-sm dark:text-white">
                                        SGAJ Max Supply
            </div>
                                    <div className="sm:text-base text-sm font-bold text-blue-400 text-right">
                                        100,000,000
            </div>
                                </div>
                                <div className="grid grid-cols-2 mb-4">
                                    <div className="sm:text-base text-sm dark:text-white">SGAJ/Block</div>
                                    <div className="sm:text-base text-sm font-bold text-blue-400 text-right">
                                        4
            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*
                <div className=" dark:bg-dark-700 bg-white rounded-3xl shadow-md p-6 lg:p-12 mb-6">
                    <div className="dark:text-white sm:text-3xl mb-4 sm:mb-6 text-2xl font-bold text-center">
                        Relevant Contract Addresses
    </div>
                    <div className="dark:text-white sm:text-base text-sm text-center sm:px-14">
                        The most up-to-date contract addresses can be found on our GitHub page
      here. <br className="hidden sm:block" />We also list some of the most relevant
      addresses below.
    </div>
                    <div className="mt-12 mb-14">
                        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                            <a target="_blank" href="https://bscscan.com/address/0x844fa82f1e54824655470970f7004dd90546bb28"><div className="border dark:border-dark-500 rounded-lg py-7 cursor-pointer">
                                <div className="flex items-center justify-center">
                                    <div className="text-center">
                                        <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                                            <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                                                <img alt aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDQiIGhlaWdodD0iNDQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} />
                                            </div>
                                            <img src="/_next/image?url=%2Fimages%2Ficons%2Fdop-token.svg&w=96&q=75" decoding="async" style={{ visibility: 'inherit', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} srcSet="
                /_next/image?url=%2Fimages%2Ficons%2Fdop-token.svg&w=48&q=75 1x,
                /_next/image?url=%2Fimages%2Ficons%2Fdop-token.svg&w=96&q=75 2x
              " />
                                        </div>
                                        <div className="font-bold mt-3 dark:text-white ">sGAJ Token</div>
                                    </div>
                                </div>
                            </div></a><a target="_blank" href="https://bscscan.com/address/0xff54da7caf3bc3d34664891fc8f3c9b6dea6c7a5"><div className="border dark:border-dark-500 rounded-lg py-7 cursor-pointer">
                                <div className="flex items-center justify-center">
                                    <div className="text-center">
                                        <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                                            <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                                                <img alt aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDQiIGhlaWdodD0iNDQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} />
                                            </div>
                                            <img src="/_next/image?url=%2Fimages%2Ficons%2Fdolly-address.svg&w=96&q=75" decoding="async" style={{ visibility: 'inherit', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} srcSet="
                /_next/image?url=%2Fimages%2Ficons%2Fdolly-address.svg&w=48&q=75 1x,
                /_next/image?url=%2Fimages%2Ficons%2Fdolly-address.svg&w=96&q=75 2x
              " />
                                        </div>
                                        <div className="font-bold mt-3 dark:text-white ">Dolly Token</div>
                                    </div>
                                </div>
                            </div></a><a target="_blank" href="https://bscscan.com/address/0xda0a175960007b0919dbf11a38e6ec52896bddbe"><div className="border dark:border-dark-500 rounded-lg py-7 cursor-pointer">
                                <div className="flex items-center justify-center">
                                    <div className="text-center">
                                        <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                                            <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                                                <img alt aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDQiIGhlaWdodD0iNDQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} />
                                            </div>
                                            <img src="/_next/image?url=%2Fimages%2Ficons%2Ffair-launch.svg&w=96&q=75" decoding="async" style={{ visibility: 'inherit', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} srcSet="
                /_next/image?url=%2Fimages%2Ficons%2Ffair-launch.svg&w=48&q=75 1x,
                /_next/image?url=%2Fimages%2Ficons%2Ffair-launch.svg&w=96&q=75 2x
              " />
                                        </div>
                                        <div className="font-bold mt-3 dark:text-white ">Fair Launch</div>
                                    </div>
                                </div>
                            </div></a><a target="_blank" href="https://bscscan.com/address/0x36E55406FAB7a11F3fA030fB2EEe20B60cdDb64F"><div className="border dark:border-dark-500 rounded-lg py-7 cursor-pointer">
                                <div className="flex items-center justify-center">
                                    <div className="text-center">
                                        <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                                            <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                                                <img alt aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDQiIGhlaWdodD0iNDQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} />
                                            </div>
                                            <img src="/_next/image?url=%2Fimages%2Ficons%2Fdev-icon.svg&w=96&q=75" decoding="async" style={{ visibility: 'inherit', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} srcSet="
                /_next/image?url=%2Fimages%2Ficons%2Fdev-icon.svg&w=48&q=75 1x,
                /_next/image?url=%2Fimages%2Ficons%2Fdev-icon.svg&w=96&q=75 2x
              " />
                                        </div>
                                        <div className="font-bold mt-3 dark:text-white ">Dev Address</div>
                                    </div>
                                </div>
                            </div></a><a target="_blank" href="https://bscscan.com/address/0x5f188439575F7bf21C29E8B7894D9916aBeb306D"><div className="border dark:border-dark-500 rounded-lg py-7 cursor-pointer">
                                <div className="flex items-center justify-center">
                                    <div className="text-center">
                                        <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                                            <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                                                <img alt aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDQiIGhlaWdodD0iNDQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} />
                                            </div>
                                            <img src="/_next/image?url=%2Fimages%2Ficons%2Fdeployer.svg&w=96&q=75" decoding="async" style={{ visibility: 'inherit', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} srcSet="
                /_next/image?url=%2Fimages%2Ficons%2Fdeployer.svg&w=48&q=75 1x,
                /_next/image?url=%2Fimages%2Ficons%2Fdeployer.svg&w=96&q=75 2x
              " />
                                        </div>
                                        <div className="font-bold mt-3 dark:text-white ">
                                            Deployer Address
                </div>
                                    </div>
                                </div>
                            </div></a>
                        </div>
                    </div>
                    <div className="dark:text-white sm:text-3xl mb-4 sm:mb-6 text-2xl font-bold text-center">
                        Swap Contract Addresses
    </div>
                    <div className="mt-12 mb-4">
                        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                            <a target="_blank" href="https://bscscan.com/address/0x5162f992EDF7101637446ecCcD5943A9dcC63A8A"><div className="border dark:border-dark-500 rounded-lg py-7 cursor-pointer">
                                <div className="flex items-center justify-center">
                                    <div className="text-center">
                                        <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                                            <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                                                <img alt aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDQiIGhlaWdodD0iNDQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} />
                                            </div>
                                            <img src="/_next/image?url=%2Fimages%2Ficons%2Fdop-pool.svg&w=96&q=75" decoding="async" style={{ visibility: 'inherit', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} srcSet="
                /_next/image?url=%2Fimages%2Ficons%2Fdop-pool.svg&w=48&q=75 1x,
                /_next/image?url=%2Fimages%2Ficons%2Fdop-pool.svg&w=96&q=75 2x
              " />
                                        </div>
                                        <div className="font-bold mt-3 dark:text-white ">sGAJ Pool</div>
                                    </div>
                                </div>
                            </div></a><a target="_blank" href="https://bscscan.com/address/0x449256e20ac3ed7F9AE81c2583068f7508d15c02"><div className="border dark:border-dark-500 rounded-lg py-7 cursor-pointer">
                                <div className="flex items-center justify-center">
                                    <div className="text-center">
                                        <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                                            <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                                                <img alt aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDQiIGhlaWdodD0iNDQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} />
                                            </div>
                                            <img src="/_next/image?url=%2Fimages%2Ficons%2Ftwo-pool.svg&w=96&q=75" decoding="async" style={{ visibility: 'inherit', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} srcSet="
                /_next/image?url=%2Fimages%2Ficons%2Ftwo-pool.svg&w=48&q=75 1x,
                /_next/image?url=%2Fimages%2Ficons%2Ftwo-pool.svg&w=96&q=75 2x
              " />
                                        </div>
                                        <div className="font-bold mt-3 dark:text-white ">2 Pool</div>
                                    </div>
                                </div>
                            </div></a><a target="_blank" href="https://bscscan.com/address/0x830e287ac5947B1C0DA865dfB3Afd7CdF7900464"><div className="border dark:border-dark-500 rounded-lg py-7 cursor-pointer">
                                <div className="flex items-center justify-center">
                                    <div className="text-center">
                                        <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                                            <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                                                <img alt aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDQiIGhlaWdodD0iNDQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} />
                                            </div>
                                            <img src="/_next/image?url=%2Fimages%2Ficons%2Fust-pool.svg&w=96&q=75" decoding="async" style={{ visibility: 'inherit', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} srcSet="
                /_next/image?url=%2Fimages%2Ficons%2Fust-pool.svg&w=48&q=75 1x,
                /_next/image?url=%2Fimages%2Ficons%2Fust-pool.svg&w=96&q=75 2x
              " />
                                        </div>
                                        <div className="font-bold mt-3 dark:text-white ">UST Pool</div>
                                    </div>
                                </div>
                            </div></a><a target="_blank" href="https://bscscan.com/address/0x61f864a7dFE66Cc818a4Fd0baabe845323D70454"><div className="border dark:border-dark-500 rounded-lg py-7 cursor-pointer">
                                <div className="flex items-center justify-center">
                                    <div className="text-center">
                                        <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                                            <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                                                <img alt aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDQiIGhlaWdodD0iNDQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} />
                                            </div>
                                            <img src="/_next/image?url=%2Fimages%2Ficons%2Fdolly-pool.svg&w=96&q=75" decoding="async" style={{ visibility: 'inherit', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} srcSet="
                /_next/image?url=%2Fimages%2Ficons%2Fdolly-pool.svg&w=48&q=75 1x,
                /_next/image?url=%2Fimages%2Ficons%2Fdolly-pool.svg&w=96&q=75 2x
              " />
                                        </div>
                                        <div className="font-bold mt-3 dark:text-white ">Dolly Pool</div>
                                    </div>
                                </div>
                            </div></a><a target="_blank" href="https://bscscan.com/address/0x43AbDc46B14De7c96eA46bf1Fc670ddCE9863f3e"><div className="border dark:border-dark-500 rounded-lg py-7 cursor-pointer">
                                <div className="flex items-center justify-center">
                                    <div className="text-center">
                                        <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                                            <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                                                <img alt aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDQiIGhlaWdodD0iNDQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} />
                                            </div>
                                            <img src="/_next/image?url=%2Fimages%2Ficons%2Fbtc-pool.svg&w=96&q=75" decoding="async" style={{ visibility: 'inherit', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} srcSet="
                /_next/image?url=%2Fimages%2Ficons%2Fbtc-pool.svg&w=48&q=75 1x,
                /_next/image?url=%2Fimages%2Ficons%2Fbtc-pool.svg&w=96&q=75 2x
              " />
                                        </div>
                                        <div className="font-bold mt-3 dark:text-white ">BTC Pool</div>
                                    </div>
                                </div>
                            </div></a>
                        </div>

                
                    </div>
                </div>

                */}
            </div>
            <Footer />
        </div>
    );
}

export default Info;