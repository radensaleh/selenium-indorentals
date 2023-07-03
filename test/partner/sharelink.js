import { By, Key } from "selenium-webdriver";
import OSFunction from "../utils/os_function.js";

const TIME_1000 = 1000;

async function PartnerSharelink(driver) {
  await driver.sleep(TIME_1000);
  await driver
    .findElement(
      By.xpath(
        "//button[@class='btn btn-sm btn-dark-mud text-bumble-yellow-500 rounded-end btnShareLink']"
      )
    )
    .click();
  await driver.sleep(TIME_1000);
  await driver
    .findElement(
      By.xpath(
        "//button[@class='swal2-confirm swal2-styled swal2-default-outline']"
      )
    )
    .click();
  await driver.sleep(TIME_1000);
  let input = await driver.findElement(
    By.xpath(
      "//input[@class='form-control text-ash-grey border border-2 border-ash-grey']"
    )
  );
  let os = await OSFunction();
  if (os === "MacOS") {
    input.sendKeys(Key.chord(Key.COMMAND, "v"));
  } else {
    input.sendKeys(Key.chord(Key.CONTROL, "v"));
  }

  let getAttr = await driver
    .findElement(
      By.xpath(
        "//input[@class='form-control text-ash-grey border border-2 border-ash-grey']"
      )
    )
    .getAttribute("value");
  await driver.sleep(5 * TIME_1000);
  await driver.findElement(By.id("settingButton")).click();
  await driver.sleep(TIME_1000);
  await driver
    .findElement(
      By.xpath(
        "//button[@class='btn btn-dark-smoke font-red-hat-display px-12 py-8 rounded-0 text-start fw-700']"
      )
    )
    .click();
  await driver.sleep(TIME_1000);
  await driver.get(getAttr);
  console.log("Sharelink Success!");
}

export { PartnerSharelink };
