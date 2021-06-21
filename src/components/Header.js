/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useDarkMode from '../hooks/useDarkMode';
import logo from '../logo.svg';
import { useWallet, UseWalletProvider } from 'use-wallet'
import { getWeb3 } from '../hooks/utils.js';
import erc20 from '../Abi/erc20.json'
import axios from 'axios'

// //*[@id="root"]/div/div/div[2]/div/div[2]/div[2]/div[1]/div[3]/div[2]/text()[1]

function Header(props) {
    const [colorTheme, setTheme] = useDarkMode();
    const wallet = useWallet()
    const bal = wallet.balance / 10**18;
    const bala = bal.toString()
    const [balance, setBalance] = useState()
    const [web3, setWeb3] = useState(undefined);
    const [accounts, setAccounts] = useState(undefined);
    const [price, setPrice] = useState(0);
    // const [sgajBalInLP, setSgajBalInLP] = useState(undefined)
    // const [usdcBalinLP, setUsdcBalInLP] = useState(undefined)
  useEffect(() => {
    const init = async () => {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
    //   const networkId = await web3.eth.net.getId();
    //   const usdc = new web3.eth.Contract(
    //     erc20,
    //     '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
    //   );
    //   const gaj = new web3.eth.Contract(
    //     erc20,
    //     '0x94c7d657f1c8Be06A4Dc009D2d475Bb559d858cb',
    //   );
        const result = await axios.get(`https://api.covalenthq.com/v1/137/address/0x7116b32dab15c8f3806d39f9623fc56dcdf33d68/balances_v2/?&key=ckey_07102a0276534067a2bf637a68f`)
            // const data = result.data
        const sgajBalInLP = result.data.data.items[0].balance
        const usdcBalinLP = result.data.data.items[1].balance
          
    // console.log(price)
    // const usdcBalinLP = await usdc.methods
    //     .balanceOf('0x7116b32dab15c8f3806d39f9623fc56dcdf33d68')
    //     .call();
    var startCheck = true;
    var int = 0;
    const accountDetails = await axios.get(`https://api.covalenthq.com/v1/137/address/${accounts[0]}/balances_v2/?&key=ckey_07102a0276534067a2bf637a68f`)
    console.log(accountDetails.data.data)
        while (startCheck == true) {
            if (String(accountDetails.data.data.items[int].contract_name) == "StableGaj Token") {
                startCheck = false;
                setBalance(accountDetails.data.data.items[int].balance/10**18)
            }
            else {
                startCheck=true;
                int = int+1;
            }
        }
    // const sgajBalInLP = await gaj.methods
    //     .balanceOf('0x7116b32dab15c8f3806d39f9623fc56dcdf33d68')
    //     .call();
    
    const usdcBalance = usdcBalinLP / 10**6;
    const sgajBalance = sgajBalInLP / 10**18;
    // const gajBalance = sgajBal / 10**18;
    const price = usdcBalance/sgajBalance;
    console.log(usdcBalance)
      setWeb3(web3);
      setAccounts(accounts[0]);
      setPrice(price)
    }
    init();
    window.ethereum.on('accountsChanged', accounts => {
      setAccounts(accounts);
    });
  }, []);
    
    return (
        <div className="container">
            <div className="py-5 mb-2 flex justify-between items-center relative z-10 sm:px-0 px-2"><Link to="/">
                <div className="flex items-center cursor-pointer">
                    <div>
                        <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                            <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}><img alt aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} /></div><img src={logo} decoding="async" style={{ visibility: 'inherit', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
                        </div>
                    </div>
                    <div className="dark:text-white sm:text-4xl text-2xl font-bold text-gray-700 ml-4">StableGaj</div>
                </div>
            </Link>
            {props.inApp
                    ?
                <div className="flex items-right">
                    <ul className="navbarList">
                        <li className={props.active=="Swap"?'active':''}><a href='https://stablegaj.finance/'>Swap</a></li>
                        <li className={props.active=="Deposit"?'active':''}><a href='https://stablegaj.finance/Deposit'>Deposit</a></li>
                        <li className={props.active=="Withdraw"?'active':''}><a href='https://stablegaj.finance/Withdraw'>Withdraw</a></li>
                        <li className={props.active=="Stake"?'active':''}><a href='https://stablegaj.finance/Stake'>Farm</a></li>
                        <li className={props.active=="Info"?'active':''}><a href='https://stablegaj.finance/Info'>Info</a></li>
                        <li className={props.active=="Info"?'active':''}><a target='_blank' href='https://docs.stablegaj.finance'>Docs</a></li>
                    </ul>
                </div>
                :''}
                {props.inApp
                    ?
                    <div className="flex justify-end">
                        <div class="dark:bg-dark-700 dark:text-white bg-white flex items-center bg-steel-100 text-steel-400 rounded-lg p-1 pl-3"><div class="grid grid-cols-1"><div class="text-steel-400 dark:text-white text-sm font-bold"><span>{String(balance).slice(0,10)}</span><span class="ml-1 mr-3">SGAJ</span></div><div class="text-xs text-blue-400">≈ $ {String(balance*price).slice(0,9)}</div></div><div><button class="bg-white text-blue-500 active:bg-pink-600 font-bold uppercase text-xs px-3 pr-2 sm:pr-3 py-1 rounded outline-none focus:outline-none items-center justify-center flex dark:text-white dark:bg-dark-800" type="button"><div class="py-1">${String(price).slice(0,5)}</div></button></div></div>
                        
                        <div className="mobile-menu-button mr-3 w-10 sm:px-2 py-2 ml-2 dark:bg-dark-700 bg-white rounded-lg cursor-pointer dark:bg-dark-700 dark:border-0 sm:border-0 flex justify-center items-center">
                            <div onClick={() => setTheme(colorTheme)} style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                                <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }} >


                                </div>

                                {colorTheme === "light" ?
                                    <svg class="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
                                    :
                                    <svg class="w-6 h-6" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                                }
                            </div>
                        </div>

                    </div> :
                    <div className="flex justify-end">
                        <div className="mobile-menu-button mr-3 w-10 sm:px-2 py-2 ml-2 dark:bg-dark-700 bg-white rounded-lg cursor-pointer dark:bg-dark-700 dark:border-0 sm:border-0 flex justify-center items-center">
                            <div onClick={() => setTheme(colorTheme)} style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                                <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }} >


                                </div>

                                {colorTheme === "light" ?
                                    <svg class="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
                                    :
                                    <svg class="w-6 h-6" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                                }
                            </div>
                        </div>
                        {/* <div className="flex items-center"><Link to="/Swap"><button className="focus:outline-none  px-8 py-2 text-white flex items-center rounded-lg shadow-sm bg-gradient-to-r from-blue-400 to-green-300" >DApp Coming Soon...</button></Link></div> */}
                    </div>
                }
            </div>
        </div>
    );
}

export default Header;