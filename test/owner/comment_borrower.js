import { By } from 'selenium-webdriver'
const TIME_1000 = 1000

async function CommentBorrower(driver) {
    driver.executeScript("scroll(0, 250)")
    await driver.sleep(TIME_1000)
    await driver.findElement(By.xpath("//a[contains(@href, '#')]")).click()
    await driver.sleep(TIME_1000)
    
    var modalComment = await driver.findElement(By.xpath("//button[@data-bs-target='#detailModalComment']"))
    driver.executeScript("arguments[0].click();", modalComment)

    await driver.sleep(2 * TIME_1000)
    await driver.findElement(By.id("telatPengembalian")).click()

    await driver.sleep(TIME_1000)
    await driver.findElement(By.id("formComment")).submit()
    await driver.sleep(TIME_1000)

    console.log("Owner commented on the borrower!")
}

export { CommentBorrower }