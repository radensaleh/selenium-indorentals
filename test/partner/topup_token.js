import { By, Key } from "selenium-webdriver";

async function PartnerTopupToken(driver) {
  let url;
  if (process.env.MODE_LOCAL) {
    url = process.env.URL_LOCAL;
  } else {
    url = process.env.URL_STAGING;
  }

  await driver.get(`${url}/partner/topup`);
  await driver
    .findElement(By.id("token"))
    .sendKeys(Key.chord(Key.COMMAND, "a"));
  await driver.findElement(By.id("token")).sendKeys("2");
  await driver.findElement(By.id("BRI")).click();

  await driver.executeScript("scroll(0, 350)");

  var checkbox = await driver.findElement(By.css("input[type='checkbox']"));
  await driver.executeScript("arguments[0].click();", checkbox);

  var btnSubmitPayment = await driver.findElement(
    By.css("button[type='submit']")
  );
  await driver.executeScript("arguments[0].click();", btnSubmitPayment);

  await driver.sleep(3000);
  var btnCheckPayment = await driver.findElement(
    By.css("button[type='submit']")
  );
  await driver.executeScript("arguments[0].click();", btnCheckPayment);
  console.log("Create Payment Topup Token Success!");
  // driver.quit()
}

export { PartnerTopupToken };
