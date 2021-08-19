let homepage = require('../pages/homepage')

describe('demo calculator tests', function(){
    it('addition test', function(){
        homepage.getUrl('http://juliemr.github.io/protractor-demo/');
        homepage.enterFirstNumber('4');
        homepage.enterSecondNumber('5');
        homepage.clickGo();
        homepage.verifyResult('9');
        browser.sleep(2000)
    });


    it('subjection test', function(){
        homepage.getUrl('http://juliemr.github.io/protractor-demo/');
        homepage.enterFirstNumber('4');
        homepage.enterSecondNumber('5');
        homepage.clickGo();
        homepage.verifyResult('9');
        browser.sleep(2000)
    });

});