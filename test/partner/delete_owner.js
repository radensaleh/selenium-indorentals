import { By } from 'selenium-webdriver'
const TIME_1000 = 1000

async function PartnerDeleteOwner(driver) {
    await driver.executeScript("scroll(0, 250)")
    await driver.sleep(TIME_1000)
    await driver.findElement(By.xpath("//a[contains(@href, '#')]")).click()
    await driver.sleep(TIME_1000)
    await driver.findElement(By.xpath("//button[@data-bs-target='#deleteUser']")).click()
    await driver.sleep(2 * TIME_1000)
    await driver.findElement(By.id("form-delete")).submit()
    // await driver.findElement(By.xpath("//button[@data-bs-dismiss='modal']")).click()
    await driver.sleep(2 * TIME_1000)
    console.log('Partner delete owner success!')
    // driver.quit()
}

export { PartnerDeleteOwner }