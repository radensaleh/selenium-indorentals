import { By } from "selenium-webdriver";
import "dotenv/config";

const TIME_1000 = 1000;

async function AcceptPartner(driver) {
  let url;
  if (process.env.MODE_LOCAL) {
    url = process.env.URL_LOCAL;
  } else {
    url = process.env.URL_STAGING;
  }

  await driver.get(`${url}/super-admin/partner`);

  await driver.sleep(TIME_1000);
  // await driver.findElement(By.xpath("//img[@alt='Sort Icon']")).click()
  await driver.findElement(By.xpath("//a[contains(@href,'#')]")).click();
  await driver.sleep(TIME_1000);
  await driver
    .findElement(
      By.xpath(
        "//a[contains(@class,'btn btn-dark-mud w-100 rounded-0 text-start')]"
      )
    )
    .click();
  await driver.sleep(TIME_1000);
  var modalAcc = await driver.findElement(
    By.xpath("//button[@data-bs-target='#partnerAccepted']")
  );
  driver.executeScript("arguments[0].click();", modalAcc);
  await driver.sleep(5 * TIME_1000);
  await driver
    .findElement(
      By.css(
        "button[class='flex-grow-1 btn btn-bumble-yellow text-dark-smoke fw-700 m-0']"
      )
    )
    .click();
  console.log("Accept Partner Success!");
  await driver.sleep(TIME_1000);
  driver.quit();
}

export { AcceptPartner };
