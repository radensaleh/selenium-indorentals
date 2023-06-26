import { By } from "selenium-webdriver";
import "dotenv/config";

const TIME_1000 = 1000;

async function DeleteOwner(driver) {
  let url;
  if (process.env.MODE_LOCAL) {
    url = process.env.URL_LOCAL;
  } else {
    url = process.env.URL_STAGING;
  }

  await driver.sleep(TIME_1000);
  await driver.get(`${url}/super-admin/owner`);
  await driver.findElement(By.xpath("//a[contains(@href,'#')]")).click();
  await driver.sleep(TIME_1000);
  await driver
    .findElement(By.xpath("//button[@data-bs-target='#deleteUser']"))
    .click();
  await driver.sleep(TIME_1000);
  await driver.findElement(By.id("form-delete")).submit();
  await driver.sleep(5 * TIME_1000);
  console.log("Delete Owner Success!");
  // driver.quit();
}

async function DeletePartner(driver) {
  let url;
  if (process.env.MODE_LOCAL) {
    url = process.env.URL_LOCAL;
  } else {
    url = process.env.URL_STAGING;
  }

  await driver.sleep(TIME_1000);
  await driver.get(`${url}/super-admin/partner`);
  await driver.findElement(By.xpath("//a[contains(@href,'#')]")).click();
  await driver.sleep(TIME_1000);
  await driver
    .findElement(By.xpath("//button[@data-bs-target='#deleteUser']"))
    .click();
  await driver.sleep(TIME_1000);
  await driver.findElement(By.id("form-delete")).submit();
  await driver.sleep(5 * TIME_1000);
  console.log("Delete Partner Success!");
  // driver.quit();
}

export { DeleteOwner, DeletePartner };
