import { By } from 'selenium-webdriver'

async function GiftTrialToken(driver) {
    await driver.get('https://stag.indo.rentals/super-admin/owner')
    await driver.findElement(By.xpath("//a[contains(@href,'#')]")).click()
    await driver.sleep(1000)
    await driver.findElement(By.xpath("//button[@data-bs-target='#trialUser']")).click()
    await driver.sleep(2000)
    await driver.findElement(By.id("form-trial")).submit()
    await driver.sleep(2000)
    console.log('Gift Trial Token Success!')
    driver.quit()
}

export { GiftTrialToken }