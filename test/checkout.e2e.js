const CatalogPage = require('../pageobjects/catalog.page');
const LoginPage = require('../pageobjects/login.page');
const CheckOutPage = require('../pageobjects/checkOut.page');
const PaymentPage = require('../pageobjects/payment.page');
const OrderCompletePage = require('../pageobjects/orderComplete.page');

describe.skip("Checkout", ()=> {
    it('Should Checkout Cart Sucessfully', async ()=> {
        await LoginPage.open();
        await expect(LoginPage.inputEmail).toBeExisting();
        let username="priyeuheceba-93382@yopmail.com";
        let pass="MyP@$$word1993";
        await LoginPage.login(username,pass);
        await expect(LoginPage.welcomeMsg).toBeExisting();
        await CatalogPage.open();
        await CatalogPage.hoverProductImage.moveTo();
        await CatalogPage.add2Cart();
        await CatalogPage.successMsg.waitForExist();
        await expect(CatalogPage.successMsg).toBeDisplayed();
        await CatalogPage.goToCheckOut();
        await expect(CheckOutPage.pageTitle).toHaveText("Shipping Address");
        //     let dec= await expect(CheckOutPage.btnNewAddress).toBeDisplayed();
        // if(dec == true)
        // {
        //     await CheckOutPage.btnNext.click();
            
        // }
        // else{
            await CheckOutPage.addShipInfo("John","Green","Tech","red street","Tampa","Florida","12345-6789","United States","8763456540");

        //}
        await expect(PaymentPage.pageTitle).toHaveText("Payment Method");
        await PaymentPage.btnPlaceOrder.click();
        await expect(OrderCompletePage.successMsg).toHaveTextContaining("Thank you for your purchase!");









    })
})