
class PaymentPage {
    get pageTitle(){
        return $("div[class='payment-group'] div[class='step-title']")
    }
    get btnPlaceOrder(){
        return $('button[title="Place Order"]')
    }

}
module.exports = new PaymentPage();