import "chromedriver";
import chrome, { Driver } from "selenium-webdriver/chrome.js";
import { Login } from "./login/login.js";
import { Registration } from "./registration/registration.js";
import { AcceptPartner } from "./superadmin/accept_register.js";
import { PartnerTopupToken } from "./partner/topup_token.js";
import { PartnerSharelink } from "./partner/sharelink.js";
import { GiftTrialToken } from "./superadmin/gift_trial_token.js";
import { DeleteOwner, DeletePartner } from "./superadmin/delete_user.js";
import { Builder } from "selenium-webdriver";
import { RegisterBorrower } from "./borrower/registerby_link.js";
import { AcceptBorrower } from "./owner/accept_borrower.js";
import { CommentBorrower } from "./owner/comment_borrower.js";
import { CreditHistoryBorrower } from "./owner/credit_history_borrower.js";
import { OwnerTopupToken } from "./owner/topup_token.js";
import { CheckBankBorrower } from "./owner/check_bank_borrower.js";
import { ReportBorrower } from "./owner/report_borrower.js";
import { OwnerSharelink } from "./owner/sharelink.js";
import { RegisterOwnerLink } from "./owner/owner_register_link.js";
import { AcceptOwner } from "./partner/accept_owner.js";
import { PartnerDeleteOwner } from "./partner/delete_owner.js";

async function Index() {
  var chromeOptions = new chrome.Options()
    .addArguments("use-fake-device-for-media-stream")
    .addArguments("use-fake-ui-for-media-stream");

  // To wait for browser to build and launch properly
  let driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(chromeOptions)
    .build();

  // Login
  // await Login(driver);

  /**
   * Super Admin
   * */
  // await AcceptPartner(driver);
  // await GiftTrialToken(driver);
  // await DeletePartner(driver);
  // await DeleteOwner(driver);

  /**
   * Partner
   */
  // await PartnerTopupToken(driver);
  // await PartnerSharelink(driver);
  // await AcceptOwner(driver);
  // await PartnerDeleteOwner(driver);

  /**
   * Owner
   */
  // await OwnerSharelink(driver);
  // await OwnerTopupToken(driver);
  // await AcceptBorrower(driver);
  // await CommentBorrower(driver);
  // await CreditHistoryBorrower(driver);
  // await CheckBankBorrower(driver);
  // await ReportBorrower(driver);
  // await RegisterOwnerLink(driver);

  /**
   * Borrower
   */
  // await RegisterBorrower(driver);

  /**
   * Registration
   * true: owner, false: partner
   */
  // await Registration(driver, false);
}

Index();
