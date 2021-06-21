import {useState, useEffect} from 'react'
import {getWeb3} from '../../hooks/utils'
import erc20 from '../../Abi/erc20.json'
import masterchef from '../../Abi/masterchef.json'

function TokenToggle(props) {
    const [isActive, setIsActive] = useState(false);
    const [web3, setWeb3] = useState(undefined);
    const [accounts, setAccounts] = useState(undefined);
    const [stablegajLPContract, setStablegajLPContract] = useState(0)
    const [approvedStableGajLp, setApprovedStableGajLp] = useState(0)

    useEffect(() => {
        const init = async () => {
          const web3 = await getWeb3();  
          const accounts = await web3.eth.getAccounts();
          setAccounts(accounts[0]);
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
    
          const Masterchef = new web3.eth.Contract(
            masterchef,
            '0xA794491C95D276DD67A6641D978618BA2598ad09'
          )
    
        const stablegajLpinMasterchef = await stablegajLP.methods
          .balanceOf('0xA794491C95D276DD67A6641D978618BA2598ad09')
          .call();
          
        const sgajBalinLP = await sgaj.methods
            .balanceOf('0x7116b32DAb15c8F3806D39f9623fC56dcdF33D68')
            .call();
        
        const sgajLPBal = await stablegajLP.methods.balanceOf(accounts[0]).call()
        
        const usdcBalInLP = await usdc.methods
            .balanceOf('0x7116b32DAb15c8F3806D39f9623fC56dcdF33D68')
            .call();
        // const sgajLPBalinMasterchef = await sga
        const sgajBal = await sgaj.methods
            .balanceOf(accounts[0])
            .call();
        const usdcBalanceInLP = usdcBalInLP / 10**6;
        const sgajBalanceInLP = sgajBalinLP / 10**18;
        const sgajBalance = sgajBal / 10**18;
        const stablegajLPBalanceInMasterchef = stablegajLpinMasterchef / 10**18;
        
        const price = usdcBalanceInLP/sgajBalanceInLP;
        // const LpApr = (price*4*15768000*100/600/stablegajLPBalanceInMasterchef)*100
        console.log(price)
        // console.log(usdcBalance)
          setWeb3(web3);
          setStablegajLPContract(stablegajLP);
        //   setPrice(price)
        //   setBalance(sgajBalance)
        //   setsgajLpTVL(stablegajLPBalanceInMasterchef)
        //   setSgajLpAPR(LpApr)
        }
        init();
        window.ethereum.on('accountsChanged', accounts => {
          setAccounts(accounts);
        });
      }, []);

      async function approve(){
          if(props.name == 'StableGaj LP'){
            const allowance = await stablegajLPContract.methods.allowance(accounts[0], '0xA794491C95D276DD67A6641D978618BA2598ad09').call()
            if (allowance >= '10000000000000000000000000'){
                setApprovedStableGajLp(true)
            } else {
                const approved = await stablegajLPContract.methods.approve('0xA794491C95D276DD67A6641D978618BA2598ad09','115792089237316195423570985008687907853269984665640564039457584007913129639935').send({from: accounts[0]});
                setApprovedStableGajLp(true)
            }
          }
      }

    return (<div className="dark:bg-dark-700 dark:border-0 border-t relative dark:border-t-dark-500">
        <div onClick={()=>setIsActive(!isActive)} className="grid grid-cols-5  sm:gap-2 cursor-pointer">
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
                                <img src={props.logo} decoding="async" style={{ visibility: 'inherit', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} srcSet={props.logo} />
                            </div>
                        </div>
                    </div>
                    <div className="text-xs sm:text-lg font-bold dark:text-white">
                        <div>
                            {props.name}<span className="undefined rounded-lg text-white bg-pink-500 px-1 sm:px-2 ml-1 sm:px-3 sm:text-base text-xs">{props.Multiplier}X</span>
                        </div>
                        <div className="font-light text-xs cursor_pointer text-blue-500 ">
                            <a target="_blank" href={props.addLiquidity}>Add {props.name}</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-1 flex items-center justify-center">
                <div className="text-center text-xs px-2 sm:text-base dark:text-white font-bold py-1 rounded-lg text-black">
                    APR <span className="sm:inline hidden">: </span>{props.APR}%
<div className="text-xs text-center text-steel-300">≈ {props.APRDaily}% daily</div>
                </div>
            </div>
            <div className="col-span-1 text-xs sm:text-base dark:text-white flex items-center justify-center">
                ${props.TVL}
</div>
            <div className="text-blue-400 font-bold text-center sm:text-left text-xs sm:text-lg flex items-center justify-center">
                0.00
</div>
        </div>
        <div className={`${isActive?'active':''} card-toggle`}>
            <div className="dark:bg-steel-500 py-3 sm:py-0 grid grid-cols-8 border-t dark:border-0 bg-gray-100 ">
                <div className="col-span-full sm:col-span-3 sm:py-6 px-3 sm:pl-6 sm:pr-3 grid grid-cols-1 sm:gap-y-1">
                    <div className="flex justify-between items-center">
                        <div className="dark:text-white font-bold text-gray-500 text-md">
                            Stake
</div>
                        <div className="text-gray-400 text-xs sm:text-sm flex">
                            <div>Balance:</div>
                            <div className="ml-1 cursor-pointer text-blue-500">0.00</div>
                        </div>
                    </div>
                    <div className>
                        <input type="number" placeholder={0} className="dark:bg-dark-400 dark:text-white focus:outline-none focus:ring focus:border-blue-200 rounded-md p-2 w-full mb-1 sm:mb-0 sm:my-3" defaultValue />
                    </div>
                    <div className="mt-1">
                        <div className="flex gap-3">
                            <button onClick={approve} type="button" className="focus:outline-none text-center py-2 mt-1 w-full border-0 rounded-md font-bold bg-blue-400 text-white">
                                Approve</button>
                                <button type="button" className="focus:outline-none text-center py-2 mt-1 w-full border-0 rounded-md font-bold bg-blue-400 text-white">
                                Deposit
</button>
                        </div>
                    </div>
                    <div className=" mt-4 text-xs dark:text-gray-400 flex items-center justify-center">
                        <span className="mr-1">You don’t have LP token yet? </span><a target="_blank" href={props.addLiquidity}><span className="text-blue-400">Add LP</span></a>
                    </div>
                </div>
                <div className="col-span-full sm:col-span-3 py-4 sm:py-6 pl-3 pr-3 grid grid-cols-1 sm:gap-y-1">
                    <div className="flex items-center justify-between">
                        <div className="dark:text-white font-bold text-gray-500 text-md">
                            Unstake
</div>
                        <div className="text-gray-400 text-xs sm:text-sm flex">
                            <div>Balance:</div>
                            <div className="ml-1 cursor-pointer text-blue-500">0.00</div>
                        </div>
                    </div>
                    <div className>
                        <input type="number" placeholder={0} className="dark:bg-dark-400  dark:text-white focus:outline-none focus:ring focus:border-blue-200 rounded-md p-2 w-full mb-1 sm:mb-0 sm:my-3" readOnly defaultValue />
                    </div>
                    <div className="mt-1">
                        <div className="flex gap-2">
                            <button type="button" className="focus:outline-none text-center py-2 mt-1 w-full rounded-md font-bold bg-blue-400 text-white">
                                Approve</button>
                                <button type="button" className="focus:outline-none text-center py-2 mt-1 w-full border-0 rounded-md font-bold bg-blue-400 text-white" >
                                Withdraw
</button>
                        </div>
                    </div>
                    <div className=" mt-4 text-xs dark:text-gray-400 flex items-center justify-center">
                        <span className="mr-1">You want remove LP token? </span><a target="_blank" href={props.addLiquidity}><span className="text-blue-400">Remove LP</span></a>
                    </div>
                </div>
                <div className="col-span-full sm:col-span-2 text-center p-5 pl-3 grid grid-cols-1 gap-y-1">
                    <div className="text-total-reward text-3xl font-bold text-blue-500 pt-4 flex justify-center items-center">
                        0.00
</div>
                    <div className="dark:text-white text-xs mb-4">(≈ $0.00)</div>
                    <button type="button" className="focus:outline-none text-center my-1  w-full py-3 sm:py-2 rounded-md bg-gradient-to-r from-blue-400 to-green-300 text-white font-bold sm:mb-10">
                        Claim
</button>
                </div>
            </div>
        </div>
    </div>)
}

export default TokenToggle;