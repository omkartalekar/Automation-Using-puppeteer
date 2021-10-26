const puppeteer=require("puppeteer");
const loginLink="https://www.hackerrank.com/auth/login";
const email="xamot46817@stvbz.com";
const password="222525";
let browserOpen=puppeteer.launch({
    headless:false,
    args: ["--start-maximized"],
    defaultViewport:null
})

let page;
browserOpen.then(function(browserObj){
    let browserOpenPromise=browserObj.newPage();
    return browserOpenPromise;
}).then(function(newTab){
    page=newTab;
    let hackerrankOpenPromise=page.goto(loginLink);
    return hackerrankOpenPromise;
}).then(function(){
    let emailIsEntered=page.type("#input-1",email,{delay:50});
    return emailIsEntered;
}).then(function(){
    let passwordIsEntered=page.type("#input-2",password,{delay:50});
    return passwordIsEntered;
}).then(function(){
    let loginButtonClick=page.click("button[data-analytics='LoginPassword']");
    return loginButtonClick;
}).then(function(){
    let clickAlgorithmPromise=waitAndClick('.topic-card a[data-attr1="algorithms"]',page);
    return clickAlgorithmPromise;
}).then(function(){
    let getWarmUp=waitAndClick('input[value="warmup"]', page);
    return getWarmUp;
}).then(function(){
    let waitFor3Seconds=page.waitFor(3000);
    return waitFor3Seconds;
}).then(function(){
    let allChallengesPromise=page.$$(".ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled",{delay:50});
    return allChallengesPromise;
}).then(function(questionArr){
    console.log("Number Of questions",questionArr.length);
    let questionWillBeSolved=questionSolver(questionArr[0]);
    return questionWillBeSolved;
})

function waitAndClick(selector,cPage){
    return new Promise(function(resolve,reject){
        let waitForModelPromise=cPage.waitForSelector(selector);
        waitForModelPromise.then(function(){
            let clickModal=cPage.click(selector);
            return clickModal;
        }).then(function(){
            resolve();
        }).catch(function(err){
            reject();
        })
    })
}

function questionSolver(question){
    return new Promise(function(resolve,reject){
        let questionWillBeClicked=question.click();
        questionWillBeClicked.then(function(){
            let EditorFocusPromise=waitAndClick(".monaco-editor.no-user-select.vs",page);
            return EditorFocusPromise;

        })
        // });
    })

}
