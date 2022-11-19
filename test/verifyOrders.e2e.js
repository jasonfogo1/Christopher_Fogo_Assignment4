const AccountPage = require('../pageobjects/account.page');
const LoginPage = require('../pageobjects/login.page');
const MyOrderPage = require('../pageobjects/myOrder.page');

describe.skip("Verify Order", ()=> {
    it('Should Verify an Order', async ()=> {
        await LoginPage.open();
        let username="priyeuheceba-9338@yopmail.com";
        let pass="MyP@$$word1993";
        await LoginPage.login(username,pass);
        await expect(AccountPage.pageTitle).toBeExisting();
        await expect(AccountPage.pageTitle).toHaveTextContaining("My Account");
        await AccountPage.btnMyOrders.click();
        await expect(MyOrderPage.orderPageTitle).toBeExisting();
        await expect(MyOrderPage.orderPageTitle).toHaveText("My Orders",{ignoreCase:true});
        await MyOrderPage.btnViewOrder.click();
        await expect(MyOrderPage.viewOrderTitle).toBeExisting();
        await expect(MyOrderPage.viewOrderTitle).toHaveTextContaining("4875");



    })
})