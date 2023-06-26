import { By, Key } from "selenium-webdriver";
import "dotenv/config";

async function Login(driver, role) {
  // set role credentials
  let email, password;
  switch (role) {
    case "admin":
      email = process.env.SU_EMAIL;
      password = process.env.SU_PASSWORD;
      break;
    case "partner":
      email = process.env.PARTNER_EMAIL;
      password = process.env.PO_PASSWORD;
      break;
    case "owner":
      email = process.env.OWNER_EMAIL;
      password = process.env.PO_PASSWORD;
      break;
    default:
      console.log("type error");
  }

  // set url local or staging
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
