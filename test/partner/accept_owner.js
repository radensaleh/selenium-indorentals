import { By } from "selenium-webdriver";
const TIME_1000 = 1000;

async function AcceptOwner(driver) {
  await driver.executeScript("scroll(0, 250)");
  await driver.sleep(TIME_1000);
  await driver.findElement(By.xpath("//a[contains(@href, '#')]")).click();
  await driver.sleep(TIME_1000);
  await driver
    .findElement(
      By.xpath(
        "//a[contains(@class, 'btn btn-dark-mud w-100 rounded-0 text-start')]"
      )
    )
    .click();
  await driver.sleep(TIME_1000);
  await driver.executeScript("scroll(0, 900)");
  await driver.sleep(2 * TIME_1000);
  await driver
    .findElement(By.xpath("//button[@data-bs-target='#ownerAccepted']"))
    .click();
  await driver.sleep(TIME_1000);
  await driver.findElement(By.id("form-owner-accepted")).submit();
  await driver.sleep(2 * TIME_1000);
  console.log("Accept Owner Success!");
  // driver.quit()
}

export { AcceptOwner };
