const { Builder, By, Key, until } = require('selenium-webdriver');
const { configuration } = require('./config');

async function work() {
    const {
        userName,
        passWord,
        projectFirstLetters,
        asignamentFirstLetters,
        focalPointFirstLetters,
        workingDay
    } = configuration;

    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://timetracker.bairesdev.com/');
        await driver.findElement(By.id('ctl00_ContentPlaceHolder_UserNameTextBox')).sendKeys(userName, Key.RETURN);
        await driver.findElement(By.id('ctl00_ContentPlaceHolder_PasswordTextBox')).sendKeys(passWord, Key.RETURN);
        await driver.wait(until.titleIs('BairesDev :: TimeTracker'), 1000);
        let buttonIn;
        let buttonOut;
        for (let i = 0; i < workingDay.length; i++) {
            const work = workingDay[i];
            const { description, hours } = work;
            buttonIn = await driver.findElement(By.className('btn-blue'));
            buttonIn.click();
            await driver.wait(until.urlContains('Carga'));
            await driver.findElement(By.id('ctl00_ContentPlaceHolder_TiempoTextBox')).sendKeys(hours, Key.RETURN);
            await driver.findElement(By.id('ctl00_ContentPlaceHolder_idProyectoDropDownList')).sendKeys(projectFirstLetters, Key.RETURN);
            setTimeout(async () => {
                await driver.findElement(By.id('ctl00_ContentPlaceHolder_idTipoAsignacionDropDownList')).sendKeys(asignamentFirstLetters, Key.RETURN);
            }, 1000);
            setTimeout(async () => {
                await driver.findElement(By.id('ctl00_ContentPlaceHolder_DescripcionTextBox')).sendKeys(description, Key.RETURN);
            }, 2000);
            setTimeout(async () => {
                await driver.findElement(By.id('ctl00_ContentPlaceHolder_idFocalPointClientDropDownList')).sendKeys(focalPointFirstLetters, Key.RETURN);
            }, 3000);
            buttonOut = await driver.findElement(By.className('btn-blue'));
            buttonOut.click();
            await driver.wait(until.urlContains('Lista'));

        }
    } finally {
        await driver.quit();
    }
};

module.exports.work = work;
