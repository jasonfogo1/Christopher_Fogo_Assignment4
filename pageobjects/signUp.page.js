
const Page = require('./homePage');
/**
     * define selectors using getter methods
     */
class SignUpPage extends Page {
   get pageTitle() {
      return $('span[data-ui-id="page-title-wrapper"]');
   }
   get inputFirstName() {
      return $('#firstname');
   }
   get inputLastName() {
      return $('#lastname');
   }
   get isSubscribed() {
      return $('#is_subscribed');
   }
   get inputEmail() {
      return $('#email_address');
   }
   get inputPassword() {
      return $('#password');
   }
   get passwordValidate() {
      return $('#password-strength-meter-label')
   }
   get inputPasswordConfirmation() {
      return $('#password-confirmation')
   }
   get submitButton() {
      return $('button[class="action submit primary"]');

   }
   async addInfo(fname, lname, email, password, confirmPassword) {
      await this.inputFirstName.setValue(fname);
      await this.inputLastName.setValue(lname);
      await this.isSubscribed.click();
      await this.inputEmail.setValue(email);
      await this.inputPassword.setValue(password);
      await this.inputPasswordConfirmation.setValue(confirmPassword);
      await this.submitButton.click();
   }
   async signOut() {
      await this.btnMenu.click();
      await this.btnSignout.click();
   }
   open() {

      return super.open('customer/account/create/');
   }
}
module.exports = new SignUpPage();