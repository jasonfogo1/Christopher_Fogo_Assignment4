const CatalogPage = require('../pageobjects/catalog.page');
const LoginPage = require('../pageobjects/login.page');
const CheckOutPage = require('../pageobjects/checkOut.page');
const PaymentPage = require('../pageobjects/payment.page');
const OrderCompletePage = require('../pageobjects/orderComplete.page');
const UsersData = require('./Data/ChromeUsersData.js'); //USE WHEN USING CHROME*(COMMENT THIS CODE WHEN USING FIREFOX)
//const UsersData = require('./Data/FirefoxUsersData.js'); //USE WHEN USING FIREFOX*(COMMENT THIS CODE WHEN USING CHROME)


describe("Checkout", () => {
    it('Should Checkout Cart Sucessfully', async () => {
        await LoginPage.open();
        await expect(LoginPage.inputEmail).toBeExisting();
        let username = UsersData[0].email;
        let pass = UsersData[0].password;
        await LoginPage.login(username, pass);
        await expect(LoginPage.welcomeMsg).toBeExisting({ timeout: 5000 });
        await CatalogPage.open();
        await CatalogPage.hoverProductImage.moveTo();
        await CatalogPage.add2Cart();
        await CatalogPage.successMsg.waitForExist({ timeout: 10000 });
        await expect(CatalogPage.successMsg).toBeDisplayed();
        await CatalogPage.goToCheckOut();
        await expect(CheckOutPage.pageTitle).toHaveText("Shipping Address");
        let dec = await CheckOutPage.btnNewAddress.isExisting({ timeout: 5000 });
        if (dec == true) {
            await CheckOutPage.shippingMeth.click();
            await CheckOutPage.btnNext.click();
        }
        else {
            await CheckOutPage.addShipInfo(UsersData[1].firstname, UsersData[1].lastname, UsersData[1].company,
                UsersData[1].street, UsersData[1].city, UsersData[1].state, UsersData[1].zip, UsersData[1].country,
                UsersData[1].phone);
        }
        await expect(PaymentPage.pageTitle).toHaveText("Payment Method");
        await PaymentPage.obstructionImg.isExisting(false);
        await PaymentPage.btnPlaceOrder.isClickable({ timeout: 10000 });
        await PaymentPage.btnPlaceOrder.click();
        await OrderCompletePage.successMsg.isExisting({ timeout: 10000 });
        await expect(OrderCompletePage.successMsg).toHaveTextContaining("Thank you for your purchase!");
    })
})