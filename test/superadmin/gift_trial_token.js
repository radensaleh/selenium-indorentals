import { By } from "selenium-webdriver";

async function GiftTrialToken(driver) {
  let url;
  if (process.env.MODE_LOCAL) {
    url = process.env.URL_LOCAL;
  } else {
    url = process.env.URL_STAGING;
  }

  await driver.get(`${url}/super-admin/owner`);
  await driver.findElement(By.xpath("//a[contains(@href,'#')]")).click();
  await driver.sleep(1000);
  await driver
    .findElement(By.xpath("//button[@data-bs-target='#trialUser']"))
    .click();
  await driver.sleep(2000);
  await driver.findElement(By.id("form-trial")).submit();
  await driver.sleep(2000);
  console.log("Gift Trial Token Success!");
  // driver.quit();
}

export { GiftTrialToken };
