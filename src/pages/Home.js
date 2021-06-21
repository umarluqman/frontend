
import { Link } from "react-router-dom";
import logo from '../logo.svg';
import banner from '../static/media/banner1.svg';
import tvlDarkIcon from '../static/media/tvl-dark-icon.svg';
import tradingDarkIcon from '../static/media/trading-dark-icon.svg';
import marketCapDarkIcon from '../static/media/market-cap-dark-icon.svg';
import bigLogo from '../logo.svg';
import twitterBlueIcon from '../static/media/blue-twitter-icon.svg'
import telegramBlueIcon from '../static/media/blue-telegram-icon.svg'

import dop from '../static/media/dop.svg'
import dopbusd from '../static/media/sgaj-usdc.svg'
import busdusdt from '../static/media/busd-usdt.svg'

import bscIcon from '../static/media/bsc-icon.svg'
import twitterIcon from '../static/media/twitter-icon.svg'
import telegramIcon from '../static/media/telegram-icon.svg'
import coinGeckoIcon from '../static/media/coin-gecko-icon.svg'
import coinMarketCap from '../static/media/coin-market-cap-icon.svg'
import githubIcon from '../static/media/github-icon.svg'
import announcementIcon from '../static/media/announcement-icon.svg'
import polygonIcon from '../static/media/polygon.svg'
import Footer from '../components/Footer';
import Header from '../components/Header';

function Home() {

    return (
        <div id="__next">
            <div className="main-nav container">
                <div className="py-3 pb-0 sm:pb-5 sm:py-5 sm:mb-2 flex justify-between items-center"><Link href="/">
                    <div className="flex items-center cursor-pointer">
                        <div className="lg:flex hidden">
                            <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                                <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}><img alt aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} /></div><img src={logo} style={{ position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
                            </div>
                        </div>
                        <div className="lg:hidden flex">
                            <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                                <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}><img alt aria-hidden="true" role="presentation" src={logo} style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} /></div><img src={logo} decoding="async" style={{ visibility: 'hidden', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
                            </div>
                        </div>
                        <div className="lg:text-4xl sm:text-2xl text-xl font-bold dark:text-white text-gray-700 ml-2 sm:ml-4">StableGaj</div>
                    </div>
                </Link>
                    <div className="mt-2 flex">

                        <div className="mobile-menu-button  w-10 sm:px-2 py-2 ml-2 dark:bg-dark-700 bg-white rounded-lg cursor-pointer dark:bg-dark-700 dark:border-0 sm:border-0 flex justify-center items-center">
                            <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                                <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}><img alt aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} /></div>

                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>

                            </div>
                        </div>
                        <div className="dark:bg-dark-700 dark:text-white mobile-menu-button hidden w-10 sm:w-auto px-2 justify-center sm:px-2 py-2 items-center ml-4 bg-blue-200 rounded-lg cursor-pointer ">
                            <svg aria-hidden="true" role="img" className="octicon octicon-three-bars" viewBox="0 0 16 16" width={20} height={20} fill="currentColor" style={{ display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom' }}>
                                <path fillRule="evenodd" d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z">
                                </path>
                            </svg></div>
                    </div>
                </div>
                <div className="sm:hidden flex my-4 justify-between"><a target="_blank" href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x844fa82f1e54824655470970f7004dd90546bb28">
                    <div className="px-4 py-2 text-white flex items-center rounded-lg shadow-sm bg-gradient-to-r from-blue-400 to-green-300 mr-2">
                        <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                            <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}><img alt aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} /></div><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" style={{ visibility: 'hidden', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
                        </div>
                        <div className="ml-2 text-sm">$2.2065</div>
                    </div>
                </a>
                    <div className="bg-white flex items-center bg-steel-100 dark:text-white dark:bg-dark-700 text-steel-400 rounded-lg p-1 pl-3">
                        <div className="grid grid-cols-1">
                            <div className="text-steel-400 text-sm font-bold dark:text-white"><span>0.00</span><span className="ml-1 mr-3">sGAJ</span></div>
                            <div className="text-xs text-blue-400">≈ $0.00</div>
                        </div>
                        <div><button className="bg-white text-blue-500 active:bg-pink-600 font-bold uppercase text-xs px-3 pr-2 sm:pr-3 py-1 rounded outline-none focus:outline-none items-center justify-center flex dark:text-white dark:bg-dark-800" type="button">
                            <div className="py-1">Connect Wallet</div>
                        </button></div>
                    </div>
                </div>
            </div>

            <div className=" mobile-menu-layer hidden absolute h-full w-full bg-black opacity-60" />

            <div className="main-container">
                <div className="absolute-panel absolute top-0 left-0">
                    <Header inApp={false}/>
                    <div className="w-full h-full flex items-center top-0 justify-center py-28 sm:py-28 mb-8 sm:px-0 px-4">
                        <div className="text-3xl sm:text-5xl font-bold text-center">
                            <div className="dark:text-white"><span className="text-blue-400">Stablecoin </span> DeFi Ecosystem on Polygon Network</div>
                            <div className="dark:text-steel-300 text-lg font-normal text-steel-400 my-6">Swap your stablecoins at the best
        rate. Stake your stablecoins to earn high yield.</div>
                            <div className="flex gap-4 text-sm font-bold justify-center my-8"><Link to="/Swap"><button className="focus:outline-none bg-blue-400 border-2 border-blue-400 shadow-sm rounded-md px-8 py-2 text-white">DApp Coming Soon...</button></Link><a target="_blank" href="/"><button className="dark:bg-dark-700 dark:border-dark-700 dark:border-2 focus:outline-none ml-2 font-bold bg-white border-2 border-white shadow-sm rounded-md px-8 py-2 text-blue-400">Invest in PolyGaj</button></a></div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="sm:px-0 px-4">
                            <div className="grid sm:grid-cols-3 gap-3">
                                <div className="dark:bg-dark-700 flex justify-between bg-white p-6 rounded-lg shadow-sm">
                                    <div>
                                        <div className="text-sm mb-2 dark:text-white">Total Value Locked</div>
                                        <div className="sm:text-5xl text-3xl text-blue-400 font-bold">TBA</div>
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                                            <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}><img alt aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzgiIGhlaWdodD0iMzgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} /></div><img src={tvlDarkIcon} decoding="async" style={{ visibility: 'inherit', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="dark:bg-dark-700 flex justify-between bg-white p-6 rounded-lg shadow-sm">
                                    <div>
                                        <div className="text-sm mb-2 dark:text-white">Total Trading Volume</div>
                                        <div className="sm:text-5xl text-3xl text-blue-400 font-bold">TBA</div>
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                                            <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}><img alt aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzgiIGhlaWdodD0iMzgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} /></div><img src={tradingDarkIcon} decoding="async" style={{ visibility: 'inherit', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="dark:bg-dark-700 flex justify-between bg-white p-6 rounded-lg shadow-sm">
                                    <div>
                                        <div className="text-sm mb-2 dark:text-white">sGAJ Market Cap</div>
                                        <div className="sm:text-5xl text-3xl text-blue-400 font-bold">TBA</div>
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                                            <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}><img alt aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzgiIGhlaWdodD0iMzgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} /></div><img src={marketCapDarkIcon} decoding="async" style={{ visibility: 'inherit', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dark:bg-dark-800 w-full bg-white mt-12">
                        <div className="container py-10">
                            <div className="sm:grid grid-cols-2">
                                <div className="w-full p-8">
                                    <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                                        <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}><img alt aria-hidden="true" role="presentation" src={banner} style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} /></div><img src={banner} style={{ position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
                                    </div>
                                </div>
                                <div className="flex items-center justify-center p-2 px-4 mb-8 sm:mb-0">
                                    <div>
                                        <div className="text-3xl text-blue-300">Protocol</div>
                                        <div className="dark:text-white text-steel-400 text-xl sm:text-3xl py-4">Stablecoin Swap Algorithm</div>
                                        <div className="text-steel-300 text-lg leading-8">Designed for efficiently trading stablecoins and pegged
              assets on the Polygon (prev Matic).</div>
                                        <div className="flex items-center mt-5"><Link to="/Swap"><button className="focus:outline-none  px-8 py-2 text-white flex items-center rounded-lg shadow-sm bg-gradient-to-r from-blue-400 to-green-300">DApp Coming Soon...</button></Link></div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid sm:grid-cols-2">
                                <div className="flex items-center justify-center px-4">
                                    <div className="sm:mb-24">
                                        <div className="text-3xl text-blue-300">Farm</div>
                                        <div className="dark:text-white text-steel-400  text-xl sm:text-3xl py-4 leading-10">Earn high yield on
              your stablecoins and liquidity</div>
                                        <div className="text-steel-300 text-lg leading-8">Liquidity Providers earn fees in stablecoin currency for
                                        every swap made through the underlying liquidity pools. Liquidity Providers also receive LP tokens,
              which can be staked to earn high yields.</div>
                                    </div>
                                </div>
                                <div className="p-2 px-4">
                                    <div className="dark:text-white dark:bg-dark-700 dark:border-dark-700 border shadow-lg flex justify-between items-center px-6 py-3 my-4 rounded-lg">
                                        <div className="flex">
                                            <div className="my-2">
                                                <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                                                    <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}><img alt aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMzQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} /></div><img src={dop} decoding="async" style={{ visibility: 'inherit', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
                                                </div>
                                            </div>
                                            <div className="ml-3 flex items-center">sGAJ</div>
                                        </div>
                                        {/* <div>
                    <div className="text-green-500">30%</div>
                    <div className="steel-300 text-right">APR</div>
                  </div> */}
                                    </div>
                                    <div className="dark:text-white dark:bg-dark-700 dark:border-dark-700 border shadow-lg flex justify-between items-center px-6 py-3 my-4 rounded-lg">
                                        <div className="flex">
                                            <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                                                <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}><img alt aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} /></div><img src={dopbusd} decoding="async" style={{ visibility: 'inherit', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
                                            </div>
                                            <div className="ml-3 flex items-center">sGAJ-USDC LPs</div>
                                        </div>
                                        {/* <div>
                    <div className="text-green-500">30%</div>
                    <div className="steel-300 text-right">APR</div>
                  </div> */}
                                    </div>
                                    <div className="dark:text-white dark:bg-dark-700 dark:border-dark-700 border shadow-lg flex justify-between items-center px-6 py-3 my-4 rounded-lg">
                                        <div className="flex">
                                            <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                                                <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}><img alt aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} /></div><img src={busdusdt} decoding="async" style={{ visibility: 'inherit', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
                                            </div>
                                            <div className="ml-3 flex items-center">3StableGaj LP</div>
                                        </div>
                                        {/* <div>
                    <div className="text-green-500">30%</div>
                    <div className="steel-300 text-right">APR</div>
                  </div> */}
                                    </div>
                                    <div className="w-full flex items-center justify-center mt-10"><Link to="/Stake"><button className="rounded focus:outline-none bg-blue-400 shadow-sm rounded-sm text-center px-2 sm:px-8 py-2 text-white">View More</button></Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full w-gradient-blue">
                        <div className="container pb-10">
                            <div className="Roadmap ">
                                <div className="dark:text-white text-center font-bold text-4xl text-steel-400 pb-20 pt-30">Roadmap</div>
                                <div className="hidden sm:block timeline">
                                    <div className="vertical_alternating js-focus-visible focus-visible css-1fpskrz e1gmwefz5">
                                        <div className="vertical_alternating timeline-main-wrapper css-dya0wb e1gmwefz4" id="timeline-main-wrapper">
                                            <div data-testid="tree-main" role="list" className="css-1ls5r8i eecm4uk5">
                                                <div className="left vertical-item-row visible css-gfz2d8 eecm4uk4" data-testid="vertical-item-row" role="listitem">
                                                    <div className="left css-1hwfihz eecm4uk0" mode="VERTICAL_ALTERNATING">
                                                        <div className="timeline-item-title active css-owb0so ergoa4r0" />
                                                    </div>
                                                    <div className="card-content-wrapper visible left css-1i6vmsn eecm4uk2 cont left">
                                                        <section className="timeline-card-content active css-17jsszw emk90bu9 " mode="VERTICAL_ALTERNATING" tabIndex={0}>
                                                            <header className="css-1d3w5wq emk90bu8">
                                                                <p className="card-sub-title css-9b5j9l emk90bu7" style={{ color: '#30AEF6', fontWeight: '600' }}>Q2</p>
                                                            </header>
                                                            <div className="show-less card-description css-19nhye3 emk90bu3" aria-expanded="false">
                                                                <p className=" css-qz9nci emk90bu5" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                                                    - Audit
                                <br />- Launch of StableGaj Finance
                                <br />- Launch of StableGaj Token
                                <br />- Staking Pools for 3StableGaj LP
                                <br />- Staking Pool for $sGAJ
                                <br />- List on Coingecko & CoinMarketCap
                                <br />- Launch more Pools</p>
                                                            </div><span role="button" className="show-more css-1p7fqii emk90bu2" tabIndex={0}><span>read
                          more</span><span className="css-1j5byos emk90bu0"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right">
                                                                    <polyline points="9 18 15 12 9 6" />
                                                                </svg></span></span>
                                                        </section>
                                                    </div>
                                                    <div className="left css-14wnn3j eecm4uk3" data-testid="tree-leaf" role="button">
                                                        <div className="left timeline-vertical-circle css-179t5g5 eecm4uk1" role="button" data-testid="tree-leaf-click" aria-label="select timeline">
                                                            <div className="active css-18q7fnv e5foh872" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="right vertical-item-row visible css-gfz2d8 eecm4uk4" data-testid="vertical-item-row" role="listitem">
                                                    <div className="right css-1hwfihz eecm4uk0" mode="VERTICAL_ALTERNATING">
                                                        <div className="timeline-item-title css-owb0so ergoa4r0" />
                                                    </div>
                                                    <div className="card-content-wrapper visible right css-1i6vmsn eecm4uk2 cont right">
                                                        <section className="timeline-card-content  css-17jsszw emk90bu9" mode="VERTICAL_ALTERNATING" tabIndex={0}>
                                                            <header className="css-1d3w5wq emk90bu8">
                                                                <p className="card-sub-title css-9b5j9l emk90bu7" style={{ color: '#30AEF6', fontWeight: '600' }}>Q3</p>
                                                            </header>
                                                            <div className="show-less card-description css-19nhye3 emk90bu3" aria-expanded="false">
                                                                <p className=" css-qz9nci emk90bu5" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                                                    - Launch of UST pool
                                <br />- CEX Listings
                                <br />- Partner with lending platforms to use $sGAJ as collateral
                                <br />- Expanding $sGAJ to more DEXs
                                <br />- Additional Audits
                                <br />- Add support for additional web and mobile wallets
                                <br />- Expand StableGaj to more chains
                              </p>
                                                            </div><span role="button" className="show-more css-1p7fqii emk90bu2" tabIndex={0}><span>read
                          more</span><span className="css-1j5byos emk90bu0"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right">
                                                                    <polyline points="9 18 15 12 9 6" />
                                                                </svg></span></span>
                                                        </section>
                                                    </div>
                                                    <div className="right css-14wnn3j eecm4uk3" data-testid="tree-leaf" role="button">
                                                        <div className="right timeline-vertical-circle css-179t5g5 eecm4uk1" role="button" data-testid="tree-leaf-click" aria-label="select timeline">
                                                            <div className=" css-18q7fnv e5foh872" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="left vertical-item-row visible css-gfz2d8 eecm4uk4" data-testid="vertical-item-row" role="listitem">
                                                    <div className="left css-1hwfihz eecm4uk0" mode="VERTICAL_ALTERNATING">
                                                        <div className="timeline-item-title css-owb0so ergoa4r0" />
                                                    </div>
                                                    <div className="card-content-wrapper visible left css-1i6vmsn eecm4uk2 cont left">
                                                        <section className="timeline-card-content  css-17jsszw emk90bu9" mode="VERTICAL_ALTERNATING" tabIndex={0}>
                                                            <header className="css-1d3w5wq emk90bu8">
                                                                <p className="card-sub-title css-9b5j9l emk90bu7" style={{ color: '#30AEF6', fontWeight: '600' }}>Q4</p>
                                                            </header>
                                                            <div className="show-less card-description css-19nhye3 emk90bu3" aria-expanded="false">
                                                                <p className=" css-qz9nci emk90bu5" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                                                    - Asset-Backed Stablecoin $sgUSD
                                <br />- Auto-Compounding
                                <br />- Launching additional pools
                                <br />- User Dashboard
                                <br />- Partner with protocols to adopt $sgUSD
                              </p>
                                                            </div><span role="button" className="show-more css-1p7fqii emk90bu2" tabIndex={0}><span>read
                          more</span><span className="css-1j5byos emk90bu0"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right">
                                                                    <polyline points="9 18 15 12 9 6" />
                                                                </svg></span></span>
                                                        </section>
                                                    </div>
                                                    <div className="left css-14wnn3j eecm4uk3" data-testid="tree-leaf" role="button">
                                                        <div className="left timeline-vertical-circle css-179t5g5 eecm4uk1" role="button" data-testid="tree-leaf-click" aria-label="select timeline">
                                                            <div className=" css-18q7fnv e5foh872" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="right vertical-item-row visible css-gfz2d8 eecm4uk4" data-testid="vertical-item-row" role="listitem">
                                                    <div className="right css-1hwfihz eecm4uk0" mode="VERTICAL_ALTERNATING">
                                                        <div className="timeline-item-title css-owb0so ergoa4r0" />
                                                    </div>

                                                    <div className="right css-14wnn3j eecm4uk3" data-testid="tree-leaf" role="button">
                                                        <div className="right timeline-vertical-circle css-179t5g5 eecm4uk1" role="button" data-testid="tree-leaf-click" aria-label="select timeline">
                                                            <div className=" css-18q7fnv e5foh872" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="react-chrono-timeline" className="css-i5uwaq e1gmwefz0" />
                                    </div>
                                </div>
                                <div className="block sm:hidden">
                                    <div className="vertical js-focus-visible focus-visible css-1fpskrz e1gmwefz5">
                                        <div className="vertical timeline-main-wrapper css-dya0wb e1gmwefz4" id="timeline-main-wrapper">
                                            <div data-testid="tree-main" role="list" className="css-1ls5r8i eecm4uk5">
                                                <div className="right vertical-item-row visible css-gfz2d8 eecm4uk4" data-testid="vertical-item-row" role="listitem">
                                                    <div className="right css-12jo0cq eecm4uk0" mode="VERTICAL">
                                                        <div className="timeline-item-title active css-owb0so ergoa4r0" />
                                                    </div>
                                                    <div className="card-content-wrapper visible right css-lh0iwl eecm4uk2">
                                                        <section className="timeline-card-content active css-1x0hj9y emk90bu9" mode="VERTICAL" tabIndex={0}>
                                                            <header className="css-1d3w5wq emk90bu8">
                                                                <p className="card-sub-title css-9b5j9l emk90bu7" style={{ color: '#30AEF6', fontWeight: '600' }}>Q2</p>
                                                            </header>
                                                            <div className="show-less card-description css-19nhye3 emk90bu3" aria-expanded="false">
                                                                <p className=" css-qz9nci emk90bu5" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                                                    - Audit
                                <br />- Launch of StableGaj Finance
                                <br />- Launch of StableGaj Token
                                <br />- Staking Pools for 3StableGaj LP
                                <br />- Staking Pool for $sGAJ
                                <br />- List on Coingecko & CoinMarketCap
                                <br />- Launch more Pools</p>
                                                            </div><span role="button" className="show-more css-1p7fqii emk90bu2" tabIndex={0}><span>read
                          more</span><span className="css-1j5byos emk90bu0"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right">
                                                                    <polyline points="9 18 15 12 9 6" />
                                                                </svg></span></span>
                                                        </section>
                                                    </div>
                                                    <div className="right css-14wnn3j eecm4uk3" data-testid="tree-leaf" role="button">
                                                        <div className="right timeline-vertical-circle css-179t5g5 eecm4uk1" role="button" data-testid="tree-leaf-click" aria-label="select timeline">
                                                            <div className="active css-18q7fnv e5foh872" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="right vertical-item-row visible css-gfz2d8 eecm4uk4" data-testid="vertical-item-row" role="listitem">
                                                    <div className="right css-12jo0cq eecm4uk0" mode="VERTICAL">
                                                        <div className="timeline-item-title css-owb0so ergoa4r0" />
                                                    </div>
                                                    <div className="card-content-wrapper visible right css-lh0iwl eecm4uk2">
                                                        <section className="timeline-card-content  css-1x0hj9y emk90bu9" mode="VERTICAL" tabIndex={0}>
                                                            <header className="css-1d3w5wq emk90bu8">
                                                                <p className="card-sub-title css-9b5j9l emk90bu7" style={{ color: '#30AEF6', fontWeight: '600' }}>Q3</p>
                                                            </header>
                                                            <div className="show-less card-description css-19nhye3 emk90bu3" aria-expanded="false">
                                                                <p className=" css-qz9nci emk90bu5" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                                                    - Launch of UST pool
                                <br />- CEX Listings
                                <br />- Partner with lending platforms to use $sGAJ as collateral
                                <br />- Expanding $sGAJ to more DEXs
                                <br />- Additional Audits
                                <br />- Add support for additional web and mobile wallets
                                <br />- Expand StableGaj to more chains</p>
                                                            </div><span role="button" className="show-more css-1p7fqii emk90bu2" tabIndex={0}><span>read
                          more</span><span className="css-1j5byos emk90bu0"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right">
                                                                    <polyline points="9 18 15 12 9 6" />
                                                                </svg></span></span>
                                                        </section>
                                                    </div>
                                                    <div className="right css-14wnn3j eecm4uk3" data-testid="tree-leaf" role="button">
                                                        <div className="right timeline-vertical-circle css-179t5g5 eecm4uk1" role="button" data-testid="tree-leaf-click" aria-label="select timeline">
                                                            <div className=" css-18q7fnv e5foh872" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="right vertical-item-row visible css-gfz2d8 eecm4uk4" data-testid="vertical-item-row" role="listitem">
                                                    <div className="right css-12jo0cq eecm4uk0" mode="VERTICAL">
                                                        <div className="timeline-item-title css-owb0so ergoa4r0" />
                                                    </div>
                                                    <div className="card-content-wrapper visible right css-lh0iwl eecm4uk2">
                                                        <section className="timeline-card-content  css-1x0hj9y emk90bu9" mode="VERTICAL" tabIndex={0}>
                                                            <header className="css-1d3w5wq emk90bu8">
                                                                <p className="card-sub-title css-9b5j9l emk90bu7" style={{ color: '#30AEF6', fontWeight: '600' }}>Q4</p>
                                                            </header>
                                                            <div className="show-less card-description css-19nhye3 emk90bu3" aria-expanded="false">
                                                                <p className=" css-qz9nci emk90bu5" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                                                    - Asset-Backed Stablecoin $sgUSD
                                <br />- Auto-Compounding
                                <br />- Launching additional pools
                                <br />- User Dashboard
                                <br />- Partner with protocols to adopt $sgUSD</p>
                                                            </div><span role="button" className="show-more css-1p7fqii emk90bu2" tabIndex={0}><span>read
                          more</span><span className="css-1j5byos emk90bu0"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right">
                                                                    <polyline points="9 18 15 12 9 6" />
                                                                </svg></span></span>
                                                        </section>
                                                    </div>
                                                    <div className="right css-14wnn3j eecm4uk3" data-testid="tree-leaf" role="button">
                                                        <div className="right timeline-vertical-circle css-179t5g5 eecm4uk1" role="button" data-testid="tree-leaf-click" aria-label="select timeline">
                                                            <div className=" css-18q7fnv e5foh872" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="right vertical-item-row visible css-gfz2d8 eecm4uk4" data-testid="vertical-item-row" role="listitem">
                                                    <div className="right css-12jo0cq eecm4uk0" mode="VERTICAL">
                                                        <div className="timeline-item-title css-owb0so ergoa4r0" />
                                                    </div>

                                                    <div className="right css-14wnn3j eecm4uk3" data-testid="tree-leaf" role="button">
                                                        <div className="right timeline-vertical-circle css-179t5g5 eecm4uk1" role="button" data-testid="tree-leaf-click" aria-label="select timeline">
                                                            <div className=" css-18q7fnv e5foh872" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="react-chrono-timeline" className="css-i5uwaq e1gmwefz0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dark:bg-dark-800 w-full bg-white pt-8">
                        <div className="container py-8">
                            <div className="w-full grid grid-cols-1 items-center justify-center rounded-lg shadow-sm bg-gradient-to-r from-blue-400 to-green-300 p-14">
                                <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                                    <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}><img alt aria-hidden="true" role="presentation" src={bigLogo} style={{ height: '120px', maxWidth: '100%', display: 'block', margin: '0 auto', border: 'none', padding: 0 }} /></div><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" style={{ visibility: 'hidden', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
                                </div>
                                <div className="text-white text-2xl my-8 text-center">Get the most out of your stablecoins</div>
                                <div className="flex items-center justify-center"><Link to="/Swap"><button className="rounded focus:outline-none bg-blue-400 shadow-sm rounded-sm text-center px-2 sm:px-8 py-2 text-white">DApp Coming Soon...</button></Link></div>
                            </div>
                            <div className="dark:text-white text-center font-bold text-steel-400 text-5xl  mt-16 mb-12">Join our community
      </div>
                            <div className="grid sm:grid-cols-2 my-4 gap-6 mb-12"><a href="https://twitter.com/" target="_blank">
                                <div className="dark:bg-dark-700 bg-white shadow rounded-lg p-6 py-12 text-center">
                                    <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                                        <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}><img alt aria-hidden="true" role="presentation" src={twitterBlueIcon} style={{ maxWidth: '80px', display: 'block', margin: 0, border: 'none', padding: 0 }} /></div><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" style={{ visibility: 'hidden', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
                                    </div>
                                    <div className="dark:text-white font-bold text-steel-400 my-2 text-xl">Twitter</div>
                                    <div className="dark:text-white text-steel-400">StableGaj #Matic</div>
                                </div>
                            </a> <a href="https://t.me/" target="_blank">
                                    <div className="dark:bg-dark-700 shadow rounded-lg p-6 py-12 text-center">
                                        <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                                            <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}><img alt aria-hidden="true" role="presentation" src={telegramBlueIcon} style={{ maxWidth: '80px', display: 'block', margin: 0, border: 'none', padding: 0 }} /></div><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" style={{ visibility: 'hidden', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
                                        </div>
                                        <div className="dark:text-white font-bold text-steel-400 my-2 text-xl">Telegram</div>
                                        <div className="dark:text-white text-steel-400">StableGaj Community</div>
                                    </div>
                                </a> </div>
                        </div>
                        <div className="container ">
                            <div className="flex justify-between items-center pb-6 pt-4 gap-2">
                                <div className="flex items-center">
                                    <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                                        <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}><img alt aria-hidden="true" role="presentation" src={polygonIcon} style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} /></div><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" style={{ visibility: 'hidden', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
                                    </div><span className="dark:text-white ml-3 text-steel-400 text-sm sm:text-lg">Built on Polygon (prev Matic)</span>
                                </div>
                                <div className="flex gap-4"><a target="_blank" href="https://github.com/StableGaj">
                                    <div style={{ display: 'inline-block', maxWidth: '38px', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                                        <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}><img alt aria-hidden="true" role="presentation" src={githubIcon} style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} /></div><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" style={{ visibility: 'hidden', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
                                    </div>
                                </a>
                                    {/* <a target="_blank" href="https://www.coingecko.com/en/coins/dopple-finance">
                  <div style={{ display: 'inline-block', maxWidth: '38px', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                    <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}><img alt aria-hidden="true" role="presentation" src={coinGeckoIcon} style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} /></div><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" style={{ visibility: 'hidden', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
                  </div>
                </a><a target="_blank" href="https://coinmarketcap.com/en/currencies/dopple-finance/">
                  <div style={{ display: 'inline-block', maxWidth: '38px', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                    <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}><img alt aria-hidden="true" role="presentation" src={coinMarketCap} style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} /></div><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" style={{ visibility: 'hidden', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
                  </div>
                </a>*/} <a target="_blank" href="https://t.me/">
                                        <div style={{ display: 'inline-block', maxWidth: '38px', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                                            <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}><img alt aria-hidden="true" role="presentation" src={announcementIcon} style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} /></div><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" style={{ visibility: 'hidden', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
                                        </div>
                                    </a><a target="_blank" href="https://t.me/">
                                        <div style={{ display: 'inline-block', maxWidth: '38px', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                                            <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}><img alt aria-hidden="true" role="presentation" src={telegramIcon} style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} /></div><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" style={{ visibility: 'hidden', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
                                        </div>
                                    </a><a target="_blank" href="https://twitter.com/">
                                        <div style={{ display: 'inline-block', maxWidth: '38px', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                                            <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}><img alt aria-hidden="true" role="presentation" src={twitterIcon} style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} /></div><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" style={{ visibility: 'hidden', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
                                        </div>
                                    </a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;