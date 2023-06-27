import { By } from "selenium-webdriver";
const TIME_1000 = 1000;

async function ReportBorrower(driver) {
  driver.executeScript("scroll(0, 250)");
  await driver.sleep(TIME_1000);
  await driver.findElement(By.xpath("//a[contains(@href, '#')]")).click();
  await driver.sleep(TIME_1000);
  await driver
    .findElement(By.xpath("//button[@data-bs-target='#detailModalReport']"))
    .click();
  await driver.sleep(TIME_1000);
  await driver
    .findElement(By.id("report"))
    .sendKeys("Selenium Automation Testing for Report Borrower");
  if (process.env.PATH_FILE_REPORT != "") {
    await driver
      .findElement(By.name("report_file"))
      .sendKeys(process.env.PATH_FILE_REPORT);
  }
  await driver.sleep(TIME_1000);
  await driver.findElement(By.id("formReport")).submit();
  await driver.sleep(2 * TIME_1000);
  console.log("Report Borrower Success!");
  // driver.quit()
}

export { ReportBorrower };
