
/* eslint-disable */
import React, { useEffect, useState } from 'react';
// import { usdcBalance } from '../hooks/usdcBalance'
import { getWeb3 } from '../../hooks/utils.js';
import erc20 from '../../Abi/erc20.json'
const BigNumber = require('bignumber.js')

function ApproveToken(props) {

    const [web3, setWeb3] = useState(undefined);
    const [accounts, setAccounts] = useState(undefined);
    const [usdcContract, setUsdcContract] = useState(undefined);
    const [fraxContract, setFraxContract] = useState(undefined);
    const [usdcBalance, setUsdcBalance] = useState(0);
    const [fraxBalance, setFraxBalance] = useState(0);
    const [daiBalance, setDaiBalance] = useState(0);
    const [usdtBalance, setUsdtBalance] = useState(0);
    const [balance, setBalance] = useState([])

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
      setUsdcBalance(usdcBalance);
      setFraxBalance(fraxBalance);
      setDaiBalance(daiBalance);
      setUsdtBalance(usdtBalance);
    }
    init();
    window.ethereum.on('accountsChanged', accounts => {
      setAccounts(accounts);
    });
  }, []);

//   async function setBalance(value) {
//       if (props.name == 'DAI'){
//         setDai(value)
//         console.log(value)
//       }
// //       else if (props.name == 'USDC') {
// //           setUsdc(value)
// //           console.log(value)
// //       }
// //       else if (props.name == 'USDT') {
// //           setUsdt(value)
// //           console.log(value)
// //       }
// //       else if (props.name == 'FRAX') {
// //           setFrax(value)
// //           console.log(value)
// //       }
    // }

    const [value, setValue] = useState(0)

    const setMaxBalance = () => {
        setValue(props.balance)
    }

    const onChangeValue = (e) => {
        setValue(e.target.value)
    }

    return (
    <div>
        <div className="overflow-hidden relative">
            <div className="flex justify-between pb-1">
                <div className="pl-1 text-sm flex">
                    <div className="dark:text-steel-300">Balance :&nbsp;</div>
                    <span className="text-blue-400 font-bold">{props.balance} {props.name}</span>
                </div>
            </div>
            <div className="pb-8 ">
                {!props.isApproved?<div className=" overflow-hidden">
                    <div className=" dark:bg-dark-600 dark:border-0 bg-white absolute w-full h-18 z-40 bg-opacity-100 rounded backdrop-filter flex items-center justify-center">
                        <button onClick={props.handleClick} type="button" className="focus:outline-none  bg-transparent text-center py-2  h-full w-full border rounded-md font-bold border-blue-500 text-blue-500">
                            <div className="flex justify-between px-2 items-center">
                                <div className="flex items-center">
                                    <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                                        <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                                            <img alt aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} />
                                        </div>
                                        <img src={props.logo} decoding="async" style={{ visibility: 'inherit', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} srcSet={props.logo} />
                                    </div>
                                    <span className="dark:text-white text-black font-base ml-2">{props.name}</span>
                                </div>
                                <span> Approve</span>
                                <div className="flex items-center invisible">
                                    <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                                        <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                                            <img alt aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} />
                                        </div>
                                        <img src={props.logo} decoding="async" style={{ visibility: 'inherit', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} srcSet={props.logo} />
                                    </div>
                                    <span className="text-black font-base ml-2">{props.name}</span>
                                </div>
                            </div>
                        </button>
                    </div>
                    <br/>
                    <br/>
                </div>:
                <div>
                <input onChange={onChangeValue} type="number" value={value} className="dark:text-white border rounded-md focus:outline-none dark:bg-dark-600 dark:border-0 bg-steel-100 p-2 pl-32 h-12 w-full" placeholder={0} defaultValue />
                <div className="flex justify-between ">
                    <div className="dark:border-0 dark:text-white dark:bg-dark-500 border rounded-md bg-white w-28 flex items-center p-2 -mt-12 z-10 relative">
                        <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                            <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                                <img alt aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} />
                            </div>
                            <img src={props.logo} decoding="async" style={{ visibility: 'inherit', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} srcSet={props.logo} />
                        </div>
                        <span className="font-bold ml-2">{props.name}</span>
                    </div>
                </div>
                <div
                className="z-10 absolute"
                style={{
                  top: 24,
                  right: 0,
                }}
              >
                <button className="focus:outline-none w-full font-bold px-3 text-white  py-3 rounded-lg shadow-sm bg-blue-400" onClick={setMaxBalance}>
                 MAX
                </button>
              </div>
            </div>}
        </div> </div>
    </div>)
}

export default ApproveToken;