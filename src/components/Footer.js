
import twitterIcon from '../static/media/twitter-icon.svg'
import telegramIcon from '../static/media/telegram-icon.svg'
import coinGeckoIcon from '../static/media/coin-gecko-icon.svg'
import coinMarketCap from '../static/media/coin-market-cap-icon.svg'
import announcementIcon from '../static/media/announcement-icon.svg'
import githubIcon from '../static/media/github-icon.svg'
import polygonIcon from '../static/media/polygon.svg'

function Footer() {
    return(
        <div className="container ">
        <div className="flex justify-between items-center pb-6 pt-4 gap-2">
          <div className="flex items-center">
            <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
              <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}><img alt aria-hidden="true" role="presentation" src={polygonIcon} style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} /></div><img src={polygonIcon} decoding="async" style={{ visibility: 'inherit', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} srcSet={polygonIcon} />
            </div><span className="dark:text-white ml-3 text-steel-400 text-sm sm:text-lg">Powered by Polygon</span>
          </div>
          <div className="flex gap-4"><a target="_blank" href="https://github.com/StableGaj">
            <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
              <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}><img alt aria-hidden="true" role="presentation" src={githubIcon} style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} /></div><img src={githubIcon} decoding="async" style={{ visibility: 'inherit', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
            </div>
          </a>{/* <a target="_blank" href="https://www.coingecko.com/en/coins/dopple-finance">
              <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}><img alt aria-hidden="true" role="presentation" src={coinGeckoIcon} style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} /></div><img src="./static/media/coin-gecko-icon.svg" decoding="async" style={{ visibility: 'inherit', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} srcSet="/_next/image?url=%2Fimages%2Ficons%2Fcoin-gecko-icon.svg&w=48&q=75 1x, /_next/image?url=%2Fimages%2Ficons%2Fcoin-gecko-icon.svg&w=96&q=75 2x" />
              </div>
            </a><a target="_blank" href="https://coinmarketcap.com/en/currencies/dopple-finance/">
              <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}><img alt aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzgiIGhlaWdodD0iMzgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} /></div><img src="./static/media/coin-maket-cap-icon.svg" decoding="async" style={{ visibility: 'inherit', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} srcSet="/_next/image?url=%2Fimages%2Ficons%2Fcoin-maket-cap-icon.svg&w=48&q=75 1x, /_next/image?url=%2Fimages%2Ficons%2Fcoin-maket-cap-icon.svg&w=96&q=75 2x" />
              </div>
            </a>*/}<a target="_blank" href="https://t.me/stablegajANN">
              <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}><img alt aria-hidden="true" role="presentation" src={announcementIcon} style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} /></div><img src="./static/media/announcement-icon.svg" decoding="async" style={{ visibility: 'inherit', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} srcSet={announcementIcon} />
              </div>
            </a><a target="_blank" href="https://t.me/stablegajchat">
              <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}><img alt aria-hidden="true" role="presentation" src={telegramIcon} style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} /></div><img src="./static/media/telegram-icon.svg" decoding="async" style={{ visibility: 'inherit', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} srcSet={telegramIcon} />
              </div>
            </a><a target="_blank" href="https://twitter.com/StableGaj">
              <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}><img alt aria-hidden="true" role="presentation" src={twitterIcon} style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} /></div><img src={twitterIcon} decoding="async" style={{ visibility: 'inherit', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} srcSet={twitterIcon} />
              </div>
            </a></div>
        </div>
      </div>
    )
}

export default Footer;