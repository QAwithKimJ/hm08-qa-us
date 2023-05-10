const page = require('../../page');
const helper = require('../../helper')

describe('Checking the functionality of Urban Routes', async () => {
    /*it('should open phone number modal', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumberButton = await $(page.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const pnoneNumberModal = await $(page.phoneNumberModal);
        await expect(pnoneNumberModal).toBeExisting();
    })*/

    /*it('should save the phone', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
    })*/

      it('should successfully order a taxi', async () => {
        // setting the address and clicking the taxi button
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');


        // selectng the supportive plan 
        const supportiveButton = await $(page.supportiveButton); 
        await supportiveButton.waitForDisplayed();
        await supportiveButton.click(); 
  

        // generate and submit random phone number, retrieve code
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();


        // clicking the payment button 
        const paymentMethodButton = await $(page.paymentMethodButton);
        await paymentMethodButton.waitForDisplayed();
        await paymentMethodButton.click(); 

        // clicking the add card button  
        const addCardButton = await $(page.addCardButton);
        await addCardButton.waitForDisplayed();
        await addCardButton.click(); 

        // adding card number 
        const cardNumber = await $(page.cardNumber);
        await cardNumber.waitForDisplayed();
        await cardNumber.setValue(1234567812345678);

        // adding the card code 
        const cardCode = await $(page.cardCode);
        await cardCode.waitForDisplayed();
        await cardCode.setValue(42); 


        // clicking on the page to activate the link button
        const cardSignatureStrip = await $(page.cardSignatureStrip);
        await cardSignatureStrip.waitForDisplayed();
        await cardSignatureStrip.click(); 
 
        // Clicking the link button
        const linkCardButton = await $(page.linkCardButton);
        await linkCardButton.waitForDisplayed();
        await linkCardButton.click(); 


        // closing the payment method window
        const closePaymentMethodModalButton = await $(page.closePaymentMethodModalButton);
        await closePaymentMethodModalButton.waitForDisplayed();
        await closePaymentMethodModalButton.click(); 
        const cardPaymentMethodIcon = await $(page.cardPaymentMethodIcon);
        await cardPaymentMethodIcon.waitForDisplayed();
        await expect(await $(cardPaymentMethodIcon)).toBeExisting(); 
       
        // leaving a message for the driver
        const messageDriverButton = await page.writeMessageToDriver('no music please');
        await expect(messageDriverButton).toHaveValue('no music please'); 

        // ordering a blanket and handkerchiefs 
        const orderReqs = await page.orderBlanketAndHandkerchiefs();
       
        // ordering 2 Ice Creams
        const iceCreamNumber = await page.orderIceCream();
        await expect(iceCreamNumber).toBe('2');

        // waiting for the driver
        await page.waitForTheDriver();
        await expect($('.order-body')).toBeExisting(); 
    })

      })


