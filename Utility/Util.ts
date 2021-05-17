import { protractor, browser } from 'protractor';
const log = require("../config/log4js").default;
const expect = require('chai').expect;

export class Util {

    static async VerifyAndCloseAlert(text: string) {
        let EC = protractor.ExpectedConditions;
        browser.wait(EC.alertIsPresent(), 4000, "ALert not found");

        let alert = await browser.switchTo().alert();
        let alertText = await alert.getText();

        log.debug(alertText);
        await browser.sleep(1000);
        expect(alertText).to.include(text);
        await alert.accept();
    }

}
