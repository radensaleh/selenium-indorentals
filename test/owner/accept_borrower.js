import { By } from "selenium-webdriver";
const TIME_1000 = 1000;

async function getEndDate() {
  let date = new Date();
  let mm = date.getMonth() + 1;
  let dd = date.getDate() + 3;
  let yyyy = date.getFullYear();
  let endDate = `${dd}/${mm}/${yyyy}`;

  return endDate;
}

async function AcceptBorrower(driver) {
  driver.executeScript("scroll(0, 250)");
  await driver.sleep(TIME_1000);
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

  var modalAccept = await driver.findElement(
    By.xpath("//button[@data-bs-target='#borrowerAccepted']")
  );
  driver.executeScript("arguments[0].click();", modalAccept);

  await driver.sleep(TIME_1000);
  let endDate = await getEndDate();

  await driver.findElement(By.id("endDate")).sendKeys(endDate);
  await driver
    .findElement(
      By.css(
        "button[class='flex-grow-1 btn btn-bumble-yellow text-dark-smoke fw-700 m-0']"
      )
    )
    .click();
  console.log("Accept Borrower Success!");
  await driver.sleep(TIME_1000);
  // driver.quit();
}

export { AcceptBorrower };
