import { Given, When, Then } from '@wdio/cucumber-framework';
import SubscribtionPage from'../pageobjects/Subscribtion.page.js';



Given(/^The user is on the Subscribtion page for (.+) Country$/, async (country) => {
     SubscribtionPage.naviagtesToSubscribtionPage(country);
    // SubscribtionPage.getCurrentCountry(country);
});

Then(/^Subscribtion Packages type and price for (.+) are listed Correctly$/, async (countryName) => {
    await SubscribtionPage.getPackage1Type();
    await SubscribtionPage.getPackage2Type();
    await SubscribtionPage.getPackage3Type();
    await SubscribtionPage.gettheFirstPackagePriceAndCurrency(countryName);
    await SubscribtionPage.gettheSecondPackagePriceAndCurrency(countryName);
    await SubscribtionPage.gettheThirdPackagePriceAndCurrency(countryName);
});



