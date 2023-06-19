import { By } from "selenium-webdriver"
const TIME_1000 = 1000

async function DeleteOwner(driver) {
    await driver.sleep(TIME_1000)
    await driver.get("https://stag.indo.rentals/super-admin/owner")
    await driver.findElement(By.xpath("//a[contains(@href,'#')]")).click()
    await driver.sleep(TIME_1000)
    await driver.findElement(By.xpath("//button[@data-bs-target='#deleteUser']")).click()
    await driver.sleep(TIME_1000)
    await driver.findElement(By.id("form-delete")).submit()
    await driver.sleep(5 * TIME_1000)
    console.log('Delete Owner Success!')
    driver.quit()
}

async function DeletePartner(driver) {
    await driver.sleep(TIME_1000)
    await driver.get("https://stag.indo.rentals/super-admin/partner")
    await driver.findElement(By.xpath("//a[contains(@href,'#')]")).click()
    await driver.sleep(TIME_1000)
    await driver.findElement(By.xpath("//button[@data-bs-target='#deleteUser']")).click()
    await driver.sleep(TIME_1000)
    await driver.findElement(By.id("form-delete")).submit()
    await driver.sleep(5 * TIME_1000)
    console.log('Delete Partner Success!')
    driver.quit()
}

export { DeleteOwner, DeletePartner }