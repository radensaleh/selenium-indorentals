import { By, Key } from "selenium-webdriver";
import "dotenv/config";

async function Login(driver) {
  // super admin
  //   let email = process.env.SU_EMAIL;
  //   let password = process.env.SU_PASSWORD;

  // owner & partner
  //   let email = process.env.PARTNER_EMAIL;
  let email = process.env.OWNER_EMAIL;
  let password = process.env.PO_PASSWORD;

  let url;
  if (process.env.MODE_LOCAL) {
    url = process.env.URL_LOCAL;
  } else {
    url = process.env.URL_STAGING;
  }

  // open url
  await driver.get(`${url}/login`);

  //set email & submit passowrd
  await driver.sleep(1000);
  await driver.findElement(By.name("email")).sendKeys(email);
  await driver.sleep(500);
  await driver.findElement(By.name("password")).sendKeys(password, Key.RETURN);
  console.log("Login Success!");
}
export { Login };
