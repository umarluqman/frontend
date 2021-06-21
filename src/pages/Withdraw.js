import Footer from "../components/Footer";
import Header from "../components/Header";

function Withdraw() {
    return (
        <div>
            <Header inApp={true} active='Withdraw' />
            <div className="container mb-12">
                <div className="flex dark:text-white text-3xl font-bold mb-6 mt-4">
                    <div className="transactionInfoItem z-50">
                        <div className="slippage text-steel-400 text-sm dark:text-white flex">
                            <span className="mr-2 flex dark:text-white text-base sm:text-3xl">Withdraw your Liquidity Pools into Stablecoins</span><span className><div className="dark:hidden flex">
                                <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                                    <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                                        <img alt aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} />
                                    </div>
                                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" style={{ visibility: 'hidden', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
                                </div>
                            </div>
                                <div className="dark:flex hidden">
                                    <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                                        <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                                            <img alt aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} />
                                        </div>
                                        <img src="/_next/image?url=%2Fimages%2Ficons%2Finfo-circle.svg&w=48&q=75" decoding="async" style={{ visibility: 'inherit', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} srcSet="
            /_next/image?url=%2Fimages%2Ficons%2Finfo-circle.svg&w=32&q=75 1x,
            /_next/image?url=%2Fimages%2Ficons%2Finfo-circle.svg&w=48&q=75 2x
          " />
                                    </div></div></span>
                        </div>
                        <div className="hidden font-base" style={{ position: 'absolute', inset: '0px auto auto 0px', margin: 0, transform: 'translate(995px, 164px)' }} data-popper-placement="bottom">
                            <div>
                                <div className="relative mx-2">
                                    <div className="bg-gray-500 text-white font-normal text-xs rounded py-2 px-4 right-0 bottom-full text-center font-base">
                                        Liquidity Providers earn fees on every swap <br />
              made through the underlying liquidity pools.<br />
              Liquidity Providers also receive LP tokens,<br />
              which can be staked in the farming pools to <br />
              earn high yields.
            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-auto sm:grid-cols-3 gap-3">
                   <a href="/Withdraw/ust-pools-lps"><div className="dark:bg-dark-700 dark:border-dark-700 pool-item bg-white rounded-lg p-8 hover:border ">
                        <div className="flex justify-center pt-2 pb-2">
                            <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                                <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                                    <img alt aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjIiIGhlaWdodD0iNjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} />
                                </div>
                                <img src="/_next/image?url=%2Fimages%2Ficons%2Fust-pool.svg&w=128&q=75" decoding="async" style={{ visibility: 'inherit', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} srcSet="
          /_next/image?url=%2Fimages%2Ficons%2Fust-pool.svg&w=64&q=75  1x,
          /_next/image?url=%2Fimages%2Ficons%2Fust-pool.svg&w=128&q=75 2x
        " />
                            </div>
                        </div>
                        <div className="text-blue-400 font-bold text-center my-6 text-xl">
                            UST LPs
        </div>
                        <div className="flex justify-between">
                            <div>
                                <div className="dark:text-white text-sm text-steel-300">APY</div>
                                <div className="dark:text-white text-lg font-bold text-steel-400">
                                    12%
            </div>
                            </div>
                            <div>
                                <div className="dark:text-white text-sm text-steel-300 text-right">
                                    Total Supply
            </div>
                                <div className="dark:text-white text-lg font-bold text-steel-400">
                                    $14,163,964
            </div>
                            </div>
                        </div>
                    </div> </a>
                </div>
                <div className="mt-8">
                    <div className>
                        <div className="bg-gradient-to-r from-blue-400 to-green-300 rounded-2xl shadow-md mb-6">
                            <div className="info-tvl-panel p-6 lg:py-8 text-white">
                                <div className="text-center">
                                    <div className="text-2xl sm:text-3xl mb-1 font-bold">
                                        Total Value Locked
            </div>
                                    <div className="text-4xl sm:text-7xl font-bold my-10">
                                        <span className="sm:mr-3 mr-0">$</span>118,430,360
            </div>
                                </div>
                                <div className="text-center">
                                    See more information on <a target="_blank" className href="https://bscscan.com/address/0x5162f992EDF7101637446ecCcD5943A9dcC63A8A#code">
                                        <u>BSCScan</u></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Withdraw;