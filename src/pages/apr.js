const puppeteer = require('puppeteer')

async function scrapeApr(){
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.goto('https://polygaj.finance/farms')

            const [el] = page.$x('//*[@id="root"]/div/div/div[2]/div/div[2]/div[2]/div[1]/div[3]/div[2]/text()[1]');
            console.log(el)
        }
scrapeApr()

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://polygaj.finance/farms', {
    waitUntil: 'networkidle2',
  });
  await page.screenshot({ path: 'example.png' });

  await browser.close();
})();