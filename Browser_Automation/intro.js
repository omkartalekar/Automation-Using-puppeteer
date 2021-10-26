const puppeteer = require("puppeteer");
let page;
console.log("before");
const browserOpenpromise = puppeteer.launch({
    headless:false,
    slowMo:false,
    defaultViewport:null,
    args:["--start-maximized"]
});

browserOpenpromise.then(function (browser) {
    // currently opened tabs
    const pagesArrpromise = browser.pages();
    return pagesArrpromise;
}).then(function (browserPages) {
    page = browserPages[0];
    let gotoPromise = page.goto("https://www.google.com/");
    return gotoPromise;
}).then(function () {
    // waiting for the element to appear for the page
    let elementWaitPromise=page.waitForSelector("input[type='text']",{visible:true});
    return elementWaitPromise;
}).then(function () {
    // console.log("Reached google home page");
    let keysWillBeSendPromise = page.type("input[type='text']","pepcoding");
    return keysWillBeSendPromise;
}).then(function () {
    let enterWillBePressed = page.keyboard.press("Enter");
    return enterWillBePressed;
}).then(function(){
    let elementWaitPromise=page.waitForSelector("h3.LC20lb.DKV0Md");
    return elementWaitPromise;
}).then(function (){
    let keysWillBeSendPromise = page.click("h3.LC20lb.DKV0Md");
    return keysWillBeSendPromise;
})
.catch(function (err) {
    console.log(err);
})
console.log("After");
