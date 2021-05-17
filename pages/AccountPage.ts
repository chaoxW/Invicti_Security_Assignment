import { browser, element, by, protractor } from "protractor";
import { Util } from "../Utility/Util";
import { pageEl } from "../Utility/pageEl";

const log = require("../config/log4js").default;

export class AccountPage {

    accountPageData = require("../testdata/AccountPage");
    // selectAccounts = new pageEl(by.xpath("//select[@id='listAccounts']"))

    fisrtAccount = this.accountPageData.fisrtAccount;
    secondAccount = this.accountPageData.secondAccount;
    selectaccountsXpath = this.accountPageData.selectAccounts;
    enteraccountBtnXpath = this.accountPageData.enterAccountBtn;
    viewaccountsummaryXpath = this.accountPageData.viewAccountSummaryLk;

    enterAccountBtn = new pageEl(by.xpath(this.enteraccountBtnXpath));
    selectAccounts = new pageEl(by.xpath(this.selectaccountsXpath));
    viewAccountSummary = new pageEl(by.xpath(this.viewaccountsummaryXpath));

    async SelectFirstAccount() {
        let fisrtAccount = this.fisrtAccount;
        log.debug(fisrtAccount);
        await this.selectAccounts.selectByOptionText(fisrtAccount);
    }

    async SelectSecondAccount() {
        let secondAccount = this.secondAccount;
        log.debug(secondAccount);
        await this.selectAccounts.selectByOptionText(secondAccount);
    }

    async selectACustomer(account: string) {
        log.debug(account);
        await this.selectAccounts.selectByOptionText(account);
    }

    async navigateToAccountPage() {
        await this.enterAccountBtn.click();
    }

    async navigateToViewAccountSummary() {
        await this.viewAccountSummary.click();
    }

}