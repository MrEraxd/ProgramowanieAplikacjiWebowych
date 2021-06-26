const puppeteer = require("puppeteer");

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:1234');
    await page.waitForSelector(".top-nav__add-note-button");

    await page.$eval(
        ".top-nav__add-note-button",
        // @ts-ignore
        (button) => button.click()
    );

    await page.waitForSelector(".big-note-form__save-button");
    await page.type(".big-note-form__title", "Testowy tytuł notatki")
    await page.type(".big-note-form__content", "Notatka testowa")

    await page.$eval(
        ".big-note-form__save-button",
        // @ts-ignore
        (button) => button.click()
    );

    await page.waitForSelector(".note")

    await page.screenshot({ path: 'NoteAddTestResult.png' });

    await browser.close();
})();