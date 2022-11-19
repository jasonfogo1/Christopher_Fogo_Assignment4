const SignUpPage = require('../pageobjects/signUp.page');
const AccountPage = require('../pageobjects/account.page');

describe.skip("Sign Up for website", ()=> {
    it('Should Sign Up customer sucessfully', async ()=> {
        await SignUpPage.open();
        await SignUpPage.addInfo('chris','clarke','priyeuheceba-93382@yopmail.com','MyP@$$word1993','MyP@$$word1993');
        await expect(AccountPage.successMessage).toBeExisting();
        await expect(AccountPage.successMessage).toHaveText("Thank you for registering with Fake Online Clothing Store.",{ignoreCase:true});



    })
})
