import { By, Key } from 'selenium-webdriver'
const SU_EMAIL = 'superadmin@example.com'
const SU_PSWD  = 'Password1@'

async function Login(driver) {
    // let email = "selenium.partner57351@gmail.com" //partner
    let email = "selenium.test46908@gmail.com" //owner
    let password = "password"
    // let email = SU_EMAIL
    // let password = SU_PSWD
    let url = "https://stag.indo.rentals/login"

    // open url
    await driver.get(url)

    //set email & submit passowrd
    await driver.sleep(1000)
    await driver.findElement(By.name("email")).sendKeys(email)
    await driver.sleep(500)
    await driver.findElement(By.name("password")).sendKeys(password,Key.RETURN)
    console.log('Login Success!')
}
export { Login }