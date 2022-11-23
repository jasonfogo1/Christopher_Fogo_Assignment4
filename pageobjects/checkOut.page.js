

/**
     * define selectors using getter methods
     */
class CheckOutPage {

   get pageTitle() {
      return $('#shipping > div.step-title');
   }
   get inputFirstName() {
      return $('[name="firstname"]');
   }
   get inputLastName() {
      return $('[name="lastname"]');
   }
   get inputCompany() {
      return $('[name="company"]');
   }
   get inputStreet() {
      return $('[name="street[0]"]');
   }
   get inputCity() {
      return $('[name="city"]');
   }
   get dropDownState() {
      return $('[name="region_id"]');
   }
   get inputZip() {
      return $('[name="postcode"]')
   }
   get dropDownCountry() {
      return $('[name="country_id"]');
   }
   get inputPhoneNumber() {
      return $('[name="telephone"]');
   }
   get shippingMeth() {
      return $('input[value="tablerate_bestway"]');
   }
   get btnNext() {
      return $('.button.action.continue.primary');
   }
   get btnNewAddress() {
      return $('button[class="action action-show-popup"]');
   }

   async addShipInfo(fname, lname, company, street, city, state, zip, country, phone) {
      await this.inputFirstName.setValue(fname);
      await this.inputLastName.setValue(lname);
      await this.inputCompany.setValue(company)
      await this.inputStreet.setValue(street);
      await this.inputCity.setValue(city);
      await this.dropDownState.selectByAttribute("data-title", state);
      await this.inputZip.setValue(zip);
      await this.dropDownCountry.selectByAttribute("data-title", country);
      await this.inputPhoneNumber.setValue(phone);
      await this.shippingMeth.click();
      await this.btnNext.isClickable({ timeout: 5000 });
      await this.btnNext.click();
   }
}


module.exports = new CheckOutPage();