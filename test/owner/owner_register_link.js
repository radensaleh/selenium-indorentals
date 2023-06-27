import { By } from "selenium-webdriver";
import fs from "fs";
import { time } from "console";

const TIME_1000 = 1000;

function readFileAsBase64(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (error, data) => {
      if (error) {
        reject(error);
      } else {
        const base64String = data.toString("base64");
        resolve(base64String);
      }
    });
  });
}

async function RegisterOwnerLink(driver, slugLink) {
  let url;
  if (process.env.MODE_LOCAL) {
    url = process.env.URL_LOCAL;
  } else {
    url = process.env.URL_STAGING;
  }
  await driver.get(`${url}/${slugLink}`);
  await driver.findElement(By.xpath("//a[contains(@href, '#')]")).click();

  await driver.sleep(TIME_1000);
  await driver.findElement(By.css("input[type='checkbox']")).click();

  await driver.sleep(TIME_1000);
  await driver.findElement(By.xpath("//a[@id='buttonConfirm']")).click();

  await driver.sleep(2 * TIME_1000);
  var capture = await driver.findElement(By.id("cameraButton"));
  driver.executeScript("arguments[0].click();", capture);

  // await driver.sleep(TIME_1000);
  // var base64_txt = fs
  //   .readFileSync("./borrower/base64_liveness.txt")
  //   .toString("utf-8");
  // var selfie = await driver.findElement(By.id("selfie"));
  // driver.executeScript(`arguments[0].value='${base64_txt}'`, selfie);

  await driver.sleep(2 * TIME_1000);
  let base64_txt;
  let filePath = process.env.PATH_SELFIE;
  readFileAsBase64(filePath)
    .then((base64String) => {
      base64_txt = base64String;
      // console.log(base64String);
    })
    .catch((error) => {
      console.error(error);
    });

  await driver.sleep(2 * TIME_1000);
  let base64 = await driver.findElement(By.xpath("//textarea[@id='selfie']"));
  await driver.executeScript(`arguments[0].value='${base64_txt}'`, base64);

  await driver.sleep(TIME_1000);
  await driver.findElement(By.id("buttonSubmit")).click();

  await driver.sleep(2 * TIME_1000);
  await driver.findElement(By.id("ktp")).sendKeys(process.env.PATH_KTP);

  await driver.sleep(TIME_1000);
  var submitKTP = await driver.findElement(By.id("buttonSubmit"));
  driver.executeScript("arguments[0].click();", submitKTP);

  await driver.sleep(5 * TIME_1000);
  await driver
    .findElement(By.xpath("//input[@id='businessName']"))
    .sendKeys("Mandiri Rental Jaya");
  await driver
    .findElement(By.xpath("//input[@id='phone']"))
    .sendKeys("089777217122");

  await driver.sleep(TIME_1000);
  var pathProvince = '//*[@id="province"]/option[4]';
  await driver.findElement(By.xpath(pathProvince)).click();

  await driver.sleep(TIME_1000);
  var pathCity = '//*[@id="city"]/option[4]';
  await driver.findElement(By.xpath(pathCity)).click();

  await driver.sleep(TIME_1000);
  var pathDistrict = '//*[@id="district"]/option[4]';
  await driver.findElement(By.xpath(pathDistrict)).click();

  await driver.sleep(2 * TIME_1000);
  await driver.findElement(By.id("buttonSubmit")).click();

  await driver.sleep(TIME_1000);
  var randInt = Math.floor(1000 + Math.random() * 90000);
  await driver
    .findElement(By.xpath("//input[@id='email']"))
    .sendKeys(`selenium.bylink${randInt}@gmail.com`);
  await driver
    .findElement(By.xpath("//input[@id='password']"))
    .sendKeys("password");
  await driver
    .findElement(By.xpath("//input[@id='passwordConfirmation']"))
    .sendKeys("password");
  await driver.findElement(By.id("buttonSubmit")).click();

  await driver.sleep(3 * TIME_1000);
  console.log("Registration Owner by Link Success");
  // driver.quit()
}

export { RegisterOwnerLink };
