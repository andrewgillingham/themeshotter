const fs = require('fs');
const puppeteer = require('puppeteer');
const sharp = require('sharp');
// console.log('TCL: url', url);
// if (!url) {
//   throw new Error('bad domain');
// }
async function shotter(url) {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/chromium-browser',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 880 * 2, height: 660 * 2 });
  await page.goto(url);
  await page.screenshot({ path: 'screenshot-large.png' });
  await browser.close();
  await sharp('screenshot-large.png')
    .resize({ width: 880, height: 660 })
    .toFile('screenshot.png');
  fs.unlinkSync('screenshot-large.png');
}

module.exports = shotter;
