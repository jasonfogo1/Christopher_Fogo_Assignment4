const SignUpPage = require('../pageobjects/signUp.page');
const AccountPage = require('../pageobjects/account.page');
const UsersData = require('./Data/ChromeUsersData.js'); //USE WHEN USING CHROME*(COMMENT THIS CODE WHEN USING FIREFOX)
//const UsersData = require('./Data/FirefoxUsersData.js'); //USE WHEN USING FIREFOX*(COMMENT THIS CODE WHEN USING CHROME)
const Page = require('../pageobjects/homePage.js');

describe("Sign Up for website", () => {

    for (const record of UsersData) {
        it('Should Sign Up customer sucessfully', async () => {
            await SignUpPage.open();
            await SignUpPage.pageTitle.waitForExist();
            await SignUpPage.addInfo(record.firstname, record.lastname, record.email, record.password, record.conPassword);
            await expect(AccountPage.successMessage).toBeExisting();
            await expect(AccountPage.successMessage)
                .toHaveText("Thank you for registering with Fake Online Clothing Store.", { ignoreCase: true });
            await SignUpPage.signOut();
        })
    }
})
