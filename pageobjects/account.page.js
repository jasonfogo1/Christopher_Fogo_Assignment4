const Page = require('./homePage');
/**
     * define selectors using getter methods
     */
class AccountPage extends Page {
  
    get successMessage(){
        return $('.message-success.success.message');
    }
    get pageTitle(){
        return $('span[data-ui-id="page-title-wrapper"]');
    }
    get btnMyOrders(){
        return $('(//a[contains(text(),"Orders")])[1]');
    }
   
   
   

}


module.exports = new AccountPage();
