import { By } from 'selenium-webdriver'
const TIME_1000 = 1000

async function CheckBankBorrower(driver) {
    driver.executeScript("scroll(0, 250)")
    await driver.sleep(TIME_1000)
    await driver.findElement(By.xpath("//a[contains(@href,'#')]")).click()
    await driver.sleep(TIME_1000)
    await driver.findElement(By.xpath("//a[contains(@class,'btn btn-dark-mud w-100 rounded-0 text-start')]")).click()
    await driver.sleep(TIME_1000)
    await driver.executeScript("window.scrollBy(0,650)", "")
    await driver.sleep(TIME_1000)
    var modalBank = await driver.findElement(By.xpath("//button[@data-bs-target='#borrowerBank']"))
    driver.executeScript("arguments[0].click();", modalBank)
    await driver.sleep(2 * TIME_1000)
    await driver.findElement(By.id("form-borrower-check-bank")).submit()
    await driver.sleep(2 * TIME_1000)
    console.log('Check bank borrower!')
    // driver.quit()
}

export { CheckBankBorrower }