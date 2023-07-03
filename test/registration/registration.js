import { By, Key, until } from "selenium-webdriver";
import ReadFileAsBase64 from "../utils/base64.js";
import UrlCheck from "../utils/url_check.js";

const TIME_1000 = 1000;

async function Registration(driver, owner) {
  let url = UrlCheck();

  // open url
  await driver.get(url);

  // open url registration
  await driver.get(`${url}/register`);

  // open url partner register
  if (!owner) {
    await driver.get(url + "/partner/register");
  } else {
    // open url owner register
    await driver.get(url + "/owner/register");
  }

  // modal start
  await driver.findElement(By.xpath("//a[contains(@href,'#')]")).click();

  // checkbox modal
  // await driver.wait(until.elementLocated(By.css("input[type='checkbox']")), 20000)
  await driver.sleep(TIME_1000);
  await driver.findElement(By.css("input[type='checkbox']")).click();

  // btn next
  await driver.sleep(TIME_1000);
  await driver.findElement(By.xpath("//a[@id='buttonConfirm']")).click();

  // btn open capture camera
  await driver.sleep(TIME_1000);
  let capture = await driver.findElement(By.id("cameraButton"));
  await driver.executeScript("arguments[0].click();", capture);

  await driver.sleep(TIME_1000);
  let base64_txt;
  let filePath = process.env.PATH_SELFIE;
  await ReadFileAsBase64(filePath)
    .then((base64String) => {
      base64_txt = base64String;
      // console.log(base64String);
    })
    .catch((error) => {
      console.error(error);
    });

  await driver.sleep(TIME_1000);
  let base64 = await driver.findElement(By.xpath("//textarea[@id='selfie']"));
  await driver.executeScript(`arguments[0].value='${base64_txt}'`, base64);

  // confirm submit capture camera
  await driver.sleep(TIME_1000);
  await driver.findElement(By.id("buttonSubmit")).click();

  await driver.sleep(2 * TIME_1000);
  await driver.findElement(By.id("ktp")).sendKeys(process.env.PATH_KTP);

  //   if (!owner) {
  //     // live capture KTP
  //     await driver.findElement(By.css("div[id='dragDropArea']")).click();
  //     await driver.sleep(TIME_1000);
  //     await driver.findElement(By.id("liveFileButton")).click();
  //     await driver.sleep(TIME_1000);
  //     await driver.findElement(By.id("take-photo")).click();

  //     // submit KTP
  //     var base64_txt = fs
  //       .readFileSync("./registration/base64_ktp.txt")
  //       .toString("utf-8");
  //     var base64 = await driver.findElement(By.name("base64"));
  //     driver.executeScript(`arguments[0].value='${base64_txt}';`, base64);
  //   } else {
  //     // select file upload
  //     await driver
  //       .findElement(By.id("ktp"))
  //       .sendKeys(process.env.PATH_KTP);
  //   }

  await driver.sleep(1 * TIME_1000);
  var submitKTP = await driver.findElement(By.id("buttonSubmit"));
  driver.executeScript("arguments[0].click();", submitKTP);

  // complete form data e-KTP
  await driver.sleep(5 * TIME_1000);
  if (owner) {
    await driver
      .findElement(By.xpath("//input[@id='businessName']"))
      .sendKeys("Mandiri Rental Jaya");
  } else {
    await driver.sleep(TIME_1000);
    var pathBank = '//*[@id="bank"]/option[2]';
    await driver.findElement(By.xpath(pathBank)).click();

    await driver.findElement(By.id("bankAccountNumber")).sendKeys("718821949");
  }

  await driver
    .findElement(By.xpath("//input[@id='phone']"))
    .sendKeys("089777217122");

  var pathProvince = '//*[@id="province"]/option[4]';
  await driver.findElement(By.xpath(pathProvince)).click();
  await driver.sleep(TIME_1000);

  var pathCity = '//*[@id="city"]/option[4]';
  await driver.findElement(By.xpath(pathCity)).click();
  await driver.sleep(TIME_1000);

  var pathDistrict = '//*[@id="district"]/option[4]';
  await driver.findElement(By.xpath(pathDistrict)).click();
  await driver.sleep(TIME_1000);

  await driver.findElement(By.id("buttonSubmit")).click();

  await driver.sleep(TIME_1000);
  var randInt = Math.floor(10000 + Math.random() * 90000);
  if (owner) {
    await driver
      .findElement(By.xpath("//input[@id='email']"))
      .sendKeys(`selenium.owner${randInt}@gmail.com`);
  } else {
    await driver
      .findElement(By.xpath("//input[@id='email']"))
      .sendKeys(`selenium.partner${randInt}@gmail.com`);
  }
  await driver
    .findElement(By.xpath("//input[@id='password']"))
    .sendKeys("password");
  await driver
    .findElement(By.xpath("//input[@id='passwordConfirmation']"))
    .sendKeys("password");
  await driver.findElement(By.id("buttonSubmit")).click();

  await driver.sleep(3 * TIME_1000);
  await driver.get(url);
  if (owner) {
    console.log("Registration Owner Success!");
  } else {
    console.log("Registration Partner Success!");
  }
  // driver.quit()
}

export { Registration };
