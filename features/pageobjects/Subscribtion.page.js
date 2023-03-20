import { setOptions } from 'expect-webdriverio';

class subscribtionPage {

   async naviagtesToSubscribtionPage(country) {
      const Url = "https://subscribe.stctv.com/" + country + "-en";
      browser.url(Url);
      browser.maximizeWindow();
   }

   async getPackage1Type() {
        //To get the first package details and check it's name is correct 
      const package1 = await $('#name-lite');
      await expect(package1).toBeDisplayed()
      const package1Type = await package1.getText();
      await expect(package1).toHaveText('LITE');
      console.log("The FirstPackage is :" + package1Type);

   }
   async getPackage2Type() {
      //To get the second package details and check it's name is correct 
      const package2 = await $('#name-classic');
      await expect(package2).toBeDisplayed();
      const package2Type = await package2.getText();
      await expect(package2).toHaveText('CLASSIC');
      console.log("The Second Package is :" + TestData.package2);
   }
   async getPackage3Type() {
       //To get the third package details and check it's name is correct 
      const package3 = await $('#name-premium');
      await expect(package3).toBeDisplayed();
      const package3Type = await package3.getText;
      await expect(package3).toHaveText('PREMIUM');
      console.log("The Third Package is :" + TestData.package3);
   }
   async gettheFirstPackagePriceAndCurrency(countryValue) {
      //Get the first package Price and Currency details and make sure that there values are correct .
      const firstPackagePriceAndCurrency = await $('#currency-lite');
      if (countryValue == "sa") {
         await expect(firstPackagePriceAndCurrency).toHaveText('15 SAR/month');
         console.log("The Lite Package price and  Currency For " + countryValue + " is" + firstPackagePriceAndCurrency);
      }
      else if (countryValue == "bh") {
         await expect(firstPackagePriceAndCurrency).toHaveText('2 BHD/month');
         console.log("The Lite Package price and  Currency For " + countryValue + " is" + firstPackagePriceAndCurrency);

      }
      else if (countryValue == "kw") {
         await expect(firstPackagePriceAndCurrency).toHaveText('1.2 KWD/month');
         console.log("The Lite Package price and  Currency For " + countryValue + " is" + firstPackagePriceAndCurrency);

      }

   }
   async gettheSecondPackagePriceAndCurrency(countryValue) {
      //Get the Second package Price and Currency details and make sure that there values are correct .
      const secoundPackagePriceAndCurrency  = await $('//*[@id="currency-classic"]');
      if (countryValue=="sa"){
         await expect(secoundPackagePriceAndCurrency).toHaveText('25 SAR/month');
         console.log("The Classic Package price and  Currency For " + countryValue + " is" + secoundPackagePriceAndCurrency);
      }
      else if (countryValue=="bh"){
         await expect(secoundPackagePriceAndCurrency).toHaveText('3 BHD/month');
         console.log("The Classic Package price and  Currency For " + countryValue + " is" + secoundPackagePriceAndCurrency);
      }
      else if (countryValue=="kw"){
         await expect(secoundPackagePriceAndCurrency).toHaveText('2.5 KWD/month');
         console.log("The Classic Package price and  Currency For " + countryValue + " is" + secoundPackagePriceAndCurrency);
      }
   }
   async gettheThirdPackagePriceAndCurrency(countryValue) {
      //Get the Third package Price and Currency details and make sure that there values are correct .
      const thirdPackagePriceAndCurrency = await $('//*[@id="currency-premium"]');
      if (countryValue=="sa"){
         await expect(thirdPackagePriceAndCurrency).toHaveText('60 SAR/month');
         console.log("The Premium Package price and  Currency For " + countryValue + " is" + thirdPackagePriceAndCurrency);
      }
      else if (countryValue=="bh"){
         await expect(thirdPackagePriceAndCurrency).toHaveText('6 BHD/month');
         console.log("The Premium Package price and  Currency For " + countryValue + " is" + thirdPackagePriceAndCurrency);
      }
      else if (countryValue=="kw"){
         await expect(thirdPackagePriceAndCurrency).toHaveText('4.8 KWD/month');
         console.log("The Premium Package price and  Currency For " + countryValue + " is" + thirdPackagePriceAndCurrency);
      }
     
   }

}
export default new subscribtionPage();
